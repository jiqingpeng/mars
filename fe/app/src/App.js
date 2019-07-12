import React, { Component } from 'react';
import './App.css';

// import Card from './Card';
import HomePage from './Home';
import IssuePage from './Issue';
import myPage from './My';
import Logo from './Logo';
import Register from './Register';
import Login from './Login';
import Person from './Person';
import HeadPortrait from './HeadPortrait';
import Textarea from '../src/comments/Textarea';
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
            <Route path="/Person" exact component={Person} />
            <Route path="/home" exact component={HomePage} />
            <Route path="/issue" component={IssuePage} />
            <Route path="/my" component={myPage} />
            <Route path="/headportrait" component={HeadPortrait} />
            <Route path="/textarea" component={Textarea} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
