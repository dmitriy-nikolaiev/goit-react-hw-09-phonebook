// import { Component } from 'react';
// import { connect } from 'react-redux';
//
import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import PropTypes from 'prop-types';

import * as contactsOperations from '../../redux/contacts/contacts-operations';
import * as contactsSelectors from '../../redux/contacts/contacts-selectors';

// import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// import { withStyles } from '@material-ui/core/styles';

// const styles = (theme) => ({
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: '46ch',
    justifyContent: 'space-between',
  },
  field: {
    // marginRight: '20px',
    maxWidth: '46ch',
  },
  submit: {
    margin: theme.spacing(3, 'auto', 2),
    flexBasis: '30%',
    // marginLeft: 'auto',
    // marginRight: 'auto',
  },
}));

export default function ContactForm() {
  const dispatch = useDispatch();

  const contacts = useSelector(contactsSelectors.getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (contacts.find((contact) => contact.name === name)) {
        alert(`${name} is already in contacts.`);
        return;
      }

      dispatch(contactsOperations.addContact({ name, number }));

      setName('');
      setNumber('');
    },
    [dispatch, name, number, contacts]
  );

  //styles
  const classes = useStyles();

  return (
    <div>
      <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          name="name"
          onChange={(e) => setName(e.currentTarget.value)}
          value={name}
          label="Имя"
          id="contactName"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <TextField
          className={classes.field}
          name="number"
          onChange={(e) => setNumber(e.currentTarget.value)}
          value={number}
          label="Номер"
          id="contactName"
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <Button className={classes.submit} variant="contained" color="primary" type="submit">
          Добавить
        </Button>
      </form>
    </div>
  );
}

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   addContact = (newContact) => {
//     if (this.props.contacts.find((contact) => contact.name === newContact.name)) {
//       alert(`${newContact.name} is already in contacts.`);
//       return;
//     }
//     this.props.onAddContact(newContact);

//     this.setState({ name: '', number: '' });
//   };

//   changeHandler = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   render() {
//     const { classes } = this.props;

//     return (
//       <div>
//         <FormControl
//           className={classes.form}
//           noValidate
//           autoComplete="off"
//           onSubmit={(e) => {
//             e.preventDefault();
//             this.addContact({ ...this.state });
//           }}
//         >
//           <TextField
//             className={classes.field}
//             name="name"
//             onChange={this.changeHandler}
//             value={this.state.name}
//             label="Имя"
//             id="contactName"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//           />
//           <TextField
//             className={classes.field}
//             name="number"
//             onChange={this.changeHandler}
//             value={this.state.number}
//             label="Номер"
//             id="contactName"
//             type="tel"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             required
//           />
//           <Button
//             className={classes.submit}
//             variant="contained"
//             color="primary"
//             type="submit"
//             // endIcon={<ExitToAppOutlined />}
//           >
//             Добавить
//           </Button>
//         </FormControl>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   contacts: getContactsSelector(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onAddContact: (contact) => dispatch(addContact(contact)),
// });

// ContactForm.propTypes = { onAddContact: PropTypes.func };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withStyles(styles, { withTheme: true })(ContactForm));
