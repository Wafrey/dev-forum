import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css'

export default () => {
  return (
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <div></div>
          <h1>404</h1>
        </div>
        <h2>Profile not found</h2>
        <p>
          The profile you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <Link to={"/"}>home page</Link>
      </div>
    </div>
  );
};
