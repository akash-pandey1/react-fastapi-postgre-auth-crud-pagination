import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../core/store/hooks";
import { fetchUsers } from "../core/store/users/userSlice";
import type { User } from "../core/types/auth.type";
import PaginationComponent from "../core/components/ui/pagination";

export default function UserList() {
  const dispatch = useAppDispatch();
  const { users, pagination, isLoading, isError, errorMessage } =
    useAppSelector((state) => state.users);
    const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  useEffect(() => {
    dispatch(fetchUsers(1));
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="p-8 text-center text-gray-600">Loading users...</div>
    );
  }

  if (isError) {
    return (
      <div className="p-8 text-center text-red-600">
        {errorMessage || "Failed to load users"}
      </div>
    );
  }

  const handleChildData = (data: any) => {
    console.log(data);
  };

  

  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold leading-tight">Users</h2>
            {pagination && (
              <span className="text-sm text-gray-500">
                Total: {pagination.totalItems} • Page {pagination.currentPage} of{" "}
                {pagination.totalPages}
              </span>
            )}
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Created At
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user: User) => (
                    <tr key={user.id}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex">
                          <div className="flex-shrink-0 w-10 h-10">
                            <img
                              className="w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                              alt=""
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {user.name}
                            </p>
                            <p className="text-gray-600 whitespace-no-wrap">
                              {user.id}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {user.email}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {user.role}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-600 whitespace-no-wrap">
                          {user.createdAt
                            ? new Date(user.createdAt).toLocaleString()
                            : "-"}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                        <button
                        onClick={() => setOpenMenuId(user.id)}
                        data-popover-target={`menu-${user.id}`}
                          type="button"
                          className="inline-block text-gray-500 hover:text-gray-700"
                        >
                          <svg
                            className="inline-block h-6 w-6 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                          </svg>
                        </button>
                        {openMenuId === user.id && (   
                          <ul
                           role="menu"
                           data-popover={`menu-${user.id}`}
                           data-popover-placement="bottom"
                           className="absolute z-10 min-w-[180px] overflow-auto rounded-lg border border-slate-200 bg-white p-1.5 shadow-lg shadow-sm focus:outline-none"
                          >
                            <li
                              onClick={() => setOpenMenuId(null)}
                              role="menuitem"
                              className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                            >
                              {`Menu Item 1`}
                            </li>
                            <li
                              onClick={() => setOpenMenuId(null)}
                              role="menuitem"
                              className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                            >
                             {`Menu Item 2`}
                           </li>
                         </ul>)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {pagination && <PaginationComponent pagination={pagination} onDabbaDiya={handleChildData} />}
              {users.length === 0 && (
                <div className="p-6 text-center text-gray-500">
                  No users found.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}