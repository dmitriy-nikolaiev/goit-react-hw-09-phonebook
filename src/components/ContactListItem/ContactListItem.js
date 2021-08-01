import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteContact } from '../../redux/contacts/contacts-operations';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  item: {
    marginBottom: '0.5em',
    backgroundColor: theme.palette.background.paper,
    boxShadow:
      '0px 2px 4px -1px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 4px 0px rgba(0,0,0,0.12)',
    // backgroundColor: '#f7f7f7',
  },
  number: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

const ContactListItem = ({ id, name, number, deleteContact }) => {
  const classes = useStyles();

  return (
    <ListItem alignItems="flex-start" className={classes.item}>
      <ListItemText
        primary={name}
        secondary={
          <Typography component="span" className={classes.number} color="textPrimary">
            {number}
          </Typography>
        }
      />
      <ListItemSecondaryAction>
        <IconButton onClick={() => deleteContact(id)} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>

    // <li className="contact-list-item">
    //   <span className="contact-name">{name}:</span>
    //   <span className="contact-number"> {number}</span>
    //   <button className="contact-delete-btn" onClick={() => deleteContact(id)}>
    //     Delete
    //   </button>
    // </li>
  );
};

// const mapStateToProps = (state) => {
//   return {};
// };

const mapDispatchToProps = (dispatch) => {
  return {
    deleteContact: (id) => dispatch(deleteContact(id)),
  };
};

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(ContactListItem);
