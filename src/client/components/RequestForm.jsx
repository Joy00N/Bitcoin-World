import React from 'react';
import {Input, Form, Row, Col, Switch, Button, Radio} from 'antd';
import autoBind from 'react-autobind';

const FormItem = Form.Item;


export default class RequestForm extends React.Component {

    constructor(props) {
        super(props);

        autoBind(this);
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (

            <div>
                <Form id="request-form" onSubmit={this.props.handleSubmit}>
                    <Row>
                        <Col span={17}>

                            <Row gutter={50}>
                                <Col span={5}>
                                    <FormItem label={'Bitcoin'}>
                                        {getFieldDecorator('bitcoin', {
                                            rules: [{required: true, message: 'Please enter your stop price'}],
                                        })(
                                            <Input size="default" name="bitcoin" value={this.props.post.bitcoin}
                                                   onChange={this.props.handleChange}
                                            />
                                        )}
                                    </FormItem>
                                </Col>

                                <Col span={5}>
                                    <FormItem label={'USD'}>
                                        {getFieldDecorator('usd', {
                                            rules: [{required: true, message: 'Please enter your stop price'}],
                                        })(
                                            <Input size="default" name="usd" value={this.props.post.usd}
                                                   onChange={this.props.handleChange}
                                            />
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={5}>
                                    <FormItem label={'Limit Price'}>
                                        {getFieldDecorator('limitPrice', {
                                            rules: [{required: true, message: 'Please enter your limit price'}],
                                        })(
                                            <Input size="default" name="limitPrice" value={this.props.post.limitPrice}
                                                   onChange={this.props.handleChange}
                                            />
                                        )}
                                    </FormItem>
                                </Col>

                                <Col span={5}>
                                    <FormItem label={'Stop Price'}>
                                        {getFieldDecorator('stopPrice', {
                                            rules: [{required: true, message: 'Please enter your stop price'}],
                                        })(
                                            <Input size="default" name="stopPrice" value={this.props.post.stopPrice}
                                                   onChange={this.props.handleChange}
                                            />
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row gutter={50}>

                                <Col span={24}>
                                    <Button className="submit-button" id="submit-button" type="primary"
                                            htmlType="submit">Submit</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Form>


            </div>
        );
    }
}

