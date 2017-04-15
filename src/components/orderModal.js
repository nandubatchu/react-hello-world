import React, {Component} from 'react';
import { Form, InputNumber, Modal, Button, Radio } from 'antd';
const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class OrderModalComponent extends Component {
  state = {
    ModalText: 'Buy Order Form Inputs',
    visible: false,
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = () => {
    this.setState({
      ModalText: 'The modal dialog will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }
  render() {
    // const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>Place Order</Button>
        <Modal title="Place Order Form"
          visible={this.state.visible}
          onOk={this.handleOk}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" size="large" onClick={this.handleCancel}>Cancel</Button>,
            <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleOk}>
              Submit Order
            </Button>,
          ]}
        >
          <Form>
            <FormItem
              {...formItemLayout}
              label="Position"
            >
                <RadioGroup>
                  <RadioButton value="buy">Buy</RadioButton>
                  <RadioButton value="sell">Sell</RadioButton>
                </RadioGroup>
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="Order Type"
            >
                <RadioGroup>
                  <RadioButton value="limit">Limit</RadioButton>
                  <RadioButton value="market">Market</RadioButton>
                </RadioGroup>
            </FormItem>
            
            <FormItem
              {...formItemLayout}
              label="Price"
            >
                <InputNumber />

                <span className="ant-form-text"> rupees</span>
            </FormItem>
            
            <FormItem
              {...formItemLayout}
              label="Volume"
            >
                <InputNumber />

                <span className="ant-form-text"> BTC</span>
            </FormItem>

          </Form>
        </Modal>
      </div>
    );
  }
}

export default OrderModalComponent;