import React, { Component } from 'react';
import SearchBooks from './SearchBooks';
import MyReads from './MyReads';
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={MyReads} />

        <Route exact path='/search' component={SearchBooks} />
      </div>
    )
  }
}

export default App;
