import React, {Component} from 'react';
import {NavLink, Route} from "react-router-dom";

class Buttons extends Component {
    render() {
        return (


            <div className="buttons">

                    <NavLink to='/login' className='big-button'>
                        <p>oddaj</p>
                        <p>rzeczy</p>
                    </NavLink>

                <NavLink to='/login' className='big-button'>
                    <p>zorganizuj</p>
                    <p>zbiórkę</p>
                </NavLink>
            </div>

        );
    }
}

export default Buttons;