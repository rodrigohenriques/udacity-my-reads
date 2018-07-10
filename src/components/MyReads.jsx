import React from 'react'
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf'
import Shelves from '../Shelves'
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

const MyReads = ({ books, onOptionClick, classes }) => (
  <div>
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
        <Typography variant="title" color="inherit" className={classes.flex}>
          My Reads
        </Typography>
        <Button component={Link} to="/search" color="inherit">Search Books</Button>
      </Toolbar>
    </AppBar>

    <Bookshelf
      name={Shelves.WantToRead.name}
      books={books.filter(b => b.shelf === Shelves.WantToRead.id)}
      onOptionClick={onOptionClick} />

    <Bookshelf
      name={Shelves.CurrentlyReading.name}
      books={books.filter(b => b.shelf === Shelves.CurrentlyReading.id)}
      onOptionClick={onOptionClick} />

    <Bookshelf
      name={Shelves.Read.name}
      books={books.filter(b => b.shelf === Shelves.Read.id)}
      onOptionClick={onOptionClick} />
  </div>
);

MyReads.propTypes = {
  books: PropTypes.array.isRequired,
  onOptionClick: PropTypes.func.isRequired,
  classes: PropTypes.object
}

export default withStyles(styles)(MyReads)