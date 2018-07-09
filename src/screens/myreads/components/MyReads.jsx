import React from 'react'
import AppHeader from './AppHeader'
import Bookshelf from './Bookshelf'
import { getAll, update } from '../../../BooksAPI'

const WantToRead = { id: 'wantToRead', name: 'Want to Read' };
const CurrentlyReading = { id: 'currentlyReading', name: 'Currently Reading' };
const Read = { id: 'read', name: 'Read' };

class MyReads extends React.Component {
  state = {
    reading: [],
    wantToRead: [],
    read: []
  }

  getData = () => {
    getAll().then(books => this.setState({
      reading: books.filter(b => b.shelf === CurrentlyReading.id),
      wantToRead: books.filter(b => b.shelf === WantToRead.id),
      read: books.filter(b => b.shelf === Read.id)
    }))
  }

  componentWillMount = () => {
    this.getData()
  }

  onOptionClick = (book, option) => {
    update(book, option.id).then(() => this.getData())
  }

  render() {
    const { reading, wantToRead, read } = this.state;

    return (
      <div>
        <AppHeader title='My Reads' />

        <Bookshelf
          title='Want to Read'
          books={wantToRead}
          options={[CurrentlyReading, Read]}
          onOptionClick={this.onOptionClick} />

        <Bookshelf
          title='Currently Reading'
          books={reading}
          options={[WantToRead, Read]}
          onOptionClick={this.onOptionClick} />

        <Bookshelf
          title='Read'
          books={read}
          options={[WantToRead, CurrentlyReading]}
          onOptionClick={this.onOptionClick} />
      </div>
    );
  }
}

export default MyReads