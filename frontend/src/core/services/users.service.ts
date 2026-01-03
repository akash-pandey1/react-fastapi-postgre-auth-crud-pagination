import api from "../lib/axios";
import type { User } from "../types/auth.type";

export interface UsersResponse {
  success: boolean;
  data: User[];
  pagination?: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

export const usersService = {
  async getAll(page: number = 1): Promise<UsersResponse> {
    const res = await api.get<UsersResponse>("/users", {
      params: {
        page,
        limit: 10,
      },
    });
    return res.data;
  },
};