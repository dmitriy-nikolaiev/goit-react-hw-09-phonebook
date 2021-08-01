import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';

import { addContact } from '..//..//redux/contacts/contacts-operations';
import { getContacts as getContactsSelector } from '../../redux/contacts/contacts-selectors';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
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
});

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  addContact = (newContact) => {
    if (this.props.contacts.find((contact) => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    // newContact.id = uuidv4();
    this.props.onAddContact(newContact);

    this.setState({ name: '', number: '' });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <FormControl
          className={classes.form}
          noValidate
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            this.addContact({ ...this.state });
          }}
        >
          <TextField
            className={classes.field}
            name="name"
            onChange={this.changeHandler}
            value={this.state.name}
            label="Имя"
            id="contactName"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <TextField
            className={classes.field}
            name="number"
            onChange={this.changeHandler}
            value={this.state.number}
            label="Номер"
            id="contactName"
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
          <Button
            className={classes.submit}
            variant="contained"
            color="primary"
            type="submit"
            // endIcon={<ExitToAppOutlined />}
          >
            Добавить
          </Button>
        </FormControl>
      </div>
    );

    // return (
    //   <form
    //     className="contact-form"
    //     onSubmit={(e) => {
    //       e.preventDefault();
    //       this.addContact({ ...this.state });
    //     }}
    //   >
    //     <div className="form-container">
    //       <label className="form-label">
    //         Name
    //         <input
    //           onChange={this.changeHandler}
    //           value={this.state.name}
    //           className="form-input"
    //           type="text"
    //           name="name"
    //           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //           title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
    //           required
    //         />
    //       </label>
    //       <label className="form-label">
    //         Number
    //         <input
    //           onChange={this.changeHandler}
    //           value={this.state.number}
    //           className="form-input"
    //           type="tel"
    //           name="number"
    //           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    //           title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
    //           required
    //         />
    //       </label>
    //       <button className="form-submit" type="submit">
    //         Add contact
    //       </button>
    //     </div>
    //   </form>
    // );
  }
}

const mapStateToProps = (state) => ({
  contacts: getContactsSelector(state),
});

// const mapStateToProps = ({ contacts: { items } }) => ({
//   contacts: items,
// });

const mapDispatchToProps = (dispatch) => ({
  onAddContact: (contact) => dispatch(addContact(contact)),
});

ContactForm.propTypes = { onAddContact: PropTypes.func };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(ContactForm));
