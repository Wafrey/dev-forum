import React from "react";
import Loading from "react-loading";
import "./Spinner.css";

const Spinner = ({ type, color }) => (
  <div className="spinner mb-5">
    <Loading type={"spin"} color={"#000"} height={60} width={110} />
  </div>
);

export default Spinner;
