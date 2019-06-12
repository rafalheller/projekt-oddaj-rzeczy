import React, {Component} from 'react';
import signature from "../images/Signature.png";

class About extends Component {
    render() {
        return (
            <section id="about" className='about-scroll'>
                <div className='about-description'>
                    <h3>O nas <div className="decoration"></div></h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ducimus eaque est
                        eum
                        ipsa modi nihil, perferendis rerum saepe sunt!</p>
                    <div className='signature'><img src={signature} alt="signature"/></div>
                </div>
                <div className="about-img"></div>
            </section>
        );
    }
}

export default About;