import { NavLink } from 'react-router-dom';

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
    textDecoration: 'underline',
  },
};

const AuthNav = () => (
  <div>
    <NavLink to="/register" exact style={styles.link} activeStyle={styles.activeLink}>
      Регистрация
    </NavLink>
    <NavLink to="/login" exact style={styles.link} activeStyle={styles.activeLink}>
      Войти
    </NavLink>
  </div>
);

export default AuthNav;
