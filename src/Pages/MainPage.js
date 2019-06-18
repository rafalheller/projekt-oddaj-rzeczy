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
import Footer from "../components/Footer";
import ThanksForForm from "../components/ThanksForForm";
import ContactForm from "../components/ContactForm";

class MainPage extends Component {
    render() {
        return (
            <>
                <Header/>
                <Stats/>
                <Register/>
                <About/>
                <Help/>
                <ContactForm/>
                <ThanksForForm/>

                {/*<Login/>*/}
                <ScrollTopButton/>
                <Footer/>
                {/*<LoginPage/>*/}
            </>
        );
    }
}

export default MainPage;