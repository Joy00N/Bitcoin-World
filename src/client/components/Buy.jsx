import React from 'react';
import Layout from 'antd/lib/layout';
import Content from 'antd/lib/layout';
import autoBind from 'react-autobind';
import RequestForm from './RequestForm.jsx';


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

        return (
            <Layout>
                <Content>
                    {/*<RequestForm/>*/}

                </Content>
            </Layout>
        )
    }
}