import React, { Component } from 'react';
import './App.css';
import AppHeader from './AppHeader';
import Bookshelf from './screens/myreads/components/Bookshelf';

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
      <div className="App">
        <AppHeader title='My Reads' />

        <Bookshelf
          title='Currently Reading'
          books={this.state.reading} />

        <Bookshelf
          title='Want to Read'
          books={this.state.wantToRead} />

        <Bookshelf
          title='Read'
          books={this.state.read} />
      </div>
    );
  }
}

export default App;
