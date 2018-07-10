import React, { Component } from 'react';
import '../css/Books.css'
import { search, update } from '../../../BooksAPI'
import SearchBar from './SearchBar';
import _ from 'lodash';
import Bookshelf from '../../../Bookshelf';

class SearchBooks extends Component {

  state = {
    query: '',
    result: []
  }

  componentWillMount = () => search(' ')

  updateQuery = (query) => {
    this.setState({ query })
    this.debouncedSearch(query.trim())
  }

  debouncedSearch = _.debounce(query => this.search(query), 500)

  search = (query) => {
    search(query).then(books => this.setResultState(books))
  }

  setResultState = (books) => {
    if (Array.isArray(books)) {
      let uniqBooks = _.uniqBy(books, (book) => book.title);
      this.setState({ result: uniqBooks })
    } else {
      this.setState({ result: [] })
    }
  }

  onOptionClick = (book, option) => {
    update(book, option.id).then(() => {
      let updatedResult = this.state.result.map(b => {
        if (b.id !== book.id) return b
        return {
          ...book,
          shelf: option.id
        }
      })
      this.setState({ result: updatedResult })
    })
  }

  render() {
    const { query, result } = this.state;

    const title = `${result.length || 0} results`;

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
