import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ExitToAppOutlined from '@material-ui/icons/ExitToAppOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
}));

// const styles = {
//   container: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   avatar: {
//     marginRight: 4,
//   },
//   name: {
//     fontWeight: 700,
//     marginRight: 12,
//   },
// };

const UserMenu = ({ user, onLogout }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span className={classes.name}>Привет, {user.email}</span>
      <Button
        onClick={onLogout}
        variant="contained"
        color="default"
        endIcon={<ExitToAppOutlined />}
      >
        Выйти
      </Button>
      {/* <button type="button" onClick={onLogout}>
      Logout
    </button> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: authSelectors.getUser(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
