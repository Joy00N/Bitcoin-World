import React from 'react';
import {Table, Row, Col} from 'antd';
import Layout from 'antd/lib/layout';
import Content from 'antd/lib/layout';
import autoBind from 'react-autobind';

export default class BitcoinDetailsTable extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.columns = [
            {
                title: 'Bitcoin Balance',
                dataIndex: 'bitcoin',
                key: 'bitcoin'
            },
            {
                title: 'USD Balance',
                dataIndex: 'usd',
                key: 'usd'
            },
            {
                title: 'Current Exchange Rate',
                dataIndex: 'currentExchangeRate',
                key: 'currentExchangeRate'
            }
        ];

        this.state = {
            dataSource: [
                {
                    key: '1',
                    bitcoin: 10,
                    usd: 1000,
                    currentExchangeRate: 1.0
                }
                ], count: 1,
        };

        autoBind(this);
    }

    handleUpdate = () => {
        const dataSource = [...this.state.dataSource];
        this.setState({dataSource: dataSource})
    }

    render() {

        return (
            <Layout>
                <Content>
                    <Table
                        columns={this.columns}
                        dataSource={this.state.dataSource}
                        bordered={true}
                    />
                </Content>
            </Layout>
        )
    }
}