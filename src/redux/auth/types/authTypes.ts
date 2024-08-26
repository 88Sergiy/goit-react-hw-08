export interface IAuthState {
  user: IUser;
  token: string | null;
  isLoggedIn: boolean | null;
  isRefreshing: boolean | null;
  isError: string | number;
  isLoading: boolean;
}

export interface IUser {
  name: string | null;
  email: string | null;
}

export interface IAuthCredentials {
  name: string;
  email: string;
  password: string;
}

export interface IAuthResponse {
  token: string;
  user: IUser;
}

export type errorString = {
  rejectValue: string;
};

export type errorNumber = {
  rejectValue: number;
};