import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { authOperations } from '../../redux/auth';
//ьф
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

// const styles = {
//   form: {
//     width: 320,
//   },
//   label: {
//     display: 'flex',
//     flexDirection: 'column',
//     marginBottom: 15,
//   },
// };

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Регистрация
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  value={name}
                  onChange={this.handleChange}
                  autoComplete="on"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="Name"
                  label="Имя"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  autoComplete="on"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Почта"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  autoComplete="off"
                  variant="outlined"
                  required
                  fullWidth
                  label="Пароль"
                  type="password"
                  id="password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Зарегистрироваться
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Уже есть аккаунт? Войти
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>

      // <div>
      //   <h1>Страница регистрации</h1>

      //   <form onSubmit={this.handleSubmit} style={styles.form} autoComplete="off">
      //     <label style={styles.label}>
      //       Имя
      //       <input type="text" name="name" value={name} onChange={this.handleChange} />
      //     </label>

      //     <label style={styles.label}>
      //       Почта
      //       <input type="email" name="email" value={email} onChange={this.handleChange} />
      //     </label>

      //     <label style={styles.label}>
      //       Пароль
      //       <input type="password" name="password" value={password} onChange={this.handleChange} />
      //     </label>

      //     <button type="submit">Зарегистрироваться</button>
      //   </form>
      // </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   onRegister: (data) => dispatch(authOperations.register(data)),
// });

// Сокращенная запись (оборачивает dispatch и передает data):
const mapDispatchToProps = {
  onRegister: authOperations.register,
};

// export default connect(null, mapDispatchToProps)(Register);
export default connect(null, mapDispatchToProps)(withStyles(styles, { withTheme: true })(Register));
