import React from 'react';
import {Table, Row, Col} from 'antd';
import Layout from 'antd/lib/layout';
import Content from 'antd/lib/layout';
import autoBind from 'react-autobind';

export default class BitcoinDetailsTable extends React.Component {
    constructor(props, context) {
        super(props, context);

        autoBind(this);
    }

    render() {
        let columns = [
            {
                title: 'Bitcoin',
                dataIndex: 'bitcoin',
                key: 'bitcoin'
            },
            {
                title: 'USD Balance',
                dataIndex: 'balance',
                key: 'balance'
            },
            {
                title: 'Current Exchange Rate',
                dataIndex: 'currentExchangeRate',
                key: 'currentExchangeRate'
            }
        ];

        const dataSource = [
            {
                key: '1',
                bitcoin: 'MSFT',
                balance: 10,
                currentExchangeRate: 1.0
            },
            {
                key: '2',
                bitcoin: 'AAPL',
                balance: 20,
                currentExchangeRate: 2.0
            },
            {
                key: '3',
                bitcoin: 'SPX',
                balance: 30,
                currentExchangeRate: 3.0
            }
        ];

        return (
            <Layout>
                <Content>
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                    />
                </Content>
            </Layout>
        )
    }
}