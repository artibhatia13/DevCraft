/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useRef } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { HashLink as HLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { currentUser } = useAuth();

  const sidenavRef = useRef();
  const [sidenavInstance, setSidenavInstance] = useState(null);

  useEffect(() => {
    setSidenavInstance(
      M.Sidenav.init(sidenavRef.current, {
        outDuration: 400,
      })
    );
  }, []);

  const links =
    currentUser !== null
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
        <nav className="nav-wrapper z-depth-3 white nav_img">
          <div className="container">
            <a href="#" data-target="mobile-nav" className="sidenav-trigger">
              <i className="material-icons" style={{ color: "#C33427" }}>
                menu
              </i>
            </a>
            <Link to="/" className="brand-logo hide-on-med-and-down">
              ByteSpace
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
