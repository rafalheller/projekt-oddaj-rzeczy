import React, {Component} from 'react';
import Minimenu from "./Minimenu";

class Header extends Component {
    render() {
        return (

            <header id='header'>
                <div className="header-container">
                    {/*MENU================*/}
                    <ul className='clearfix'>
                        <li className='button'><a href="#">Start</a></li>
                        <li className='button'><a href="#">O co chodzi?</a></li>
                        <li className='button'><a href="#">O nas</a></li>
                        <li className='button'><a href="#">Fundacje i organizacje</a></li>
                        {/*<li><Minimenu/></li>*/}
                    </ul>
                    {/*    MENU KONIEC*/}


                </div>
            </header>


        );
    }
}

export default Header;


{/*    <div className="title">*/
}
{/*        <h1>Oddaj rzeczy, których już nie chcesz</h1>*/
}
{/*        <p className="upper">potrzebującym</p>*/
}
{/*        <div className="decoration"></div>*/
}
{/*        <p>Wystarczą cztery proste kroki</p>*/
}
{/*    </div>*/
}

{/*</nav>*/
}