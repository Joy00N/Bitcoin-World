import React from 'react';
import BitcoinDetails from './BitcoinDetails.jsx';
import 'bootstrap/dist/css/bootstrap.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    render() {
        return (
            <div className="container-fluid">
                <h1>Hi, it is {this.state.date.toLocaleDateString()}</h1>
                <BitcoinDetails/>
            </div>
        );
    }
}

export default App;