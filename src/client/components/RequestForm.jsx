import React from 'react';
import {Input, Form, Row, Col, Switch, Button} from 'antd';
import Calculator from "./Calculator.jsx";
import autoBind from "react-autobind";

const FormItem = Form.Item;

export default class RequestForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        autoBind(this);

        console.log(this.props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    handleReset() {
        document.getElementById("request-form").reset();
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const {keys, names} = values;
                console.log('Received values of form: ', values);
                console.log('Merged values:', keys.map(key => names[key]));
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;

        return (
            <div>
                <Form id="request-form" onSubmit={this.props.handleSubmit}>
                    <Row gutter={36}>
                        <Col span={17}>
                            <Row>
                                <Col>
                                    <Switch checkedChildren="Buy"
                                            checked={this.state.isToggleOn}
                                            unCheckedChildren="Sell"
                                            defaultChecked={true}
                                            onChange={this.handleClick}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={10}>
                                    <Row>
                                        <Calculator/>
                                    </Row>
                                </Col>
                                <Col span={7}>
                                    <FormItem label={'limit price'}>
                                        {getFieldDecorator('limitPrice', {
                                            rules: [{required: true, message: 'Please input your limit price'}],
                                        })(
                                            <Input size="default" name="usd" value={this.props.post.usd}
                                                   onChange={this.props.handleChange}
                                            />
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={7}>
                                    <FormItem label={'price'}>
                                        {getFieldDecorator('price', {
                                            rules: [{required: true, message: 'Please input your price'}],
                                        })(
                                            <Input size="default" name="bitcoin" value={this.props.post.bitcoin}
                                                   onChange={this.props.handleChange}
                                            />
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Button className="submit-button" id="submit-button" type="primary"
                                            htmlType="submit">Submit</Button>
                                    <Button className="reset-button" type="default" onClick={this.handleReset}>Clear
                                        All</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Form>


            </div>
        );
    }
}

