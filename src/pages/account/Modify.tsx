import React from "react";
import WebLayout from "@layouts/web/WebLayout";
import HeaderComponent from "@components/head/Header";
import {Link, useNavigate} from "react-router-dom";
import InputElement from "@components/elements/InputElement";

const Modify = () => {

  const navigate = useNavigate();

  const handleNavigate = (url: string) => {
    navigate(url);
  }

  return (
    <WebLayout>
      <HeaderComponent />
      <div className="account">
        <h2>내 정보 수정</h2>
        <div className="modifyInfomation">
          <p>
            개인정보를 수정하시려면
            <br /> 비밀번호를 입력하셔야 합니다.
            <span>
              회원님의 개인정보 보호를 위한
              <br /> 본인 확인 절차이오니,
              <br /> 회원 로그인 시 사용하시는 비밀번호를 입력해주세요.
            </span>
          </p>

          <div className="deletId">
            <span className="password">
              <label htmlFor="">비밀번호</label>
              <InputElement type="password" maxLength={16} />
            </span>
            <Link to="/password">비밀번호가 기억나지 않아요.</Link>
          </div>
          
        </div>
        <div className="buttonBox">
          <button type="button" className="prevButton" onClick={() => navigate(-1)}>취소</button>
          <button type="button" className="nextButton" onClick={event => handleNavigate("/myPage")}>확인</button>
        </div>
      </div>
    </WebLayout>
  );
};

export default Modify;
