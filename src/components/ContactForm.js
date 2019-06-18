import React, {Component} from 'react';

class ContactForm extends Component {
    state = {
        username: ""
    }
    render() {
        return (
            <section id='form'>
                <div className="form-wrapper">
                    <h1>Skontaktuj się z nami
                        <div className="decoration"></div></h1>
                    <p>formularz kontaktowy</p>
                    <form>
                        <label htmlFor='user'>
                            <div className="input-wrapper">
                                <input type="text" id='user' value={this.state.username} name='username'/>
                                <input type="email" value='Email'/>
                            </div>
                            <input className='message' type="text" value="Wiadomość"/>
                            <input className='button' type="submit" value="Wyślij"/>
                        </label>
                    </form>
                </div>
            </section>

        );
    }
}

export default ContactForm;