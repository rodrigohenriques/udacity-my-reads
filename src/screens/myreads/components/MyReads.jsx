import React from 'react'
import AppHeader from './AppHeader'
import Bookshelf from '../../../Bookshelf'
import { getAll, update } from '../../../BooksAPI'
import Shelves from '../../../Shelves'

class MyReads extends React.Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  getData = () => {
    getAll().then(books => this.setState({
      currentlyReading: books.filter(b => b.shelf === Shelves.CurrentlyReading.id),
      wantToRead: books.filter(b => b.shelf === Shelves.WantToRead.id),
      read: books.filter(b => b.shelf === Shelves.Read.id)
    }))
  }

  componentWillMount = () => {
    this.getData()
  }

  onOptionClick = (book, option) => {
    update(book, option.id).then(() => this.getData())
  }

  render() {
    const { currentlyReading, wantToRead, read } = this.state;

    return (
      <div>
        <AppHeader title='My Reads' />

        <Bookshelf
          id={Shelves.WantToRead.id}
          name={Shelves.WantToRead.name}
          books={wantToRead}
          onOptionClick={this.onOptionClick} />

        <Bookshelf
          id={Shelves.CurrentlyReading.id}
          name={Shelves.CurrentlyReading.name}
          books={currentlyReading}
          onOptionClick={this.onOptionClick} />

        <Bookshelf
          id={Shelves.Read.id}
          name={Shelves.Read.name}
          books={read}
          onOptionClick={this.onOptionClick} />
      </div>
    );
  }
}

export default MyReads