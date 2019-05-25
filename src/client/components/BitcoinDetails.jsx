import React, {Component} from "react";


import RequestForm from "./RequestForm.jsx";
import {Form} from "antd";
import BitcoinDetailsTable from "./BitcoinDetailsTable.jsx";
import autoBind from "react-autobind";


const WrappedRequestArea = Form.create()(RequestForm);


export default class BitcoinDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {
                bitcoin: "",
                usd: "",
                currentExchangeRate: ""
            },
            coins: []
        };

        autoBind(this);
    }

    // componentDidMount() {
    //     this.setState({post: this.state.post})
    //     this.setState({coins: this.state.coins})
    // }

    componentWillReceiveProps(nextProps) {
        if(nextProps.post !== this.props.post) {
            this.setState({post: nextProps.post});
        }

        if(nextProps.coins !== this.props.coins) {
            this.setState({coins: nextProps.coins});
        }
    }

    handleChange = e => {
        const {name, value} = e.target;
        console.log(e.target);
        this.setState(prevState => ({
            post: {...prevState.post, [name]: value}
        }));
    };

    handleSubmit = e => {
         e.preventDefault();

        this.setState(prevState => ({
            coins: [prevState.post],
            post: {bitcoin: "", usd: "", currentExchangeRate: ""}
        }));


        this.setState({
            coins: this.state.post,
            post: {bitcoin: "", usd: "", currentExchangeRate: ""}
        });
    };

    render() {
        return (
            <div className="App">
                <WrappedRequestArea
                    handleChange={this.handleChange}
                    post={this.state.post}
                    handleSubmit={this.handleSubmit}
                />

                <div className="post-container">
                    <BitcoinDetailsTable
                        coins={this.state.coins}
                    />
                </div>
            </div>
        );
    }
}
