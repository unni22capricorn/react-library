import React from 'react';

class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            clicked: 'false'
        };
    }
    render() {
        return (
            <div className='login-wrapper'>
                <h4>Login: </h4>
                <input onChange={ this.handleUsernameChange } type = "text" placeholder = "Username"/>
                <input onChange={ this.handlePasswordChange } type = "password" placeholder = "Password"/>
                <button type= "Submit" onClick={ this.handleSubmit }>Button from Login Component</button>
                <button type= "Submit" onClick={ () => { this.props.onClick('hello') } }>Button from Login Component for parent method</button>
                <div>{ this.state.userName }</div>
                <div>{ this.state.password }</div>
                <div>Test: { this.props.test }</div>
                <div>Clicked: { this.state.clicked }</div>
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
        this.setState({ clicked: 'true' }, () => {
            // fetch('https://url', {
            //     method: 'POST',
            //     body: JSON.stringify({
            //         username: this.state.userName,
            //         password: this.state.password
            //     })
            // }).then((response) => {
            //     alert(response);
            // });
        });
    }
}

export default Login;