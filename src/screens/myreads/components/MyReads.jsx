import React from 'react'
import PropTypes from 'prop-types';
import Bookshelf from '../../../Bookshelf'
import { getAll, update } from '../../../BooksAPI'
import Shelves from '../../../Shelves'
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

class MyReads extends React.Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  getData = () => {
    getAll().then(books => this.setState({
      currentlyReading: books.filter(b => b.shelf === Shelves.CurrentlyReading.id),
      wantToRead: books.filter(b => b.shelf === Shelves.WantToRead.id),
      read: books.filter(b => b.shelf === Shelves.Read.id)
    }))
  }

  componentWillMount = () => {
    this.getData()
  }

  onOptionClick = (book, option) => {
    update(book, option.id).then(() => this.getData())
  }

  render() {
    const { classes } = this.props;
    const { currentlyReading, wantToRead, read } = this.state;

    return (
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
          id={Shelves.WantToRead.id}
          name={Shelves.WantToRead.name}
          books={wantToRead}
          onOptionClick={this.onOptionClick} />

        <Bookshelf
          id={Shelves.CurrentlyReading.id}
          name={Shelves.CurrentlyReading.name}
          books={currentlyReading}
          onOptionClick={this.onOptionClick} />

        <Bookshelf
          id={Shelves.Read.id}
          name={Shelves.Read.name}
          books={read}
          onOptionClick={this.onOptionClick} />
      </div>
    );
  }
}

MyReads.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(MyReads)