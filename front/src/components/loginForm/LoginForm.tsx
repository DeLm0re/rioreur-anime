import React from 'react';

import './LoginForm.scss';

import logo from '../../images/logo.png';
import okCheck from '../../images/okCheck.png';
import koCheck from '../../images/koCheck.png';

const LoginForm: React.FC = () => {
    return (
        <div className="loginFormContainer">
            <form className="loginForm">
                <div className="loginLogoContainer">
                    <img className="loginLogo" src={logo} alt="LOGO" />
                </div>
                <p className="loginLabel">Enter your username :</p>
                <div className="loginSecuredInput">
                    <input className="loginInput" type="text" name="username" placeholder="Username ..." />
                    <img className="loginCheck" src={koCheck} alt="KO" />
                </div>
                <p className="loginLabel">Enter your password :</p>
                <div className="loginSecuredInput">
                    <input className="loginInput" type="password" name="password" placeholder="Password ..." />
                    <img className="loginCheck" src={koCheck} alt="KO" />
                </div>
                <div className="loginSubmitContainer">
                    <input className="loginSubmit" type="submit" value="Sign in" />
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
