import React, { Component } from 'react';
import '../css/Books.css'
import { search, update, getAll } from '../../../BooksAPI'
import SearchBar from './SearchBar';
import _ from 'lodash';
import Bookshelf from '../../../Bookshelf';

class SearchBooks extends Component {

  state = {
    query: '',
    result: [],
    books: [],
    title: ''
  }

  componentWillMount = () => {
    getAll().then(books => this.setState({ books }))
  }

  updateQuery = (query) => {
    this.setState({
      query,
      title: 'Loading...'
    })
    this.debouncedSearch(query.trim())
  }

  debouncedSearch = _.debounce(query => this.performSearch(query), 500)

  performSearch = (query) => {
    search(query).then(books => this.setResultState(books))
  }

  setResultState = (books) => {
    let result = []

    if (Array.isArray(books)) {
      let uniqBooks = _.uniqBy(books, (book) => book.title);
      result = uniqBooks.map(book => this.getBookFromStateById(book.id) || book);
    }

    this.setState({
      result,
      title: `${result.length || 0} results`
    })
  }

  getBookFromStateById = (bookId) => _.first(this.state.books.filter(b => b.id === bookId))

  onOptionClick = (book, shelf) => {
    update(book, shelf.id).then(() => {
      const { books } = this.state;

      book.shelf = shelf.id;

      let updatedBooks = books.filter(b => b.id !== book.id);

      updatedBooks.push(book);

      this.setState({ books: updatedBooks })
    })
  }

  render() {
    const { query, result, title } = this.state;

    return <div className='books'>
      <SearchBar placeholder='Find your book' query={query} onQueryChanged={(query) => this.updateQuery(query)} />
      <Bookshelf
        id='all'
        name={title}
        books={result}
        onOptionClick={this.onOptionClick}
      />
    </div>;
  }
}

export default SearchBooks;
