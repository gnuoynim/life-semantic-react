import React, { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useRecoilState } from "recoil";
import TitleHeadComponent from "@/components/head/TitleHeadComponent";
import { countState, sampleState } from "@states/sampleState";
import WebLayout from "@layouts/web/WebLayout";
import InputElement from "@components/elements/InputElement";
import { Link, useLocation, useNavigate } from "react-router-dom";

const IndexPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sample, setSample] = useRecoilState(sampleState);
  const [count, setCount] = useRecoilState(countState);
  const [userListError, setUserListError] = useState(true);
  const increase = () => setCount(count + 1);
  const setTitle = () =>
    setSample({
      ...sample,
      title: String(document.querySelector("input")?.value),
    });

  return (
    <WebLayout>
      <div className="Login">
        <TitleHeadComponent name="아이디 찾기" />
        <div className="Container">
          <div className="LostId">
            <h3>회원 정보를 입력해 주세요.</h3>
            <p>
              회원 가입시 입력했던 정보와
              <br />
              동일하게 입력해 주세요.
            </p>
            <div className="loginInput">
              <InputElement type="text" placeholder="이름 입력" />
              <InputElement type="number" placeholder="전화번호(숫자만 입력)" />
            </div>
          </div>
        </div>
        <button className="BtnActive" type="submit">
          아이디 찾기
        </button>
      </div>
    </WebLayout>
  );
};

export default IndexPage;
