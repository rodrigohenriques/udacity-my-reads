import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    width: 500,
    display: 'flex',
  },
  details: {
    width: '75%',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: '25%',
    height: 170,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing.unit
  }
});

const Book = ({ book, classes, options, onOptionClick }) => (
  <div className={classes.root}>
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image={book.imageLinks.thumbnail}
        title={book.title}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="headline">{book.title}</Typography>
          <Typography variant="subheading" color="textSecondary">
            {book.authors.join(', ')}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          {options.map((op, index) => (
            <Button
              key={`${op.id}_${index}`}
              color="primary"
              className={classes.button}
              onClick={() => {
                console.log(JSON.stringify(op))
                onOptionClick(op)
              }}
            >{op.name}</Button>
          ))}
        </div>
      </div>
    </Card>
  </div>
);

Book.propTypes = {
  book: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  onOptionClick: PropTypes.func.isRequired,
  classes: PropTypes.object
}

export default withStyles(styles)(Book);