import React, { Component } from 'react';
import { Button, Input, Card } from 'antd';
import './signupForm.css';

class SignupForm extends Component {
  render() {
    return (
      <Card title="Signup Form" extra={<a href="login">Login</a>} style={{ width: 300 }}>
        <Input size="large" type="email" placeholder="Email ID" />
        <Input size="large" type="password" placeholder="Password" />
        <Input size="large" type="password" placeholder="Confirm Password" />
        <div style={{ margin: '24px 0' }} />
        <div>
          <Button type="primary" style={{ width: 100 }}>Register</Button>
        </div>

      </Card>
    );
  }
}

export default SignupForm;
