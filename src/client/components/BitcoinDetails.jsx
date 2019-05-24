import React from 'react';
import BitcoinDetailsTable from './BitcoinDetailsTable.jsx';
import Toggle from "./Toggle.jsx";
import Buy from "./Buy.jsx";


export default class BitcoinDetails extends React.Component {

    render() {
        return (
            <div>
                <Toggle/>
                <BitcoinDetailsTable/>
                <Buy/>
            </div>
        );
    }
}