import React, {Component} from 'react';
import Header from "../components/Header/Header";
import Stats from "../components/Stats";
import Register from "../components/Register";
import About from "../components/About";
import Help from "../components/Help";
import Main from "../components/Main";
import Login from "../components/Login&RegisterForms/Login";
import ScrollTopButton from "../components/ScrollTopButton";
import LoginPage from "./LoginPage";

class MainPage extends Component {
    render() {
        return (
            <>
                <Header/>
                <Stats/>
                <Register/>
                <About/>
                <Help/>
                <Main/>
                {/*<Login/>*/}
                <ScrollTopButton/>
                {/*<LoginPage/>*/}
            </>
        );
    }
}

export default MainPage;