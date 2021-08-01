import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeFilter } from '../../redux/contacts/contacts-actions';
import { getFilter } from '..//..//redux/contacts/contacts-selectors';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FilterListIcon from '@material-ui/icons/FilterList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '46ch',
    marginBottom: '0.5em',
  },
}));

const Filter = ({ filter, onChange }) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.root} variant="outlined">
      <InputLabel htmlFor="outlined-filter-input">Filter</InputLabel>
      <OutlinedInput
        name="filter"
        id="outlined-filter-input"
        onChange={onChange}
        value={filter}
        startAdornment={
          <InputAdornment position="start">
            <FilterListIcon />
          </InputAdornment>
        }
        labelWidth={40}
      />
    </FormControl>

    // <label className="filter-label">
    //   Find contacts by name:
    //   <input className="filter-input" name="name" value={filter} onChange={onChange} />
    // </label>
  );
};

const mapStateToProps = (state) => ({
  filter: getFilter(state),
});
// const mapStateToProps = ({ contacts: { filter } }) => ({ filter });

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(changeFilter(e.target.value)),
});

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
