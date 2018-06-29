import React, { Component } from 'react';
import './App.css';
import AppHeader from './AppHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader title='My Reads'/>
      </div>
    );
  }
}

export default App;
