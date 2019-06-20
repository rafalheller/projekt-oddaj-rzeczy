import React, {Component} from 'react';

class ContactForm extends Component {
    state = {
        username: "",
        email: "",
        message: "",
        errors: {
            username: false,
            email: false,
            message: false
        }
    }
    messages = {
        username_incorrect: "Imię musi zawierać minimum 3 litery",
        email_incorrect: "Brak @ w emailu",
        message_incorrect: "Twoja wiadomość jest pusta"

    }
    formValidation = () => {
        let username = false;
        let email = false;
        let message = false;
        let correct = false;

        if (this.state.username.length >= 3 && this.state.username.indexOf(' ') === -1) {
            username = true;
        }
        if (this.state.email.indexOf('@') !== -1) {
            email = true;
        }
        if (this.state.message.length >= 1) {
            message = true

        }
        if (username && email && message) {
            correct = true
        }
        return ({correct, username, message, email})
    }


    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const validation = this.formValidation();
        console.log(validation)

        if (validation.correct) {
            this.setState({

                username: "",
                email: "",
                message: "",
                errors: {
                    username: false,
                    email: false,
                    message: false
                }

            })
            console.log('formularz wysłany')
        } else {
            this.setState({
                errors: {
                    username: false,
                    email: false,
                    message: false
                }
            })
        }
    }

    render() {
        return (
            <section id='form'>
                <div className="form-wrapper">
                    <h1>Skontaktuj się z nami
                        <div className="decoration"></div></h1>
                    <p>formularz kontaktowy</p>
                    <form onSubmit={this.handleSubmit} noValidate>

                        <div className="input-wrapper">
                            <label htmlFor="user">
                                <input type="text"
                                       id='user'
                                       value={this.state.username}
                                       name='username'
                                       onChange={this.handleChange}/>
                                {this.state.errors.username ? <span>{this.messages.username_incorrect}</span> : null}
                            </label>
                            <label htmlFor="email">
                                <input type="email"
                                       value={this.state.email}
                                       name='email'
                                       onChange={this.handleChange}/>
                                {this.state.errors.email ? <span>{this.messages.email_incorrect}</span> : null}
                            </label>
                        </div>

                        <input className='message'
                               type="text"
                               name='message'
                               value={this.state.message}
                               onChange={this.handleChange}/>
                        {this.state.errors.message ? <span>{this.messages.message_incorrect}</span> : null}

                        {/*<input className='button' type="submit" value="Wyślij"/>*/}
                        <button className='button'>Wyślij</button>

                    </form>
                </div>
            </section>

        );
    }
}

export default ContactForm;