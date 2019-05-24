import React from 'react';
import BitcoinDetailsTable from './BitcoinDetailsTable.jsx';
import RequestForm from "./RequestForm.jsx";
import {Form} from 'antd';

const WrappedRequestArea = Form.create()(RequestForm);

export default class BitcoinDetails extends React.Component {
    constructor(){
        super();
        this.state= {
            items:[],
            currentItem: {}
        }
    }

    addItem  = e => {
        e.preventDefault();
        console.log('add item');
    }

    render() {
        return (
            <div className="bitcoin-details">
                <div>
                    <BitcoinDetailsTable addItem={this.addItem}/>
                </div>
                <div className="request-form">
                    <WrappedRequestArea/>
                </div>
            </div>
        );
    }
}