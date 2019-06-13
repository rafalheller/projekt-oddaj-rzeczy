import React, {Component} from 'react';

class Buttons extends Component {
    render() {
        return (
            <div className="buttons">
                <div className='big-button'>
                    <p>oddaj</p>
                    <p>rzeczy</p>
                </div>
                <div className='big-button'>
                    <p>zorganizuj</p>
                    <p>zbiórkę</p>
                </div>
            </div>
        );
    }
}

export default Buttons;