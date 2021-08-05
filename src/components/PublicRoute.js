import { Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

import { authSelectors } from '../redux/auth';

/**
 * - Если маршрут ограниченный (routeProps.restricted - задается при рендере компонента PublicRoute) например страница регистрации,
 *      и пользователь залогинен, рендерит редирект на redirectTo (например /contacts)
 * - В противном случае рендерит компонент Component
 *
 */
// const PublicRoute = ({ component: Component, isAuthenticated, redirectTo, ...routeProps }) => (
const PublicRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;

// const mapStateToProps = (state) => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(PublicRoute);
