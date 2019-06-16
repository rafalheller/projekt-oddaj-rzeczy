import React, {Component} from 'react';

class Stat extends Component {
    render() {
        return (
            <div className='column'>
                <h2 className="counter">{this.props.counter}</h2>
                <h3>{this.props.title}</h3>
                <p>Oat cake I love candy chocolate. Biscuit powder I love gummies tootsie roll ice cream marzipan
                    toffee. Sweet roll cookie apple pie chupa chups.
                </p>
            </div>
        );
    }
}

export default Stat;