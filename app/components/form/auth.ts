export interface AuthResponse {
  message: string;
  state: string;
  token: string;
  token_type: string;
  token_expires_in: number | null;
  user: {
    id: string;
    name: string;
    surname: string | null;
    middlename: string | null;
    email: string;
    phone: string | null;
    role: string;
    status: string;
  };
}
