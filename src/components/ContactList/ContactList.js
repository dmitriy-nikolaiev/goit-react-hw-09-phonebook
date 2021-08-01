import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchContacts } from '../../redux/contacts/contacts-operations';
import * as contactsSelectors from '../../redux/contacts/contacts-selectors';

import ContactListItem from '../ContactListItem';

import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';

import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: '46ch',
    // backgroundColor: "theme.palette.background.paper",
  },
});

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    // const { items, filter } = this.props;
    // const { items } = this.props;

    const { classes } = this.props;

    // let message;
    // if (this.props.loading) {
    //   message = 'Processing...';
    // }
    // if (!!this.props.error) {
    //   message = this.props.error;
    // }

    return (
      <>
        {this.props.loading && <CircularProgress className="progress" />}

        {/* {!!this.props.error && <div>{message}</div>} */}
        <List className={classes.root}>
          {this.props.items.map((contact) => {
            return <ContactListItem key={contact.id} {...contact} />;
          })}
        </List>
      </>
      // </div>

      // <ul className="contact-list">
      // {this.props.items
      //   .map((contact) => {
      //     return <ContactListItem key={contact.id} {...contact} />;
      //   })}
      // </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: contactsSelectors.getFilteredContacts(state),
    loading: contactsSelectors.getLoading(state),
    // filter: contactsSelectors.getFilter(state),
    error: contactsSelectors.getError(state),
  };
};

// const mapStateToProps = (state) => {
//   const { items, filter } = state.contacts;
//   return { items, filter };
// };

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

// ContactList.defaultProps = {
//   filter: '',
// };

ContactList.propTypes = {
  // filter: PropTypes.string,
  items: PropTypes.array.isRequired,
  fetchContacts: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(ContactList));
