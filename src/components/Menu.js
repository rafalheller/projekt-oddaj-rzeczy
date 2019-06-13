import React, {Component} from 'react';

class Menu extends Component {
    render() {
        return (
            <nav>
                <ul className='menu'>
                    <li className='button'><a href="#">Start</a></li>
                    <li className='button'><a href="#">O co chodzi?</a></li>
                    <li className='button'><a href="#">O nas</a></li>
                    <li className='button'><a href="#">Fundacje i organizacje</a></li>

                    {/*<li><Minimenu/></li>*/}
                </ul>
            </nav>
        );
    }
}

export default Menu;