import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js"
import Player from './Player'
import { useStateProviderValue} from './StateProvider'

const spotify = new SpotifyWebApi()

function App() {
  const [{ user, token }, dispatch] = useStateProviderValue()

 // run this on condition specified below
  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ""
    let _token = hash.acces_token

    if (_token) {
      dispatch ({
        type: 'SET_TOKEN',
        token: _token,
      })

      
      spotify.setAccessToken(_token)
      
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })
    }

    console.log(" THIS IS MY TOKEN -->", token)
  }, [])

  console.log(user)
  console.log(token)

  return (
    <div className="app">
      {token ? <Player /> : <Login />}
    </div>
  )
}

export default App;
