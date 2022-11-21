import React from "react";
import InputElement from "../elements/InputElement";
import useUserHttp from "@hooks/queries/useUserQuery";
import { ListInterface } from "@interfaces/listInterface";
import { UserInterface } from "@interfaces/userInterface";

const LostIdComponent = () => {
  return (
    <React.Fragment>
      <div className="Container">
        <div>
          <h3 className="">본인 인증을 진행해 주세요.</h3>
          <span className="CodeCheck">
            <InputElement type="text" placeholder="휴대폰 번호 입력" />
            <button type="button" disabled>
              인증번호 <br />
              받기
            </button>
          </span>
          <InputElement type="text" placeholder="인증번호 입력(10분 안에)" />
        </div>
        <p className="alarm">
          아직 인증이
          <br />
          완료되지 않았습니다.
        </p>
      </div>
    </React.Fragment>
  );
};

export default LostIdComponent;
