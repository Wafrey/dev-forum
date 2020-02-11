import React from "react";
import loading from "./loading.gif";

export default () => {
  return (
    <div>
      <img
        src={loading}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="Loading..."
      ></img>
    </div>
  );
};
