import type { UsersResponse } from "../../services/users.service";
import { fetchUsers } from "../../store/users/userSlice";
import { useAppDispatch } from "../../store/hooks";

export default function PaginationComponent({ pagination, onDabbaDiya }: { pagination: UsersResponse["pagination"], onDabbaDiya: (data: any) => void }) {
    const { totalItems, totalPages, currentPage, hasNextPage, hasPreviousPage }: UsersResponse["pagination"] = pagination ?? {
        totalItems: 0,
        totalPages: 0,
        currentPage: 0,
        hasNextPage: false,
        hasPreviousPage: false,
    };
    const dispatch = useAppDispatch();
    return (
        <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
            <button onClick={() => dispatch(fetchUsers(currentPage - 1))} disabled={!hasPreviousPage}>{'< Previous '}</button>
            <button onClick={() => dispatch(fetchUsers(currentPage + 1))} disabled={!hasNextPage}>{' Next >'}</button>
            <button onClick={() => onDabbaDiya("Dabba Diya")}>Dabba na</button>
        </div>
    )
}