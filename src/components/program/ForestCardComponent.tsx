import React from "react";
import { Link } from "react-router-dom";

const ForestCardComponent = () => {
  return (
    <React.Fragment>
      <div className="forestCard">
        <Link to={"/forestView"}>
          <p className="forestName">산음 치유의 숲</p>
          <span>
            경기도 양평군 단월면 윗고북길
            <br /> 33-39
          </span>
          <span>031-774-8133</span>
        </Link>
      </div>
      <div className="forestCard">
        <Link to={"/forestView"}>
          <p className="forestName">산음 치유의 숲</p>
          <span>
            경기도 양평군 단월면 윗고북길
            <br /> 33-39
          </span>
          <span>031-774-8133</span>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default ForestCardComponent;
