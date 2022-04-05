import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from "@material-ui/core";

function Header() {
  return <div className="header">
    <div className="header__left">
        <SearchIcon />
        <input
            placeholder="Search for Artists, Songs, or more..."
            type="text"
        />
    </div>
    <div className="header__right">
        <Avatar src="" alt="JWC" />
        <h4>Joliwood Boicalouuuuux</h4>
        
    </div>
  </div>
};

export default Header;