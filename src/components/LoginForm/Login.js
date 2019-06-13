import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <form id="login">
                <h1>Zaloguj się</h1>
                <div className="decoration"/>

                <p>Email</p>
                <input type="email" name='name' placeholder='podaj email'/>
                <p>Hasło</p>
                <input type="password"/>
                <p>Powtórz hasło</p>
                <input type="password"/>
                <br/>
                <div className='buttons-container'>
                    <input type="submit" value='Zaloguj się'/>
                    <input type="submit" value='Załóż konto'/>
                </div>
            </form>


        );
    }
}

export default Login;