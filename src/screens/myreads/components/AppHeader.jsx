import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  }
};

const AppHeader = ({ title, classes }) =>
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit" className={classes.flex}>
          {title}
        </Typography>
        <Button component={Link} to="/search" color="inherit">Search Books</Button>
      </Toolbar>
    </AppBar>
  </div>

AppHeader.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.object
}

export default withStyles(styles)(AppHeader);