import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Card } from 'antd';
import './loginForm.css'

class LoginForm extends Component {
  render() {
    return (
      <Card title="Login Form" extra={<Link to="/signup">Register</Link>} style={{ maxWidth: 300, margin: '0 auto' }}>
        <Input size="large" placeholder="Client ID" />
        <Input size="large" type="password" placeholder="Password" />
        <div style={{ margin: '24px 0' }} />
        <Link to="/dashboard">
          <Button type="primary" style={{ width: 100 }} >Login</Button>
          <a href="#" style={{float: "right"}}>Forgot Password?</a>
        </Link>

      </Card>
    );
  }
}

export default LoginForm;
