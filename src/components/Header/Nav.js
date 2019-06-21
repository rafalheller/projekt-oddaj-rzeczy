import React, {Component} from "react";
import {Link} from "react-scroll/modules";


const list = [
    {
        name: 'Start', to: "main-scroll", spy: true, smooth: true, offset: -70, duration: 500,
        delay: 200,
        className: "nav-list start"
    },
    { name: 'O co chodzi',
        to: "whatIsThis-scroll",
        spy: true,
        smooth: true,
        offset: 0,
        duration: 500,
        delay: 200,
        className: "nav-list"},
    { name: 'O nas',
        to: "about-scroll",
        spy: true,
        smooth: true,
        offset: 0,
        duration: 500,
        delay: 200,
        className: "nav-list"},
    { name: 'Fundacje i organizacje',
        to: "foundations-scroll",
        spy: true,
        smooth: true,
        offset: 0,
        duration: 500,
        delay: 200,
        className: "nav-list"},
    { name: 'Kontakt',
        to: "contact-scroll",
        spy: true,
        smooth: true,
        offset: 0,
        duration: 500,
        delay: 200,
        className: "nav-list"}
]

class Nav extends Component {
    render() {
       const menu = list.map(item=>(
           <li key={item.name}>
               <Link
               name={item.name}
               to={item.to}
               spy={item.spy}
               smooth={item.smooth}
               offset={item.offset}
               duration={item.duration}
               delay={item.delay}
               className={item.className}>{item.name}</Link>

           </li>
       ))




        return (
            <nav className="nav">
               <ul>
                   {menu}
               </ul>
            </nav>
        );
    }
}

export default Nav;
