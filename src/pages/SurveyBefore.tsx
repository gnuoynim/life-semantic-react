import React, { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useRecoilState } from "recoil";
import { countState, sampleState } from "@states/sampleState";
import WebLayout from "@layouts/web/WebLayout";
import TitleHeadComponent from "@/components/head/TitleHeadComponent";
import InputElement from "@components/elements/InputElement";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SurveyBefore = () => {
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
      <TitleHeadComponent name="시작 전 설문" />
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
              <Link to="">디스트레스</Link>
            </li>
            <li>
              <Link to="">통증</Link>
            </li>
            <li>
              <Link to="">피로</Link>
            </li>
          </ul>
        </div>
      </div>
    </WebLayout>
  );
};

export default SurveyBefore;
