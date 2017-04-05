import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { Row, Col } from 'antd';


class DashboardComponent extends Component {
  render() {
    return (
      <Row>
        <Col xs={{span:24}} sm={{span:8, offset:2}}>
        <div style={{borderStyle:"solid", height:"100vh"}}><h2>Yadunandan Batchu</h2></div>

        </Col>
      </Row>

    );
  }
}

export default DashboardComponent;
