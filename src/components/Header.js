import React, {Component} from 'react';
import Menu from './Menu'
import Title from './Title'
import Rectangles from './Rectangles'
import hands from './../images/28.png'
import arrow from './../images/016.png'
import eyes from './../images/039.png'
import courier from './../images/58.png'
import signature from './../images/Signature.png'

// import Minimenu from "./Minimenu";


class Header extends Component {
    render() {
        return (

            <>
                <div className='cont'>
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deserunt ex labore
                                officia
                                quos, suscipit.</p>
                        </div>
                        <div className='column'>
                            <h2 className="counter">5</h2>
                            <h3>Oddanych worków</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deserunt ex labore
                                officia
                                quos, suscipit.</p>
                        </div>
                        <div className='column'>
                            <h2 className="counter">3</h2>
                            <h3>Oddanych worków</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deserunt ex labore
                                officia
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

                    <section id="about">
                        <div className='about-description'>
                            <h3>O nas <div className="decoration"></div></h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ducimus eaque est
                                eum
                                ipsa modi nihil, perferendis rerum saepe sunt!</p>
                            <div className='signature'><img src={signature} alt="signature"/></div>
                        </div>
                        <div className="about-img"></div>
                    </section>

                    {/*F=======================================================F*/}
                    <section id="menu-help">
                        <div className="menu-title">
                            <h2>Komu pomagamy?
                                <div className="decoration"></div></h2>
                            <div className="buttons">
                                <div className="button">
                                    <p>Fundacjom</p>
                                </div>
                                <div className="button">
                                    <p>Organizacjom pozarządowym</p>
                                </div>
                                <div className="button">
                                    <p>Lokalnym zbiórkom</p>
                                </div>
                            </div>

                            <p className='description'>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z
                                którymi współpracujemy.
                                Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.

                            </p>
                        </div>

                        <ul className='foundation-list '>
                            <li className='foundation-item'>
                                <h3 name="dbam o zdrowie" className="foundation-name">Fundacja: Lorem ipsum.</h3>
                                <p>Cel i misja: Lorem ipsum dolor sit amet.</p>
                                <p>ubrania, zabawki lsklsklskls</p>
                            </li>
                            <li className='foundation-item'><h3 name="dbam o zdrowie" className="foundation-name">Fundacja: Lorem ipsum.</h3>
                                <p>Cel i misja: Lorem ipsum dolor sit amet.</p>

                                <p>ubrania, zabawki lsklsklskls</p></li>
                            <li className='foundation-item'><h3 name="dbam o zdrowie" className="foundation-name">Fundacja: Lorem ipsum.</h3>
                                <p>Cel i misja: Lorem ipsum dolor sit amet.</p>
                                <p>ubrania, zabawki lsklsklskls</p></li>
                        </ul>


                    </section>


                </div>

            </>
        );
    }
}

export default Header;

