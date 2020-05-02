import React, { useState, useCallback, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

import './LoginForm.scss';

import logo from '../../images/logo.png';
import okCheck from '../../images/okCheck.png';
import koCheck from '../../images/koCheck.png';

const LoginForm: React.FC = () => {
    const [usernameValue, setUsernameValue] = useState<string>('');
    const [passwordValue, setPasswordValue] = useState<string>('');
    const [usernameCheck, setUsernameCheck] = useState<string>(koCheck);
    const [passwordCheck, setPasswordCheck] = useState<string>(koCheck);
    const [badCredentials, setBadCredentials] = useState<boolean>(false);

    const handleChangeUsername = useCallback((event) => {
        setUsernameValue(event.target.value);
    }, []);

    const handleChangePassword = useCallback((event) => {
        setPasswordValue(event.target.value);
    }, []);

    const handleSubmit = useCallback(() => {
        // TODO Check user credentials
        // ---------------------------
        console.log(usernameValue);
        console.log(passwordValue);
        setBadCredentials(!badCredentials);
        // ---------------------------
    }, [usernameValue, passwordValue, badCredentials]);

    useEffect(() => {
        usernameValue !== '' ? setUsernameCheck(okCheck) : setUsernameCheck(koCheck);
        passwordValue !== '' ? setPasswordCheck(okCheck) : setPasswordCheck(koCheck);
    }, [usernameValue, passwordValue]);

    return (
        <Fade bottom delay={100} duration={2000}>
            <div className="loginFormContainer">
                <form className="loginForm">
                    <div className="loginLogoContainer">
                        <img className="loginLogo" src={logo} alt="LOGO" />
                    </div>
                    <p className="loginLabel">Enter your username :</p>
                    <div className="loginSecuredInput">
                        <input className="loginInput" type="text" name="username" placeholder="Username ..." value={usernameValue} onChange={handleChangeUsername}/>
                        <img className="loginCheck" src={usernameCheck} alt="KO" />
                    </div>
                    <p className="loginLabel">Enter your password :</p>
                    <div className="loginSecuredInput">
                        <input className="loginInput" type="password" name="password" placeholder="Password ..." value={passwordValue} onChange={handleChangePassword}/>
                        <img className="loginCheck" src={passwordCheck} alt="KO" />
                    </div>
                    <div className="loginSubmitContainer">
                        <input className="loginSubmit" type="button" value="Sign in" onClick={handleSubmit} />
                    </div>
                    {badCredentials && (<span className="badCredentials">Bad user credentials.</span>)}
                </form>
            </div>
        </Fade>
    );
};

export default LoginForm;
