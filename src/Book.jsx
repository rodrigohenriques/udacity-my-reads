import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100px'
  },
  image: {
    width: '80%',
  },
  title: {
    textSize: '6pt'
  }
};

const Book = ({ book, classes }) => (
  <div className={classes.root}>
    <img className={classes.image} src={book.imageLinks.thumbnail}/>
    <p className={classes.title}>{book.title}</p>
  </div>
);


Book.propTypes = {
  book: PropTypes.object.isRequired,
  classes: PropTypes.object
}

export default withStyles(styles)(Book);