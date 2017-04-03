import React, { Component } from 'react';
import { IndexRoute, browserHistory, Router, Route } from 'react-router';
import './App.css';

import LayoutComponent from './components/layout';
import LoginForm from './components/loginForm';
import SignupForm from './components/signupForm';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={LayoutComponent} >
          <IndexRoute component={LoginForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
        </Route>
      </Router>
    );
  }
}

export default App;
