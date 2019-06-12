import React, {Component} from 'react';

class Stats extends Component {
    render() {
        return (
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
        );
    }
}

export default Stats;