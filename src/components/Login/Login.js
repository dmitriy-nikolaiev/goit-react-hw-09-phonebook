import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { authOperations } from '../../redux/auth';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin(this.state);

    // this.setState({ name: '', email: '', password: '' });
    this.setState({ password: '' });
  };

  render() {
    const { email, password } = this.state;
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Авторизация
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit} noValidate autoComplete="off">
            <TextField
              name="email"
              value={email}
              onChange={this.handleChange}
              autoComplete="off"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Почта"
              autoFocus
            />
            <TextField
              name="password"
              value={password}
              onChange={this.handleChange}
              autoComplete="off"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Пароль"
              type="password"
              id="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Войти
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link to="/register" variant="body2">
                  {'Еще нет аккаунта? Зарегистрироваться'}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );

    // return (
    //   <div>
    //     <h1>Страница логина</h1>

    //     <form onSubmit={this.handleSubmit} style={styles.form} autoComplete="off">
    //       <label style={styles.label}>
    //         Почта
    //         <input type="email" name="email" value={email} onChange={this.handleChange} />
    //       </label>

    //       <label style={styles.label}>
    //         Пароль
    //         <input type="password" name="password" value={password} onChange={this.handleChange} />
    //       </label>

    //       <button type="submit">Войти</button>
    //     </form>
    //   </div>
    // );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

// export default connect(null, mapDispatchToProps)(Login);
export default connect(null, mapDispatchToProps)(withStyles(styles, { withTheme: true })(Login));
