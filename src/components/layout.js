import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import './layout.css';
import { Row, Col, Layout } from 'antd';
const { Header } = Layout;

import LoginForm from './loginForm';
import SignupForm from './signupForm';
import DashboardComponent from './dashboard';

class LayoutComponent extends Component {
  render() {
    return (
      <div>
        <Header theme="light">
          <h1 style={{color:"white"}}>Coinford</h1>
        </Header>
        <Row type="flex" justify="center">
          <Col span={24}>
            <Row>
              <Route path="/dashboard" component={DashboardComponent} />
              <Col xs={{span:24}} sm={{span:7}} style={{marginTop: 60}}>
                <Route exact={true} path="/" component={LoginForm} />
                <Route path="/login" component={LoginForm} />
                <Route path="/signup" component={SignupForm} />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

    );
  }
}

export default LayoutComponent;
