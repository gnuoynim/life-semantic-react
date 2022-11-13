import React, { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useRecoilState } from "recoil";
import { countState, sampleState } from "@states/sampleState";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { modalState } from "@/states/modalState";
import TitleHeadComponent from "@/components/head/TitleHeadComponent";
import RangeComponent from "@/components/survey/todaySurvey/RangeComponent";
import RangeArrowComponent from "@/components/survey/todaySurvey/RangeArrowComponent ";
import $ from "jquery"; 
import ISISurveyComponent01 from "@/components/survey/surveylist/ISI/ISISurveyComponent01";
import ISISurveyComponent02 from "@/components/survey/surveylist/ISI/ISISurveyComponent02";


const ISI = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sample, setSample] = useRecoilState(sampleState);
  const [count, setCount] = useRecoilState(countState);
  const [modal, setModal] = useRecoilState(modalState);
  const [userListError, setUserListError] = useState(true);
  const increase = () => setCount(count + 1);
  const setTitle = () =>
    setSample({
      ...sample,
      title: String(document.querySelector("input")?.value),
    });
  const [step, setStep] = useState(1);
  if(step ===3){
    const inner = document.querySelector('.next');
   
  }
  const handleNextStep = () => {
    if (step !== 3) {
      setStep(step + 1);
    }
  };
  const handlePrevStep = () => {
    if (step !== 4) {
      setStep(step - 1);
    }
  };


  return (
    <div>
      <TitleHeadComponent name="수면(ISI)" />
      {/* <button type='button' onClick={() => setModal({...modal, show:true, title:'기본2'})}>버튼</button> */}
      <div className="tired painBox " id="ISI">
        <ISISurveyComponent01/>
        <ISISurveyComponent02/>
       
      </div>
      <div className="fixBtn">
        <button type="button" className="prev" onClick={handlePrevStep}>
          이전
        </button>
        <button type="button" className="next" onClick={handleNextStep}>
          다음
        </button>
        <div className="buttonSpace"></div>
      </div>
    </div>
  );
};

export default ISI;
