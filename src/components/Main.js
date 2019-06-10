import React, {Component} from 'react';

class Main extends Component {
    render() {
        return (
            <>
                <div id='thanks' className='thanks-section'>

                    <p className='thanks-text'>Dziękujemy za przesłanie formularza
                        Na maila prześlemy wszelkie
                        informacje o odbiorze.
                        <div className="decoration"></div>
                    </p>

                </div>


                <section id='form'>
                    <div className="form-wrapper">
                        <h1>Skontaktuj się z nami
                            <div className="decoration"></div></h1>
                        <p>formularz kontaktowy</p>
                        <form action="submit">
                            <div className="input-wrapper">
                                <input type="text" value="imię"/>
                                <input type="email" value='Email'/>
                            </div>
                            <input className='message' type="text" value="Wiadomość"/>
                            <input className='button' type="submit" value="Wyślij"/>


                        </form>
                    </div>

                    <footer></footer>
                </section>

            </>
        );
    }
}

export default Main;