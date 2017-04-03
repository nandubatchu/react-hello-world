import React, { Component } from 'react';
import { Button, Input, Card } from 'antd';
import './loginForm.css'

class LoginForm extends Component {
  render() {
    return (
      <Card title="Login Form" extra={<a href="signup">Register</a>} style={{ width: 300 }}>
        <Input size="large" placeholder="Client ID" />
        <Input size="large" type="password" placeholder="Password" />
        <div style={{ margin: '24px 0' }} />
        <div>
          <Button type="primary" style={{ width: 100 }} >Login</Button>
          <a href="#" style={{float: "right"}}>Forgot Password?</a>
        </div>

      </Card>
    );
  }
}

export default LoginForm;
