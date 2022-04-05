import React from 'react';
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  console.log(playlists);

  const menuPrincipal = [
    { 
      Icon: HomeIcon,
      Title: "HOME",
    },
    { 
      Icon: SearchIcon,
      Title: "Search",
    },
    { 
      Icon: LibraryMusicIcon,
      Title: "Your Library",
    },
  ];

  return (
    <div className="sidebar">
        <img 
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" className="sidebar_logo"
        />
        {/* <SidebarOption Icon={HomeIcon} title="HOME"/>
        <SidebarOption Icon={SearchIcon} title="Search"/>
        <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/> */}
        {menuPrincipal.map((menPrincItem) => {

        const { Title, Icon } = menPrincItem;

        return (
          <SidebarOption 
            Icon={Icon}
            title={Title}
            key={Title}
          />
        )})}

        <br />
        <strong className="sidebar__title">PLAYLISTS</strong>
        <hr />

        {playlists?.map((playlistItem) => (
          <SidebarOption title={playlistItem.name} key={playlistItem.name} />
        ))}

    </div>
  )
};

export default Sidebar;