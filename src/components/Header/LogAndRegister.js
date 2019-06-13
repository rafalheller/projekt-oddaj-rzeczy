import React, {Component} from 'react';
import Login from './../LoginForm/Login'
import LoginPage from "../LoginForm/LoginPage";

class LogAndRegister extends Component {
    state = {
        logIn: false
    }

    handleClick = () => {
        this.setState({
            logIn: true
        })
    };

    render() {
        if (!this.state.logIn)
            return (

                <ul className='log'>
                    <li onClick={this.handleClick}>Zaloguj</li>
                    <li className='sign-in'>Załóż konto</li>
                </ul>
            ); else {
            return <>

                <LoginPage/>
            </>

        }
    }
}

export default LogAndRegister;