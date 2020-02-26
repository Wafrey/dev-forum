import React from "react";
import Loading from "react-loading";

const Spinner = ({ type, color }) => (
  <div className="align-self-center">
    <div>
      <Loading type={"spin"} color={"#"} height={"10%"} width={"10%"} />
    </div>
  </div>
);

export default Spinner;
