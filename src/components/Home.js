import React from "react";
import { Link } from "react-router-dom";
import landing from '../assests/landing.jpg'

const Home = () => {
  return (
    <div className="home white" style={{ backgroundColor: "grey", height: "90vh" }}>
      <div style={{ display: "flex" }}>
        <div className="landing white z-depth-4">
          <p>Your one stop destination for all things fun and educational</p>
          <br/>
          <Link to="/login" className="btn z-depth-0">
            Get Started
          </Link>
        </div>
        <img src={landing} style={{margin:'8em 0 0 0',height:'19em',width:'auto'}}/>
      </div>
    </div>
  );
};

export default Home;
