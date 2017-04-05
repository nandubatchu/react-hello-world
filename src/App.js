import React, { Component } from 'react';
import { IndexRoute, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import LayoutComponent from './components/layout';
import LoginForm from './components/loginForm';
import SignupForm from './components/signupForm';
import DashboardComponent from './components/dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={LayoutComponent} />
      </Router>
    );
  }
}

export default App;
