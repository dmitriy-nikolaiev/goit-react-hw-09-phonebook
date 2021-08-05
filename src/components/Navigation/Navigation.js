// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#FFF',
  },
  activeLink: {
    color: '#1b1332',
  },
};

const Navigation = () => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <nav>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        Главная
      </NavLink>
      {isAuthenticated && (
        <NavLink to="/contacts" exact style={styles.link} activeStyle={styles.activeLink}>
          Контакты
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;

// const mapStateToProps = (state) => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(Navigation);
