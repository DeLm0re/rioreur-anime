import React from 'react';

import BackgroundVideo from './backgroundVideo/BackgroundVideo';
import LoginForm from './loginForm/LoginForm';

const App: React.FC = () => {
    return (
        <>
            <LoginForm />
            <BackgroundVideo />
        </>
    );
};

export default App;
