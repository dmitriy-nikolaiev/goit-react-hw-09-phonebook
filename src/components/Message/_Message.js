import { Component } from 'react';
import { connect } from 'react-redux';

import { authSelectors } from '../../redux/auth';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class Message extends Component {
  state = {
    open: false,
  };

  componentDidMount() {
    // this.setState({ open: true });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.error !== this.props.error && this.props.error !== '') {
      this.setState({ open: true });
    }
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  render() {
    console.log(this.props.error, 'this.props.error - Message');
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          message={this.props.error}
          action={
            <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: authSelectors.getError(state),
});

export default connect(mapStateToProps)(Message);
// export default Message;
