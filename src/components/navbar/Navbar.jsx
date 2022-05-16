import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";

import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <a href="/">
            <h2>ExpressMe</h2>
          </a>
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <Button type="button" startIcon={<GitHubIcon />}>
          <span>Access with Github</span>
        </Button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <Button type="button" startIcon={<GitHubIcon />}>
                <span>Login</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
