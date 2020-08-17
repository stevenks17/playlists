import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js"
import Player from './Player'
import { useStateProviderValue} from './StateProvider'

const spotify = new SpotifyWebApi()

function App() {
  const [token, setToken] = useState(null)
  const [{ user }, dispatch] = useStateProviderValue()

 // run this on condition specified below
  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ""
    let _token = hash.acces_token

    if (_token) {
      setToken(_token)

      
      spotify.setAccessToken(_token)
      
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })
    }

    console.log(" THIS IS MY TOKEN -->", token)
    // Condition  
  }, [])

  console.log(user)

  return (
    <div className="app">{token ? <Player /> : <Login />}</div>
  )
}

export default App;
