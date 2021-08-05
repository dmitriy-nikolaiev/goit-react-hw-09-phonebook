// import { Component } from 'react';
// import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import PropTypes from 'prop-types';

import { fetchContacts } from '../../redux/contacts/contacts-operations';
import * as contactsSelectors from '../../redux/contacts/contacts-selectors';

import ContactListItem from '../ContactListItem';

import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '46ch',
    // backgroundColor: "theme.palette.background.paper",
  },
}));

export default function ContactList() {
  const dispatch = useDispatch();

  const items = useSelector(contactsSelectors.getFilteredContacts);
  const loading = useSelector(contactsSelectors.getLoading);
  // const error = useSelector(contactsSelectors.getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const classes = useStyles();

  return (
    <>
      {loading && <CircularProgress className="progress" />}

      <List className={classes.root}>
        {items.map((contact) => {
          return <ContactListItem key={contact.id} {...contact} />;
        })}
      </List>
    </>
  );
}

// class ContactList extends Component {
//   componentDidMount() {
//     this.props.fetchContacts();
//   }

//   render() {

//     const { classes } = this.props;

//     return (
//       <>
//         {this.props.loading && <CircularProgress className="progress" />}

//         <List className={classes.root}>
//           {this.props.items.map((contact) => {
//             return <ContactListItem key={contact.id} {...contact} />;
//           })}
//         </List>
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     items: contactsSelectors.getFilteredContacts(state),
//     loading: contactsSelectors.getLoading(state),
//     error: contactsSelectors.getError(state),
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   fetchContacts: () => dispatch(fetchContacts()),
// });

// ContactList.propTypes = {
//   items: PropTypes.array.isRequired,
//   fetchContacts: PropTypes.func,
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withStyles(styles, { withTheme: true })(ContactList));
