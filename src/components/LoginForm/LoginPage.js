import React, {Component} from 'react';
import LogAndRegister from "../Header/LogAndRegister";
import Nav from "../Header/Nav";
import HelpDescription from "../Header/HelpDescription";
import Buttons from "../Header/Buttons";
import Login from "./Login";

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