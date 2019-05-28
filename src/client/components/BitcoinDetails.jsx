import React from 'react';

import {Statistic, Col, Row, Button, Form, Switch, Radio} from 'antd';
import BitcoinDetailsTable from './BitcoinDetailsTable.jsx';
import autoBind from 'react-autobind';
import {connect} from 'react-redux';
import Calculator from './Calculator.jsx';
import AddRecord from "../containers/AddRecord.js";
import RecordList from "./RecordList";

const RadioGroup = Radio.Group;

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
            currentExchangeRate: 8025.26,
                isToggleOn: true,
                radioValue: 1,
        };

        this.state.recordList = RecordList;

        this.handleClick = this.handleClick.bind(this);
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

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    onRadioChange = e => {
        this.setState({
            radioValue: e.target.value,
        });
    };

    handleChange(e) {
        const {name, value} = e.target;
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

    handleRefresh(){
        let max = 8020.00;
        let min = 8040.02;
        this.setState({currentExchangeRate: Math.floor(Math.random()*(max-min+1)+min)});
    }

    render() {
        return (
            <div className="App">
                <Row>
                    <Col span={6}>
                        <Statistic title="Current Bitcoin Exchange Rate" value={this.state.currentExchangeRate}
                                   precision={2}/>
                        <Button style={{marginTop: 16}} type="primary" onClick={this.handleRefresh}>
                            Refresh
                        </Button>
                    </Col>
                    <Col span={6}>
                        <Calculator
                            currentExchangeRate={this.state.currentExchangeRate}/>
                    </Col>
                </Row>


                <Row gutter={36}>
                    <Col>
                        <Switch checkedChildren="Buy"
                                checked={this.state.isToggleOn}
                                unCheckedChildren="Sell"
                                defaultChecked={true}
                                onChange={this.handleClick}
                        />
                    </Col>
                </Row>

                <Row gutter={50}>
                    <Col>
                        <RadioGroup onChange={this.onRadioChange} value={this.state.radioValue}>
                            <Radio value={1}>Market Order</Radio>
                            <Radio value={2}>Limit Order</Radio>
                            <Radio value={3}>Stop Order</Radio>
                        </RadioGroup>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <AddRecord/>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <BitcoinDetailsTable
                            coins={this.state.records}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect()(BitcoinDetails)