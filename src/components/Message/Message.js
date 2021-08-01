import React from 'react';
import { connect } from 'react-redux';

import { authSelectors } from '../../redux/auth';

import Snackbar from '@material-ui/core/Snackbar';

const Message = ({ error }) => {
  const [state, setState] = React.useState({
    open: false,
  });
  console.log(error, 'error - Message');
  // console.log(this.props, 'this.props - Message');
  const { open } = state;
  // if (!!error) {
  //   setState({ open: true });
  // }

  const handleClose = () => {
    setState({ open: false });
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        message={`Error: ${error}`}
        autoHideDuration={6000}
        onClose={handleClose}

        // key={vertical + horizontal}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: authSelectors.getError(state),
});

export default connect(mapStateToProps)(Message);

// export default Message;
