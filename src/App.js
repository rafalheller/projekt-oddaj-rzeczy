import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import "./scss/main.scss";


import {HashRouter, Route, Link, Switch, NavLink} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";
import ErrorPage from "./Pages/ErrorPage";
import RegisterPage from "./Pages/RegisterPage";

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path='/login' component={LoginPage}/>
                <Route path='/register' component={RegisterPage}/>
                <Route component={ErrorPage}/>
            </Switch>
        </Router>
    );
}

export default App;
