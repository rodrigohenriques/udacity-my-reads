import React, { Component } from 'react';
import Books from './screens/books/components/Books';
import MyReads from './screens/myreads/components/MyReads';
import { Route } from 'react-router-dom'

class App extends Component {
  state = {
    reading: [
      { title: 'book a' },
      { title: 'book b' },
      { title: 'book c' }
    ],
    wantToRead: [
      { title: 'book d' },
      { title: 'book e' },
      { title: 'book f' }
    ],
    read: [
      { title: 'book g' }
    ]
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <MyReads
            reading={this.state.reading}
            wantToRead={this.state.wantToRead}
            read={this.state.read}
          />
        )} />

        <Route exact path='/books' component={Books} />
      </div>
    )
  }
}

export default App;
