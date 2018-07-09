import React from 'react'
import AppHeader from './AppHeader'
import Bookshelf from './Bookshelf'
import { getAll } from '../../../BooksAPI'

class MyReads extends React.Component {
  state = {
    reading: [],
    wantToRead: [],
    read: []
  }

  componentWillMount = () => {
    getAll().then(books => this.setState({
      reading: books.slice(0, 2),
      wantToRead: books.slice(3, 4),
      read: books.slice(4, 6)
    }))
  }

  render() {
    const { reading, wantToRead, read } = this.state;

    return (
      <div>
        <AppHeader title='My Reads' />

        <Bookshelf
          title='Currently Reading'
          books={reading} />

        <Bookshelf
          title='Want to Read'
          books={wantToRead} />

        <Bookshelf
          title='Read'
          books={read} />
      </div>
    );
  }
}

export default MyReads