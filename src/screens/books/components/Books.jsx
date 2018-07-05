import React, { Component } from 'react';
import '../css/Books.css'
import { search, getAll } from '../../../BooksAPI'
import SearchBar from './SearchBar';
import _ from 'lodash';

class Books extends Component {

  state = {
    query: '',
    books: [],
    searchResult: undefined
  }

  componentWillMount = () => {
    getAll().then(books => this.setState({ books }))
  }

  updateQuery = (query) => {
    this.setState({ query })
    this.doSearch(query.trim())
  }

  doSearch = _.debounce(((query) => {
    if (query === '') {
      this.setState({ searchResult: undefined })
      return
    }

    search(query)
      .then(books => {
        if (Array.isArray(books)) {
          this.setState({ searchResult: books })
        } else {
          this.setState({ searchResult: [] })
        }
      })
  }), 500)

  render() {
    const { query, books, searchResult } = this.state;

    var booksList = searchResult || books


    return <div className='books'>
      <SearchBar placeholder='Find your book' query={query} onQueryChanged={(query) => this.updateQuery(query)} />
      <p className='books-list-title'>Books</p>
      <ol className='books-list'>
        {booksList.map((element, index) => (
          <li key={`${index}_${element.title}`} className='books-list-item'>
            <p className='books-list-item-title'>{element.title}</p>
          </li>
        ))}
      </ol>
    </div>;
  }
}

export default Books;
