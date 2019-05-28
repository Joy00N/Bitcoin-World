import React from 'react';
import {Table, Row, Col} from 'antd';
import Layout from 'antd/lib/layout';
import autoBind from 'react-autobind';

const { Header, Content} = Layout;

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
                title: 'Limit Price',
                dataIndex: 'limitPrice',
                key: 'limitPrice'
            },
            {
                title: 'Stop Price',
                dataIndex: 'stopPrice',
                key: 'stopPrice'
            }
        ];

        this.state = {
            coins: this.props.coins,
            dataSource: [
                {
                    key: '1',
                    bitcoin: 10,
                    usd: 1000,
                    limitPrice: 1,
                    stopPrice: 1,
                }], count: 1,
        };
        autoBind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.coins !== this.props.coins) {
            this.setState({
                coins: nextProps.coins,
                dataSource: [
                    {
                        key: '1',
                        bitcoin: nextProps.coins.bitcoin,
                        usd: nextProps.coins.usd,
                        limitPrice: nextProps.coins.limitPrice,
                        stopPrice: nextProps.coins.stopPrice
                    }], count: 1,
            });
        }
    }

    render() {

        return (
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }} />
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