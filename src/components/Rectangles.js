import React, {Component} from 'react';

class Rectangles extends Component {
    render() {
        return (
            <div className='rectangles'>
                <div className='rectangle'>
                    <p><span>1</span> <br/>Wybierz rzeczy</p>
                </div>
                <div className='rectangle'><p><span>2</span> <br/>Spakuj je w worki</p>
                </div>
                <div className='rectangle'>
                    <p><span>3</span> <br/>Wybierz
                        fundację</p>
                </div>
                <div className='rectangle'>
                    <p><span>4</span> <br/>Zamów kuriera</p>
                </div>
            </div>
        );
    }
}

export default Rectangles;