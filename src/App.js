import React, { Component } from 'react';
import Home from './Home';
import Header from './Header';
import './App.css';
import './css/styles.css';

class App extends Component {
  render() {
    return (
      <>
      <Header />
      <Home />
      </>
    );
  }
}

export default App;
