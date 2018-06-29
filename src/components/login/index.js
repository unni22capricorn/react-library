import React from 'react';

class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            userName: "",
            password: ""
        };
    }
    render() {
        return (
            <div>
                <label>Login: </label>
                <input onChange={ this.handleUsernameChange } type = "text" placeholder = "Username"/>
                <input onChange={ this.handlePasswordChange } type = "password" placeholder = "Password"/>
                <button type= "Submit" onClick={ this.handleSubmit }>Submit</button>
                <div>{ this.state.userName }</div>
                <div>{ this.state.password }</div>
            </div>
        );
    }
    handleUsernameChange = (e) => {
        this.setState({
            userName: e.target.value
        });
    }
    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }
    handleSubmit = (e) => {
        fetch('https://url', {
            method: 'POST',
            body: JSON.stringify({
                username: this.state.userName,
                password: this.state.password
            })
        }).then((response) => {
            alert(response);
        });
    }
}

export default Login;