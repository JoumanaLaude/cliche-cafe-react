import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Menus from './Menus';
import Reserve from './Reserve';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      const HomePage = () => {
         return (
            <Home />
         );
      };

      return (
         <div>
            <Header />
            <Switch>
               <Route path='/home' component={HomePage} />
               <Route exact path='/about' component={About} />
               <Route exact path='/menus' component={Menus} />
               <Route exact path='/reserve' component={Reserve} />
               <Redirect to='/home' />
            </Switch>
            <Footer />
         </div>
      );
   }
}

export default Main;