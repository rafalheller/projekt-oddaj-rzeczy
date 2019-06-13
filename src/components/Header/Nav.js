import React, {Component} from 'react';
import {Link} from "react-scroll/modules";

class Nav extends Component {
    render() {
        return (
            <nav className="nav">
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
        );
    }
}

export default Nav;