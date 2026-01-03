export interface User {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  createdAt?: string;
  updatedAt?: string;
}
  
  export interface AuthResponse {
    access_token: string;
    user: User;
  }
  
  export interface LoginPayload {
    email: string;
    password: string;
  }

  export interface AuthState {
    user: User | null;
    token: string | null;
    isLoading: boolean;
    isError: boolean;
    errorMessage: string | null;
  }
  
  export interface RegisterPayload extends LoginPayload {
    name: string;
    role: "user" | "admin";
  }