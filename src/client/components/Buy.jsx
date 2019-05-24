import React from 'react';
import {Input} from 'antd';
import Layout from 'antd/lib/layout';
import Content from 'antd/lib/layout';
import Calculator from "./Calculator.jsx";
import autoBind from 'react-autobind';


export default class Buy extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            first: "First Default Value",
            second: "Second Default Value"
        };

        autoBind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const {TextArea} = Input;

        return (
            <Layout>
                <Content>
                    <TextArea
                        name="temp"
                        rows={1}
                        style={{marginBottom: "10px"}}
                        value={this.state.first}
                        onChange={this.onChange}
                    />
                    <Calculator/>
                </Content>
            </Layout>
        )
    }
}