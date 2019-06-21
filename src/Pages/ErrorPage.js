import React, {Component} from 'react';
import '../scss/components/_ErrorPage.scss'

class ErrorPage extends Component {
    render() {
        return (
            <div className='error'>
                <h1>Uuppsssss, nie ma takiej strony</h1>
            </div>
        );
    }
}

export default ErrorPage;