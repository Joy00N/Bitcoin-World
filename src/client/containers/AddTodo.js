import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'
import {Input, Form, Row, Col, Switch, Button} from 'antd';



const FormItem = Form.Item;

const AddTodo = ({dispatch}) => {
    let input1, input2, input3, input4;

    return (
        <div>
            <Form
                onSubmit={e => {
                    e.preventDefault();

                    dispatch(addTodo(input1.props.name, input1.state.value));
                    dispatch(addTodo(input2.props.name, input2.state.value));
                    dispatch(addTodo(input3.props.name, input3.state.value));
                    dispatch(addTodo(input4.props.name, input4.state.value));

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

                <button type="submit">Add Todo</button>
            </Form>
        </div>
    )
}

export default connect()(AddTodo)