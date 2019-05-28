import React from 'react';

import RequestForm from './RequestForm.jsx';
import {Statistic, Col, Row, Button, Form} from 'antd';
import BitcoinDetailsTable from './BitcoinDetailsTable.jsx';
import autoBind from 'react-autobind';
import {connect} from 'react-redux';
import {calculator} from '../actions';
import Calculator from './Calculator.jsx';


const WrappedRequestArea = Form.create()(RequestForm);


class BitcoinDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {
                bitcoin: "",
                usd: "",
                limitPrice: "",
                stopPrice: ""
            },
            coins: [],
            currentExchangeRate: "8025.26"
        };

        autoBind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.post !== this.props.post) {
            this.setState({post: nextProps.post});
        }

        if (nextProps.coins !== this.props.coins) {
            this.setState({coins: nextProps.coins});
        }
    }

    handleChange(e) {
        console.log(e);
        const {name, value} = e.target;
        console.log(e.target);
        this.setState(prevState => ({
            post: {...prevState.post, [name]: value}
        }));
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState(prevState => ({
            coins: [prevState.post],
            post: {bitcoin: "", usd: "", limitPrice: "", stopPrice: ""}
        }));


        this.setState({
            coins: this.state.post,
            post: {bitcoin: "", usd: "", limitPrice: "", stopPrice: ""}
        });
    };

    render() {
        return (
            <div className="App">
                <Row>
                    <Col span={6}>
                        <Statistic title="Bitcoin Current Exchange Rate" value={this.state.currentExchangeRate}
                                   precision={2}/>
                        <Button style={{marginTop: 16}} type="primary">
                            Recharge
                        </Button>
                    </Col>
                    <Col span={6}>
                        <Calculator/>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <WrappedRequestArea
                            handleChange={this.handleChange}
                            post={this.state.post}
                            handleSubmit={this.handleSubmit}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <BitcoinDetailsTable
                            coins={this.state.coins}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect()(BitcoinDetails)