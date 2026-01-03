import axios from "axios";
import api from "../lib/axios";
import type {
  AuthResponse,
  LoginPayload,
  RegisterPayload,
  User,
} from "../types/auth.type";
import { clearToken, setToken } from "../lib/storage";

const AUTH_BASE_URL =
  (import.meta as any)?.env?.VITE_AUTH_API_URL ??
  api.defaults.baseURL ??
  "/auth";

async function request<T>(promise: Promise<{ data: T }>): Promise<T> {
  try {
    const res = await promise;
    return res.data;
  } catch (error) {
    const isAxios = axios.isAxiosError(error);
    const message =
      (isAxios && error.response?.data?.message) ||
      (isAxios && error.response?.data) ||
      (error as Error).message;
    throw new Error(
      typeof message === "string" ? message : JSON.stringify(message)
    );
  }
}

export async function login(payload: LoginPayload): Promise<AuthResponse> {
  const data = await request<AuthResponse>(
    api.post("/auth/login", payload, { baseURL: AUTH_BASE_URL })
  );
  setToken(data.access_token);
  return data;
}

export async function register(
  payload: RegisterPayload
): Promise<AuthResponse> {
  const data = await request<AuthResponse>(
    api.post("/auth/register", payload, { baseURL: AUTH_BASE_URL })
  );
  setToken(data.access_token);
  return data;
}

export async function currentUser(): Promise<User> {
  return request<User>(api.get("/me", { baseURL: AUTH_BASE_URL }));
}

export function logout(): void {
  clearToken();
}