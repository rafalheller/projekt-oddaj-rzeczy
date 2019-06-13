import React, {Component} from 'react';
import Nav from './Nav'
import LogAndRegister from "./LogAndRegister";
import HelpDescription from './HelpDescription'
import Buttons from './Buttons'
import Login from "../LoginForm/Login";

class Header extends Component {

    render() {
        return (
            <header id='header'>
                <div className="top-menu-wrapper">
                    <LogAndRegister />
                    <Nav />
                    <HelpDescription />
                    <Buttons/>

                </div>
                {/*<Login/>*/}
            </header>

        );
    }
}

export default Header;