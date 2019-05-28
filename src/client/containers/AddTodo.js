import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import {Input, Form, Row, Col, Switch, Button} from 'antd';

const FormItem = Form.Item;

const AddTodo = ({ dispatch }) => {
    let input, input2;

    return (
        <div>
            <Form
                onSubmit={e => {
                    e.preventDefault();

                    dispatch(addTodo(input.value));
                    dispatch(addTodo(input2.value));
                    input.value = '';
                }}
            >
                <Row>
                    <Col span={7}>
                        <FormItem label={'Bitcoin Balance'}>
                            <input id="bitcoin" ref={node => (input = node)} />
                        </FormItem>

                        <FormItem label={'USD Balance'}>
                            <input id="usd" ref={node => (input2 = node)} />
                        </FormItem>
                    </Col>
                </Row>

                {/*<input ref={node => (input = node)} />*/}
                <button type="submit">Add Todo</button>
            </Form>
        </div>
    )
}

export default connect()(AddTodo)