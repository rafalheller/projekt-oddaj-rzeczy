import React, {Component} from 'react';
import Menu from './Menu'
import Title from './Title'
import Rectangles from './Rectangles'

// import Minimenu from "./Minimenu";


class Header extends Component {
    render() {
        return (


            <header id='header'>
                <div className="header-container top-menu">
                    <Menu/>
                    <Title/>
                    <Rectangles/>
                </div>
            </header>


        );
    }
}

export default Header;

