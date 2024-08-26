import { RootState } from '../store';

export const selectIsLoading = (state: RootState) => state.auth.isLoading;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectIsAuthError = (state: RootState) => state.auth.isError;
export const selectUser = (state: RootState) => state.auth.user;
export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;