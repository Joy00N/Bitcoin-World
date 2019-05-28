import React from 'react'
import {connect} from 'react-redux'
import {addRecord} from '../actions'
import {Input, Form, Row, Col, Switch, Button} from 'antd';

const FormItem = Form.Item;

const AddRecord = ({dispatch}) => {
    let input1, input2, input3, input4;

    return (
        <div>
            <Form
                onSubmit={e => {
                    e.preventDefault();

                    dispatch(addRecord(input1.props.name, input1.state.value));
                    dispatch(addRecord(input2.props.name, input2.state.value));
                    dispatch(addRecord(input3.props.name, input3.state.value));
                    dispatch(addRecord(input4.props.name, input4.state.value));

                    input1.state.value = '';
                    input2.state.value = '';
                    input3.state.value = '';
                    input4.state.value = '';

                }}
            >
                <Row gutter={50}>
                    <Col span={5}>
                        <FormItem label={'Bitcoin'}>
                            <Input name="bitcoin" ref={node => (input1 = node)
                            }/>
                        </FormItem>
                    </Col>

                    <Col span={5}>
                        <FormItem label={'USD'}>
                            <Input name="usd" ref={node => (input2 = node)}
                            />
                        </FormItem>
                    </Col>
                    <Col span={5}>
                        <FormItem label={'Limit Price'}>
                            <Input name="limitPrice" ref={node => (input3 = node)}
                            />
                        </FormItem>
                    </Col>

                    <Col span={5}>
                        <FormItem label={'Stop Price'}>
                            <Input name="stopPrice" ref={node => (input4 = node)}
                            />
                        </FormItem>
                    </Col>
                </Row>

                <Row gutter={50}>

                    <Col span={24}>
                        <Button className="submit-button" id="submit-button" type="primary"
                                htmlType="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default connect()(AddRecord)