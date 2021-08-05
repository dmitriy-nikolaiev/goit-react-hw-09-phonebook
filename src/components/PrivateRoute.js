import { Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

import { authSelectors } from '../redux/auth';

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит переданный компонент Component
 * - В противном случае рендерит Redirect на переданный в redirectTo маршрут (например /login)
 *    routeProps - пропсы роутера
 *    props - пропсы компонента Component, переданные при рендере PrivateRoute, которые нужно пробросить
 */
// const PrivateRoute = ({ component: Component, isAuthenticated, redirectTo, ...routeProps }) => {

const PrivateRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />
      }
    />
  );
};

export default PrivateRoute;

// const mapStateToProps = (state) => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(PrivateRoute);
