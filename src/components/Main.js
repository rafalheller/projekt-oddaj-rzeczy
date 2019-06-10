import React, {Component} from 'react';
import facebook from "./../images/1447355328_06-facebook.png";
import instagram from './../images/1447355379_Instagram.png';

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

                    <footer>
                        <p>Copyright &copy; by Anna Dadej </p>
                        <div className='social-media'><img src={facebook} alt="facebook"/></div>
                        <div className="social-media"><img src={instagram} alt=""/></div>
                    </footer>
                </section>

            </>
        );
    }
}

export default Main;