import React, {Component} from 'react';

const Stat = (props) => {
    return (
        <div className='column'>
            <h2 className="counter">{props.counter}</h2>
            <h3>{props.title}</h3>
            <p>Oat cake I love candy chocolate. Biscuit powder I love gummies tootsie roll ice cream marzipan
                toffee. Sweet roll cookie apple pie chupa chups.
            </p>
        </div>
    );
}


export default Stat;
