import React, {Component} from 'react';

class HelpBtn extends Component {

    render() {
        return (
            <div style={this.props.style} onClick={this.props.onClick} className="button">
                <p>{this.props.name}</p>
            </div>
        );
    }
}

export default HelpBtn;
