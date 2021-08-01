import axios from 'axios';
import * as authActions from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:3001';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/*
 * POST @ /users/signup
 * body { name, email, password }
 *
 * После успешной регистрации добавляем токен в HTTP-заголовок
 */
export const register = (credentials) => async (dispatch) => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post('/users/signup', credentials);

    // console.log(response, 'response - register operations');
    // token.set(response.data.token);
    dispatch(authActions.registerSuccess(response.data));

    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    // console.log(error, 'error - register operations');
    dispatch(authActions.registerError(error.message));
  }
};

/*
 * POST @ /users/login
 * body:
 *    { email, password }
 *
 * После успешного логина добавляем токен в HTTP-заголовок
 */
export const logIn = (credentials) => async (dispatch) => {
  dispatch(authActions.loginRequest());
  // dispatch(authActions.loginError(''));

  try {
    const response = await axios.post('/users/login', credentials);

    token.set(response.data.token);
    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    // console.log(error, 'error - logIn operations');
    dispatch(authActions.loginError(error.message));
  }
};

/*
 * POST @ /users/logout
 * headers:
 *    Authorization: Bearer token
 *
 * 1. После успешного логаута, удаляем токен из HTTP-заголовка
 */
export const logOut = () => async (dispatch) => {
  dispatch(authActions.logoutRequest());
  // dispatch(authActions.logoutError(''));

  try {
    await axios.post('/users/logout');

    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    // console.log(error, 'error - logOut operations');
    dispatch(authActions.logoutError(error.message));
  }
};

/*
 * GET @ /users/current
 * headers:
 *    Authorization: Bearer token
 *
 * 1. Забираем токен из стейта через getState()
 * 2. Если токена нет, выходим не выполняя никаких операций
 * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
 */
export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());
  // dispatch(authActions.getCurrentUserError(''));

  try {
    const response = await axios.get('/users/current');

    dispatch(authActions.getCurrentUserSuccess(response.data));
  } catch (error) {
    // console.log(error, 'error - getCurrentUser operations');
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

// export default { register, logOut, logIn, getCurrentUser };
