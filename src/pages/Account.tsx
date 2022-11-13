import React, { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import WebLayout from "@layouts/web/WebLayout";
import HeaderComponent from "@/components/head/Header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { countState, sampleState } from "@states/sampleState";
import { surveyState } from "@/states/surveyState";


const Account = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sample, setSample] = useRecoilState(sampleState);
  const [survey, setSurvey] = useRecoilState(surveyState);
  const [count, setCount] = useRecoilState(countState);

  const [userListError, setUserListError] = useState(true);
  const [step, setStep] = useState(1);
  const increase = () => setCount(count + 1);

  return (
    <WebLayout>
      <HeaderComponent />
      <div className="account">
        <h2>계정관리</h2>
        <div className="">
          <Link to={""}>내 정보 수정하기</Link>
          <div className="accountBox">
            <div>
              <span>현재 계정</span>
              <span>dhay123</span>
            </div>
            <p>
              <span>{""}</span>님, 환영합니다.
            </p>
          </div>
        </div>
        <div className="grayButton">
          <button type="button">회원탈퇴</button>
          <button type="button">로그아웃</button>
        </div>
      </div>
    </WebLayout>
  );
};

export default Account;
