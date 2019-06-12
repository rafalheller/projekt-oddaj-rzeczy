import React from 'react';
import Main from './components/Main'

import './scss/main.scss';
import Minimenu from "./components/Minimenu";
import Head from "./components/Head";
import Stats from "./components/Stats";
import Register from "./components/Register";
import About from "./components/About";
import Help from "./components/Help";


import * as Scroll from 'react-scroll';
import {Link, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'




function App() {


    return (
        <div className="App wrapper">
            {/*<Minimenu name="zenek"/>*/}
            <Head />
            <Stats/>
            <Register/>
            <About/>
            <Help/>
            {/*<Header />*/}
            <Main/>

        </div>
    );

}
export default App;
