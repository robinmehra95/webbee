import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from "./pages/Home";
import Manage from "./pages/Manage";
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/manage-types" component={Manage} />
          </Switch>
      </div>
    );
  }
}

export default App;
