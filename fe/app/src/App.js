import React, { Component } from 'react';
import './App.css';

// import Card from './Card';
import HomePage from './Home';
import issuePage from './Issue';
import myPage from './My';
import Foodbar from './Foodbar';

import { BrowserRouter, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path="/" exact component={HomePage} />
            <Route path="/issue" component={issuePage} />
            <Route path="/my" component={myPage} />
            <Foodbar/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
