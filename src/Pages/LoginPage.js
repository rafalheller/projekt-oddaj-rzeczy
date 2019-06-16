import React, {Component} from 'react';
import LogAndRegister from "../components/Header/LogAndRegister";
import Nav from "../components/Header/Nav";
import HelpDescription from "../components/Header/HelpDescription";
import Buttons from "../components/Header/Buttons";
import Login from "../components/Login&RegisterForms/Login";

class LoginPage extends Component {
    render() {
        return (
            <>
                <LogAndRegister/>
                <Login/>
            </>
        );
    }
}

export default LoginPage;