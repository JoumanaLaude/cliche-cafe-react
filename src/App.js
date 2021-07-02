import React, { Component } from 'react';
import Home from './Home';
import Header from './Header';
import CarouselSlider from './carousel/CarouselSlider';
import './App.css';
import './assets/css/styles.css';

class App extends Component {
  render() {
    return (
      <>
      <CarouselSlider />
      <Header />
      <Home />
      </>
    );
  }
}

export default App;
