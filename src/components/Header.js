import React, {Component} from 'react';
import Menu from './Menu'
import Title from './Title'
import Rectangles from './Rectangles'

// import Minimenu from "./Minimenu";


class Header extends Component {
    render() {
        return (


            <header id='header'>
                <div className="top-menu-wrapper">
                    <ul className='log'>
                        <li>Zaloguj</li>
                        <li className='sign-in'>Załóż konto</li>
                    </ul>
                    <nav className="nav">
                        <ul>
                            <li className='start'>Start</li>
                            <li>O co chodzi ?</li>
                            <li>O nas</li>
                            <li>Fundacje i organizacje</li>
                            <li>Kontakt</li>
                        </ul>
                    </nav>



                </div>


















                {/*<div className="header-container top-menu">*/}
                {/*    <Menu/>*/}
                {/*    <Title/>*/}
                {/*    <Rectangles/>*/}
                {/*</div>*/}
            </header>


        );
    }
}

export default Header;

