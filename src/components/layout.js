import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
const { Header } = Layout;

import LoginForm from './loginForm';
import SignupForm from './signupForm';

class LayoutComponent extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div>
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
        </div>
      </div>

    );
  }
}

export default LayoutComponent;
