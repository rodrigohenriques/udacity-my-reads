import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Book from '../../../Book';

const styles = {
  root: {
    flexGrow: 1,
  },
  title: {
    textAlign: 'center',
    margin: '16px'
  }
};

class Bookshelf extends Component {
  state = {
    spacing: '16',
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    options: PropTypes.array.isRequired,
    onOptionClick: PropTypes.func.isRequired,
    classes: PropTypes.object
  }

  render() {
    const { spacing } = this.state;
    const { title, books, options, onOptionClick, classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography className={classes.title} variant='headline'>
          {title}
        </Typography>

        <Grid container className={classes.root} spacing={Number(spacing)}>
          <Grid item xs={12}>
            <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
              {books.map(book => (
                <Grid key={book.id} item>
                  <Book book={book} options={options} onOptionClick={(op) => onOptionClick(book, op)}/>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Bookshelf);