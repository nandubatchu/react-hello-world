import React, {Component} from 'react';
import { Layout } from 'antd';
const { Header } = Layout;

class LayoutComponent extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        {this.props.children}
      </div>

    );
  }
}

export default LayoutComponent;
