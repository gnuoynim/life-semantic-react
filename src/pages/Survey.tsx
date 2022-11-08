import React, { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useRecoilState } from "recoil";
import { countState, sampleState } from "@states/sampleState";
import WebLayout from "@layouts/web/WebLayout";
import TitleHeadComponent from "@/components/head/TitleHeadComponent";
import InputElement from "@components/elements/InputElement";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Survey = () => {
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
      <TitleHeadComponent name="설문 작성" />
      <div className="survey">
        <div className="surveyMain">
          <div className="surveyName">
            <p>굿바이 피로1기</p>
            <span>
              <img src="public/images/question.svg" alt="" />
            </span>
          </div>
          <ul>
            <li>
              <Link to="">시작전 설문(0/3)</Link>
            </li>
            <li>
              일일 설문
              <br />
              <span>
                <Link to="">(최근 5일 이내 미작성 2건)</Link>
              </span>
            </li>
            <li>
              <Link to="">종료후 설문(0/3)</Link>
            </li>
          </ul>
        </div>
      </div>
    </WebLayout>
  );
};

export default Survey;
