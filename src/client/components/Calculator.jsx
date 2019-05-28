import React from 'react';
import BitcoinInput from './BitcoinInput.jsx';

function toUSD(bitcoin) {
    return bitcoin / 8025.26;
}

function toBitcoin(usd) {
    return usd * 8025.26;
}

function tryConvert(value, convert) {
    const input = parseFloat(value);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleUSDChange = this.handleUSDChange.bind(this);
        this.handleBitcoinChange = this.handleBitcoinChange.bind(this);
        this.state = {value: '', scale: 'c'};
    }

    handleUSDChange(value) {
        this.setState({scale: 'c', value});

    }

    handleBitcoinChange(value) {
        this.setState({scale: 'f', value});
    }

    render() {
        const scale = this.state.scale;
        const value = this.state.value;
        const usd = scale === 'f' ? tryConvert(value, toUSD) : value;
        const bitcoin = scale === 'c' ? tryConvert(value, toBitcoin) : value;

        return (
            <div className="text-center container-fluid">
                <BitcoinInput
                    scale="c"
                    value={usd}
                    onChange={this.handleUSDChange} />
                <BitcoinInput
                    scale="f"
                    value={bitcoin}
                    onChange={this.handleBitcoinChange} />
            </div>
        );
    }
}