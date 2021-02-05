import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h3>404</h3>
      <p>Sorry, the link you have entered seem to be broken!</p>
      <Link to="/" className="btn">
        Visit Home Page
      </Link>
    </div>
  );
};

export default NotFound;
