import React from "react";
import "../styles/Loading.css";
import { ClimbingBoxLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="loading-container">
      <ClimbingBoxLoader color="#ea560f" size="30" />
    </div>
  );
};

export default Loading;
