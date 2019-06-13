import React from 'react';
import Main from './components/Main'

import './scss/main.scss';
import Minimenu from "./components/Minimenu";
import Head from "./components/Head";
import Stats from "./components/Stats";
import Register from "./components/Register";
import About from "./components/About";
import Help from "./components/Help";
import ScrollTopButton from './components/ScrollTopButton'


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
            <ScrollTopButton/>
            {/*<div className="scroll-top social-media" onClick={this.scrollToTop}>TOP</div>*/}

        </div>
    );

}
export default App;
