import React, { Component } from 'react';
import './App.css';

// import Card from './Card';
import HomePage from './Home';
import IssuePage from './Issue';
import myPage from './My';
import Foodbar from './Foodbar';
import Logo from './Logo';
import Register from './Register';
import Login from './Login';
import { BrowserRouter, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Logo} /> 
            <Route path="/Register" exact component={Register} />
            <Route path="/Login" exact component={Login} />
            <Route path="/home" exact component={HomePage} />
            <Route path="/issue" component={IssuePage} />
            <Route path="/my" component={myPage} />
            {/* <Foodbar/> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
