import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js"
import Player from './Player'
import { useStateProviderValue} from './StateProvider'

const spotify = new SpotifyWebApi()

function App() {
  const [{ token }, dispatch] = useStateProviderValue()

 // run this on condition specified below
  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ""
    let _token = hash.acces_token

    if (_token) {
      spotify.setAccessToken(_token)

      dispatch ({
        type: 'SET_TOKEN',
        token: _token,
      })

      
      
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user,
        })
      })
    }

  }, [])



  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
    </div>
  );
}


export default App;
