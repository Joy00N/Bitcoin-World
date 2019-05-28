import React from 'react';
import BitcoinDetails from './BitcoinDetails.jsx';
import 'bootstrap/dist/css/bootstrap.css'
import VisibleRecordList from "../containers/VisibleRecordList";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };
    }

    componentDidMount() {
        setInterval(this.update, 1000)
    }

    update = () => {
        this.setState({
            time: new Date()
        })
    };

    render() {
        return (
            <div className="container-fluid">
                <h1>Hi, it is {this.state.time.toLocaleTimeString()}</h1>
                <BitcoinDetails/>
                <VisibleRecordList/>
            </div>
        );
    }
}
export default App;