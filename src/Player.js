import React from 'react';
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body />
    </div>
      <Footer spotify={spotify}/>
      {/* Pourquoi on rajoute ici déjà le spotify = spotify moustache ? */}
    </div>
  )
};

export default Player;