import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { Row, Col } from 'antd';

import OrderModalComponent from './orderModal';

class DashboardComponent extends Component {
  render() {
    return (
      <Row style={{marginTop:5}}>
        <Col xs={{span:24}} sm={{span:8, offset:2}}>
        <div style={{paddingLeft:20}}>
        
        <h2>Yadunandan Batchu</h2><br />
        [INR/BTC - LTP]<br />
        [INR Balance: Rs.20,000]<br />
        [BTC: 3,00,000 satoshi]<br /><br />
        
        [Pending Orders|Table]<br />
        
        <OrderModalComponent />
        
        </div>

        </Col>
      </Row>

    );
  }
}

export default DashboardComponent;
