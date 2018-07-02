import React from "react";
import ReactDOM from "react-dom";
import Login from './components/login';

import "./index.css";

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            test: 'true'
        };
    }
    // shouldComponentUpdate(newProps) {
    //     return this.state.test == 'false';
    // }
    render () {
        return (
            <div className="wrapper">
                <h1>Index</h1>
                <button onClick={ this.handleClick }>Button from Index Component!</button>
                <Login test={ this.state.test } onClick = { this.handleClick }/>
            </div>
        );
    }
    handleClick = (text) => {
        console.log(text);
        this.setState({ test: 'false' });
    }
}

ReactDOM.render(<Index />, document.getElementById("index"));