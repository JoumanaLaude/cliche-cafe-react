import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu/Menu';
import Reserve from './components/Reserve';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

export default function App() {
  const HomePage = () => {
    return (
      <main>
        <Home />
      </main>
    );
  };

  return (
    <nav className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/menu' component={Menu} />
          <Route exact path='/about' component={About} />
          <Route exact path='/reserve' component={Reserve} />
          <Redirect to='/' />
        </Switch>
        <Footer />
      </BrowserRouter>
    </nav>
  );
}