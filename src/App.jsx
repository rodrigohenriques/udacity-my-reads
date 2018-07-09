import React, { Component } from 'react';
import Books from './screens/books/components/Books';
import MyReads from './screens/myreads/components/MyReads';
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={MyReads} />

        <Route exact path='/books' component={Books} />
      </div>
    )
  }
}

export default App;
