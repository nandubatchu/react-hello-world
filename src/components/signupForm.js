import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Card } from 'antd';
import './signupForm.css';

class SignupForm extends Component {
  render() {
    return (
      <Card title="Signup Form" extra={<Link to="/login">Login</Link>} style={{ maxWidth: 300, margin: '0 auto'}}>
        <Input size="large" type="email" placeholder="Email ID" />
        <Input size="large" type="password" placeholder="Password" />
        <Input size="large" type="password" placeholder="Confirm Password" />
        <div style={{ margin: '24px 0' }} />
        <Link to="/test">
          <Button type="primary" style={{ width: 100 }}>Register</Button>
        </Link>

      </Card>
    );
  }
}

export default SignupForm;
