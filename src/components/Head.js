import React, {Component} from 'react';
import { Link } from 'react-scroll'

class Head extends Component {

    render() {
        return (
            <header id='header'>
                <div className="top-menu-wrapper">
                    <ul className='log'>
                        <li>Zaloguj</li>
                        <li className='sign-in'>Załóż konto</li>
                    </ul>
                    <nav className="nav">

                            {/*<li className='start'>Start</li>*/}
                            <Link
                                activeClass="active"
                                to="main-scroll"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
                                delay={200}
                                className="nav-list start"

                            >Start</Link>
                            {/*<li>O co chodzi ?</li>*/}
                            <Link
                                activeClass="active"
                                to="whatIsThis-scroll"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration= {500}
                                delay={200}
                                className="nav-list"


                            >O co chodzi?</Link>
                            {/*<li>O nas</li>*/}
                            <Link
                                activeClass="active"
                                to="about-scroll"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration= {500}
                                delay={200}
                                className="nav-list"

                            >O nas</Link>
                            {/*<li>Fundacje i organizacje</li>*/}
                            <Link
                                activeClass="active"
                                to="foundations-scroll"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration= {500}
                                delay={200}
                                className="nav-list"

                            >Fundacje i organizacje</Link>
                            {/*<li>Kontakt</li>*/}
                            <Link
                                activeClass="active"
                                to="contact-scroll"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration= {500}
                                delay={200}
                                className="nav-list"

                            >Kontakt</Link>
                    </nav>
                    <div className="title">
                        <h1>Zacznij pomagać!
                            Oddaj niechciane rzeczy w zaufane ręce</h1>
                        <div className="decoration"></div>
                    </div>
                    <div className="buttons">
                    <div className='big-button'><p>oddaj</p> <p>rzeczy</p></div>
                    <div className='big-button'><p>zorganizuj</p><p>zbiórkę</p></div>
                    </div>
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

export default Head;