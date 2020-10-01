import React from 'react';
import './Login.css';
import { loginUrl } from './spotify'


function Login() {
    return (
        <div className="login">       
            <img
                src={require('/Users/stevenkumarsingh/Development/projects/playlists/src/v3.png')}
                alt=""
            />
            <a href={loginUrl}> LOGIN WITH SPOTIFY </a>
        </div>
    )
}

export default Login
