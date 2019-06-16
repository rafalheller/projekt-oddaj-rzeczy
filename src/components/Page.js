import React, {Component} from 'react';
import LoginPage from './../Pages/LoginPage'
import {Route, Switch} from 'react-router-dom'
import App from "../App";
import ErrorPage from "../Pages/ErrorPage";
import MainPage from "../Pages/MainPage";
class Page extends Component {
    render() {
        return (
            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path='/login' component={LoginPage}/>
                <Route component={ErrorPage} />
            </Switch>
        );
    }
}

export default Page;