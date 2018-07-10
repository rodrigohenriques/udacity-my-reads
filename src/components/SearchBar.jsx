import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import SearchIcon from '../icons/search.svg'

const styles = {
  appbar: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  input: {
    padding: '20px 20px 20px 60px',
    backgroundImage: `url(${SearchIcon})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '20px center',
    backgroundSize: '1.2em',
    fontSize: '1.2em',
    border: 0,
    outline: 'none',
    borderBottom: '1px solid #d5d8df',
  }
};

const SearchBar = ({ placeholder, query, onQueryChanged, classes }) =>
  <AppBar position="static" className={classes.appbar}>
    <Toolbar>
      <Typography variant="title" color="inherit" className={classes.flex}>
        Search Books
      </Typography>
      <Button component={Link} to="/" color="inherit">Back</Button>
    </Toolbar>

    <input
      className={classes.input}
      type='text'
      placeholder={placeholder}
      value={query}
      onChange={(event) => onQueryChanged(event.target.value)}
    />
  </AppBar>


SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  onQueryChanged: PropTypes.func.isRequired,
  classes: PropTypes.object
}

export default withStyles(styles)(SearchBar);