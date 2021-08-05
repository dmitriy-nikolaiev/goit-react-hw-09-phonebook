// import { connect } from 'react-redux';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

export default function UserMenu() {
  const dispatch = useDispatch();

  const user = useSelector(authSelectors.getUser);

  const onLogout = useCallback(() => dispatch(authOperations.logOut()), [dispatch]);

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
    </div>
  );
}

// const UserMenu = ({ user, onLogout }) => {
//   const classes = useStyles();
//   return (
//     <div className={classes.root}>
//       <span className={classes.name}>Привет, {user.email}</span>
//       <Button
//         onClick={onLogout}
//         variant="contained"
//         color="default"
//         endIcon={<ExitToAppOutlined />}
//       >
//         Выйти
//       </Button>
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   user: authSelectors.getUser(state),
// });

// const mapDispatchToProps = {
//   onLogout: authOperations.logOut,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
