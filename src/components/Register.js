import React, {Component} from 'react';
import hands from "../images/28.png";
import arrow from "../images/016.png";
import eyes from "../images/039.png";
import courier from "../images/58.png";

class Register extends Component {
    render() {
        return (
            <main id='register' className='whatIsThis-scroll'>
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
        );
    }
}

export default Register;