import React, {Component} from 'react';

class HelpBtn extends Component {

    render() {
        return (
            <div className="button">
                <p>{this.props.name}</p>
            </div>
        );
    }
}

export default HelpBtn;
