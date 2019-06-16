import React, {Component} from 'react';

const randNum1 = Math.floor(Math.random() * 17)
const randNum2 = Math.floor(Math.random() * 10)
const randNum3 = Math.floor(Math.random() * 21)

class Stats extends Component {
    render() {
        return (
            <section id='stats'>
                <div className='column'>
                    <h2 className="counter">{randNum1}</h2>
                    <h3>Oddanych worków</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deserunt ex labore
                        officia
                        quos, suscipit.</p>
                </div>
                <div className='column'>
                    <h2 className="counter">{randNum2}</h2>
                    <h3>Oddanych worków</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deserunt ex labore
                        officia
                        quos, suscipit.</p>
                </div>
                <div className='column'>
                    <h2 className="counter">{randNum3}</h2>
                    <h3>Oddanych worków</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deserunt ex labore
                        officia
                        quos, suscipit.</p>
                </div>
            </section>
        );
    }
}

export default Stats;