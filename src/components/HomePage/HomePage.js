// import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomePage = () => (
  <div style={styles.container}>
    <Typography variant="h2" gutterBottom>
      Phonebook
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
      Ваша телефонная книга
    </Typography>
    {/* <p>Для продолжения необходимо войти или зарегистрироваться</p> */}
  </div>
);

export default HomePage;
