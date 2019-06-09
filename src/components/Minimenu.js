import React, {Component} from 'react';
import settings from "./../images/57.png";


class Minimenu extends Component {
    state = {
        active: true
    }

    handleClick = () => {
        this.setState({active: !this.state.active})
    }


    render() {


        if (this.state.active) {
            return (
                <div className='minimenu'>
                    Witaj {this.props.name}
                    <img onClick={this.handleClick} src={settings} alt="settings"/>
                </div>
            );
        } else {
            return (
                <div className='minimenu'>
                    <img onClick={this.handleClick} src={settings} alt="settings"/>
                    <ul>
                        <li>profil</li>
                        <li>ustawienia</li>
                        <li>moje zbiórki</li>
                        <li>wyloguj</li>
                    </ul>
                </div>);

        }
    }
}


export default Minimenu

