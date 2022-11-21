import React from "react";

import InputElement from "../elements/InputElement";
import useUserHttp from "@hooks/queries/useUserQuery";
import { ListInterface } from "@interfaces/listInterface";
import { UserInterface } from "@interfaces/userInterface";
import { Link, useLocation, useNavigate } from "react-router-dom";

const JoinCompleteComponent = () => {
  return (
    <React.Fragment>
      <div className="complete">
        <h2>탈퇴 완료됐습니다.</h2>
        <img src="images/big-check.svg" />
      </div>
      <div className="buttonFix">
        <button type="button" className="button active" >
          홈 화면으로 돌아가기
        </button>
        <button type="button" className="button" >
          이전 화면으로 돌아가기
        </button>
      </div>
    </React.Fragment>
  );
};

export default JoinCompleteComponent;