import React from 'react';
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from "./SongRow";


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

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle"/>
          <FavoriteIcon fontSize="Large"/>
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map(items => (
          <SongRow track={items.track} />
        ))}
      </div>

    </div>
  )
};

export default Body;