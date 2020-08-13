import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js"

const spotify = new SpotifyWebApi()

function App() {
  const [token, setToken] = useState(null)

 // run this on condition specified below
  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ""

    const _token = hash.acces_token


    if (_token) {
      setToken(_token)
      spotify.setAccessToken(_token)

      spotify.getMe().then(user => {
        console.log(user)
      })
    }

    console.log(" THIS IS MY TOKEN -->", token)
    // Condition  
  }, [])


  return (
    <div className="app">{ token ? <h1> I am logged in </h1>
         : (
          <Login />
        )
      }

      <Login />

    </div>
  );
}

export default App;
