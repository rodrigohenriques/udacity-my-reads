import React from 'react';
import PropTypes from 'prop-types';
import '../css/SearchBar.css'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const styles = {
  appbar: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  }
};

const SearchBar = ({ placeholder, query, onQueryChanged, classes }) =>
  <div>
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
        <Typography variant="title" color="inherit" className={classes.flex}>
          Search Books
        </Typography>
        <Button component={Link} to="/" color="inherit">Back</Button>
      </Toolbar>
    </AppBar>

    <input
      className='search-input'
      type='text'
      placeholder={placeholder}
      value={query}
      onChange={(event) => onQueryChanged(event.target.value)}
    />
  </div>


SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  onQueryChanged: PropTypes.func.isRequired,
  classes: PropTypes.object
}

export default withStyles(styles)(SearchBar);