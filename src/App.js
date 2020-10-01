import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js"
import Player from './Player'
import { useStateProviderValue} from './StateProvider'

const s = new SpotifyWebApi()

function App() {
  const [{ token }, dispatch] = useStateProviderValue()

 // run this on condition specified below
  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ""
    let _token = hash.access_token

    if (_token) {
      s.setAccessToken(_token)

      dispatch ({
        type: 'SET_TOKEN',
        token: _token,
      })

      
      
      s.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user,
        })
      })
    }

  }, [token, dispatch])



  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={s} />}
    </div>
  );
}


export default App;
