import React, {Component} from 'react';
import Menu from './Menu'
import Title from './Title'
import Rectangles from './Rectangles'

// import Minimenu from "./Minimenu";


class Header extends Component {
    render() {
        return (

            <>
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
                        <div className="title">
                            <h1>Zacznij pomagać!
                                Oddaj niechciane rzeczy w zaufane ręce</h1>
                            <div className="decoration"></div>
                        </div>
                        <div className='big-button'><p>oddaj</p> <p>rzeczy</p></div>
                        <div className='big-button'><p>zorganizuj</p><p>zbiórkę</p></div>

                    </div>


                    {/*<div className="header-container top-menu">*/}
                    {/*    <Menu/>*/}
                    {/*    <Title/>*/}
                    {/*    <Rectangles/>*/}
                    {/*</div>*/}
                </header>
                <section id='stats'>
                    <div className='column'>
                        <h2 className="counter">10</h2>
                        <h3>Oddanych worków</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deserunt ex labore officia
                            quos, suscipit.</p>
                    </div>
                    <div className='column'>
                        <h2 className="counter">5</h2>
                        <h3>Oddanych worków</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deserunt ex labore officia
                            quos, suscipit.</p>
                    </div>
                    <div className='column'>
                        <h2 className="counter">3</h2>
                        <h3>Oddanych worków</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deserunt ex labore officia
                            quos, suscipit.</p>
                    </div>
                </section>

            </>
        );
    }
}

export default Header;

