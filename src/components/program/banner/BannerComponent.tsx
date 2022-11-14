import React from "react";
import { Link } from "react-router-dom";
const BannerComponent = () => {
  return (
    <React.Fragment>
      <div className="mainBanner">
        <img src="images/mountin.svg"/>
        <Link to='/forest'>
          산림치유 숲<br/>
          알아보기 {'>'}
        </Link>
      </div>
    </React.Fragment>
  );
};

export default BannerComponent;
