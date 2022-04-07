import React from 'react';
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify}/>

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="Album picture"/>
        <div className="body__infoText">
          <strong>PLAYLIST PUBLIQUE</strong>
          <h2>Découvertes de la semaine</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body_songs">
        pleins de trucs
      </div>

    </div>
  )
};

export default Body;