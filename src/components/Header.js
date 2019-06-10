import React, {Component} from 'react';
import Menu from './Menu'
import Title from './Title'
import Rectangles from './Rectangles'
import hands from './../images/28.png'
import arrow from './../images/016.png'
import eyes from './../images/039.png'
import courier from './../images/58.png'

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
                <main id='register'>
                    <p>Wystarczą 4 proste kroki</p>
                    <div className="decoration"></div>
                    <div className="steps-container">
                        <div className="step">
                            <img src={hands} alt="hands"/>
                            <h3>Wybierz rzeczy</h3>
                            <p>ubrania, zabawki,
                                sprzęt i inne</p>

                        </div>
                        <div className="step"><img src={arrow} alt="hands"/>
                            <h3>Wybierz rzeczy</h3>
                            <p>ubrania, zabawki,
                                sprzęt i inne</p></div>
                        <div className="step"><img src={eyes} alt="hands"/>
                            <h3>Wybierz rzeczy</h3>
                            <p>ubrania, zabawki,
                                sprzęt i inne</p></div>
                        <div className="step"><img src={courier} alt="hands"/>
                            <h3>Wybierz rzeczy</h3>
                            <p>ubrania, zabawki,
                                sprzęt i inne</p></div>
                    </div>

                    <button>załóż konto</button>
                </main>

            </>
        );
    }
}

export default Header;

