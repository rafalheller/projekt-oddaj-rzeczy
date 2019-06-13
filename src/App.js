import React from 'react';
import Main from './components/Main'

import './scss/main.scss';
import Minimenu from "./components/Minimenu";
import Header from "./components/Header/Header";
import Stats from "./components/Stats";
import Register from "./components/Register";
import About from "./components/About";
import Help from "./components/Help";
import ScrollTopButton from './components/ScrollTopButton'
import Login from "./components/LoginForm/Login";

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import LoginPage from "./components/LoginForm/LoginPage";

function App() {



    return (
        <div className="App wrapper">
            {/*<Minimenu name="zenek"/>*/}
            <Header />
            <Stats/>
            <Register/>
            {/*<About/>*/}
            <Route exact path='/' component={About} />
            <Help/>

            <Main/>
            <Route path='/login' component={Login} />
            {/*<Login/>*/}
            <ScrollTopButton/>
            <LoginPage/>
            {/*<div className="scroll-top social-media" onClick={this.scrollToTop}>TOP</div>*/}

        </div>
    );

}
export default App;
