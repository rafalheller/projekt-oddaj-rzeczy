import React, {Component} from 'react';

class RegisterForm extends Component {

    state = {
        register: false,
        pass1: '',
        pass2: '',
        email: '',
        errors: {
            email: false,
            pass1: false,
            pass2: false
        }
    }

    messages = {
        pass_incorrect: "nieprawidłowe hasło",
        email_incorrect: "nieprawidłowy adres email"
    }

    formValidation = () => {
        let email = false;
        let pass1 = false;
        let pass2 = false;
        let correct = false

        if (this.state.pass1 === this.state.pass2 &&
            this.state.pass1.length >= 5 &&
            this.state.pass2.length >= 5) {
            pass1 = true;
            pass2 = true;
        }
        if (this.state.email.indexOf('@') !== -1) {
            email = true
        }
        if (email && pass1 && pass2) {
            correct = true
        }
        return ({email, pass2, pass1, correct})

    }

    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();

        const validation = this.formValidation();
        if (validation.correct) {
            this.setState({
                register: true,
                pass1: '',
                pass2: '',
                email: '',
                errors: {
                    email: false,
                    pass1: false,
                    pass2: false
                }
            })
        } else {
            this.setState({
                errors: {
                    email: !validation.email,
                    pass1: !validation.pass1,
                    pass2: !validation.pass2
                }
            })
        }
    }

    render() {
        return (
            <>
                <form id="login" noValidate onSubmit={this.handleSubmit}>
                    <h1>Załóż konto</h1>
                    <div className="decoration"/>

                    {/*<p>Email</p>*/}
                    <label htmlFor="email">
                        <input type="email"
                               name='email'
                               placeholder='podaj email'
                               value={this.state.email}
                               onChange={this.handleChange}/>
                    </label>
                    {this.state.errors.email ?
                        <span>{this.messages.email_incorrect}</span> : null}
                    {/*<p> Hasło </p>*/}
                    <label htmlFor="password">
                        <input type="password"
                               placeholder={'podaj hasło'}
                               value={this.state.pass1}
                               name={'pass1'}
                               onChange={this.handleChange}/>
                    </label>
                    {this.state.errors.pass1 ?
                        <span>{this.messages.pass_incorrect}</span> : null}
                    {/*<p>Powtórz hasło</p>*/}
                    <label htmlFor="password">
                        <input type="password"
                               placeholder={'powtórz hasło'}
                               value={this.state.pass2}
                               name={'pass2'}
                               onChange={this.handleChange}/>
                    </label>
                    {this.state.errors.pass2 ?
                        <span>{this.messages.pass_incorrect}</span> : null}
                    <br/>
                    <div className='buttons-container'>
                        <div type="submit" value='Zaloguj się'>zaloguj sie</div>
                        <label htmlFor="sumbmit"><input type="submit"
                                                        value='Załóż konto'/></label>
                    </div>
                </form>
                {this.state.register && <h3>Dziękujemy za założenie konta, teraz możesz się zalogować</h3>}
            </>);
    }
}

export default RegisterForm;