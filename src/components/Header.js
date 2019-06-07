import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header id='header' className='container'>
                <div className="picture">
                </div>
                <nav className='main-nav'>
                    <ul>
                        <li><a className='button' href="#">Start</a></li>
                        <li><a className='button' href="#">O co chodzi?</a></li>
                        <li><a className='button' href="#">O nas</a></li>
                        <li><a className='button' href="#">Fundacje i organizacje</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;