import React, {Component} from 'react';
// import head from "./../scss/components/_Head.scss"

import {NavLink} from 'react-router-dom'

const list = [
    {name: "Zaloguj", path: "/login", exact: true, className: "nav-list"},
    {name: 'Załóż konto', path: '/register', className: 'sign-in nav-list'},
]

class LogAndRegister extends Component {


    render() {

        const logMenu = list.map(item => (
            <li key={item.name} className={item.className}>
                <NavLink path={item.path} exact={item.exact} to={item.path}>{item.name}</NavLink>
            </li>
        ))

        return <nav>
            <ul className='log'>
                {logMenu}
            </ul>
        </nav>


        // if (!this.state.logIn)
        //     return (
        //
        //         <ul className='log'>
        //             <li onClick={this.handleClick}>Zaloguj</li>
        //             <li className='sign-in'>Załóż konto</li>
        //         </ul>
        //     ); else {
        //     return <>
        //
        //         <LoginPage/>
        //     </>
        //
        // }
    }
}

export default LogAndRegister;