import React from 'react';
import {Table, Row, Col} from 'antd';
import Layout from 'antd/lib/layout';
import Content from 'antd/lib/layout';
import autoBind from 'react-autobind';

export default class BitcoinDetailsTable extends React.Component {
    constructor(props) {
        super(props);

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
            coins: this.props.coins,
            dataSource: [
                {
                    key: '1',
                    bitcoin: this.props.coins.bitcoin,
                    usd: this.props.coins.usd,
                    currentExchangeRate: this.props.coins.currentExchangeRate
                }], count: 1,
        };

        autoBind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.coins !== this.props.coins) {
            this.setState({
                coins: nextProps.coins,
                dataSource: [
                    {
                        key: '1',
                        bitcoin: nextProps.coins.bitcoin,
                        usd: nextProps.coins.usd,
                        currentExchangeRate: nextProps.coins.currentExchangeRate
                    }], count: 1,
            });
        }
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