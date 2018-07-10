import React, { Component } from 'react';
import SearchBooks from './SearchBooks';
import MyReads from './MyReads';
import { Route } from 'react-router-dom'
import { update, getAll } from '../BooksAPI'

class App extends Component {
  state = {
    books: []
  }

  componentWillMount = () => {
    getAll().then(books => this.setState({ books }))
  }

  onOptionClick = (book, shelf) => {
    update(book, shelf.id).then(() => {
      if (shelf.id === 'none') {
        this.removeBook(book.id)
      } else {
        this.updateBooks(book, shelf.id)
      }
    });
  }

  updateBooks = (book, shelfId) => {
    const { books } = this.state;

    let found = books.find(b => b.id === book.id);
    let updatedBooks = [];

    if (found) {
      updatedBooks = books.map(b => {
        if (b.id === book.id) {
          b.shelf = shelfId;
        }

        return b;
      });
    } else {
      book.shelf = shelfId;
      updatedBooks = books.concat(book);
    }

    this.setState({ books: updatedBooks })
  }

  removeBook = (bookId) => {
    const { books } = this.state;
    let updatedBooks = books.filter(b => b.id !== bookId);
    this.setState({ books: updatedBooks })
  }

  render() {
    const { books } = this.state;

    return (
      <div>
        <Route exact path='/' render={() => (
          <MyReads books={books}  onOptionClick={this.onOptionClick}/>
        )} />

        <Route exact path='/search' render={() => (
          <SearchBooks books={books} onOptionClick={this.onOptionClick}/>
        )} />
      </div>
    )
  }
}

export default App;
