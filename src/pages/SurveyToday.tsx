import React, { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useRecoilState } from "recoil";
import TitleHeadComponent from "@/components/head/TitleHeadComponent";
import { countState, sampleState } from "@states/sampleState";
import DateComponent from "@/components/survey/todaySurvey/DateComponent";
import WebLayout from "@layouts/web/WebLayout";
import InputElement from "@components/elements/InputElement";
import { Link, useLocation, useNavigate } from "react-router-dom";
import RangeComponent from "@/components/survey/todaySurvey/RangeComponent";
import RangeArrowComponent from "@/components/survey/todaySurvey/RangeArrowComponent ";


const SurveyToday = () => {
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
      <TitleHeadComponent name="일일 설문" />
      <div className="survey surveyToday">
        <div className="dDay">D+16</div>
        <DateComponent />
        <p>
          지난 24시간 동안의 피로를 나타내는 <br />
          숫자에 원을 놓아주세요.
        </p>
        <RangeComponent />
        <div>
          <RangeArrowComponent left="피로도 낮음" right="피로도 높음" />
        </div>
      </div>

      <button type="button" className="BtnActive02">
        저장
      </button>
    </WebLayout>
  );
};

export default SurveyToday;
