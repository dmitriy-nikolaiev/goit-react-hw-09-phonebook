// export const getIsAuthenticated = (state) => Boolean(state.auth.token);
export const getIsAuthenticated = (state) => state.auth.isAuthenticated;

export const getUser = (state) => state.auth.user;

export const getError = (state) => state.auth.error;
