import React, { useEffect, useState, useRef } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { HashLink as HLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn }) => {
  const sidenavRef = useRef();
  const [sidenavInstance, setSidenavInstance] = useState(null);

  useEffect(() => {
    setSidenavInstance(
      M.Sidenav.init(sidenavRef.current, {
        outDuration: 400,
      })
    );
  }, []);

  const links = isLoggedIn
    ? [
        { id: 1, Name: "Dashboard", to: "/dashboard" },
        { id: 3, Name: "Play", to: "/play" },
        { id: 4, Name: "Forum", to: "/forum" },
        { id: 5, Name: "Profile", to: "/profile" },
      ]
    : [
        { id: 1, Name: "Login", to: "/login" },
        { id: 2, Name: "Signup", to: "/signup" },
      ];

  const handleSideNavClick = () => {
    sidenavInstance.close();
  };

  return (
    <div className="navbar">
      <div className="navbar-fixed  ">
        <nav className="nav-wrapper z-depth-0 teal nav_img">
          <div className="container">
            <a href="#" data-target="mobile-nav" className="sidenav-trigger">
              <i className="material-icons" style={{ color: "#C33427" }}>
                menu
              </i>
            </a>
            <Link to="/" class="brand-logo left">
              <span style={{ color: "#c33427" }}>Byte</span>Space
            </Link>
            <div
              className="hide-on-large-only black-text "
              style={{
                position: "relative",
                left: -25,
                fontSize: 20,
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "#c33427" }}>Byte</span>Space
            </div>
            <ul className="hide-on-med-and-down right">
              {links.map((link) => (
                <li key={link.id}>
                  <Link className="black-text " to={link.to}>
                    {link.Name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <ul
        className="sidenav"
        id="mobile-nav"
        ref={sidenavRef}
        style={{ paddingTop: "25vh" }}
      >
        {links.map((link) => (
          <li key={link.id} onClick={handleSideNavClick}>
            <HLink
              className="black-text"
              style={{ textAlign: "center" }}
              to={link.to}
            >
              {link.Name}
            </HLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
