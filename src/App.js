import React, { useEffect, useState } from 'react';
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player.js";
import { useDataLayerValue } from './DataLayer.js';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();
  
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    // Aller voir l'explication environ 1h08 (ligne du bas)
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {

        dispatch({
          type: "SET_USER",
          user: user,
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }
  }, []);

  return (
    // Tout sera fait en BEM dans ce projet alors attention !
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}

    </div>
  )
}

export default App;