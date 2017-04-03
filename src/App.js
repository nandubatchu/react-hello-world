import React, { Component } from 'react';
import { IndexRoute, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import LayoutComponent from './components/layout';
import LoginForm from './components/loginForm';
import SignupForm from './components/signupForm';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={LayoutComponent} >
          <div>
            <Route path="/login" component={LoginForm} />
            <Route path="/signup" component={SignupForm} />
          </div>
        </Route>

      </Router>
    );
  }
}

export default App;
