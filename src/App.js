import React, { useEffect } from 'react';
// import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu/Menu';
import Reserve from './components/Reserve';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

export default function App() {

  useEffect(() => {
    document.title = "Cliche Cafe";
  }, []);

  const HomePage = () => {
    return (
      <Home />
    );
  };

  return (
    <div>
      <BrowserRouter>
      <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/menu' component={Menu} />
          <Route exact path='/reserve' component={Reserve} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}