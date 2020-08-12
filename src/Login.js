import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="login">       
            <img
                src={require('/mnt/c/Development/Projects/playlists/src/Playlists.png')}
                alt=""
            />
            <button> Login with your spotify account </button>
        </div>
    )
}

export default Login
