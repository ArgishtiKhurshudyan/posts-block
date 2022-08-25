import React from 'react';
import "./navbar.scss"
import LightModeIcon from '@mui/icons-material/LightMode';

const Navbar = ({darkMode, setDarkMode}) => {
  return (
    <div className="navbar-container">
      <div className="dark-mode" style={!darkMode ? {color: "#cb5f5f"} : {color: "white"}}
           onClick={() => setDarkMode(!darkMode)}><LightModeIcon/>{darkMode ? "Light mode" : "Dark mode"}</div>
    </div>
  );
};

export default Navbar;