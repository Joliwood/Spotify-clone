import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid, Slider } from '@mui/material';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Footer() {
  return (
    <div className="footer">
        <div className="footer__left">
          <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Lagoon_the_rapper_%28Rapper_%29sketchpad_Ep_Album_cover.jpg/600px-Lagoon_the_rapper_%28Rapper_%29sketchpad_Ep_Album_cover.jpg?20200730194912" 
          className="footer__albumPicture"
          alt="aie"
          />
          <div className="footer__songInfo">
            <h4>Yeah</h4>
            <p>ok bro</p>
          </div>
          <FavoriteBorderIcon className="footer__icon footer__iconDesactivated" />
          <FavoriteIcon className="footer__icon footer__iconActivated" />
        </div>
        <div className="footer__center">
          <ShuffleIcon className="footer__green" />
          <SkipPreviousIcon className="footer__icon" /> 
          <PlayCircleOutlineIcon fontSize="large" className="footer__icon" /> 
          <SkipNextIcon className="footer__icon" />
          <RepeatIcon className="footer__icon" />
        </div>
        <div className="footer__right">
          <Grid container spacing={2}>
            <Grid item>
              <DisplaySettingsIcon className="footer__icon" />  
            </Grid> 
            <Grid item>
              <VolumeDownIcon className="footer__icon" />
            </Grid> 
            <Grid item xs>
              <Slider />
            </Grid>
          </Grid>
        </div>
    </div>
  )
};

export default Footer;