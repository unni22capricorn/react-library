import React from "react";
import ReactDOM from "react-dom";
import Login from './components/login';

import "./index.css";

const Index = () => {
    return (
        <div className="wrapper">
            <Login />
        </div>
    );
}

ReactDOM.render(<Index />, document.getElementById("index"));