import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { Row, Col, Layout } from 'antd';
const { Header } = Layout;

import LoginForm from './loginForm';
import SignupForm from './signupForm';

class LayoutComponent extends Component {
  render() {
    return (
      <div>
        <Header theme="light" />
        <Row type="flex" justify="center">
          <Col span={20}>
            <Row>
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
