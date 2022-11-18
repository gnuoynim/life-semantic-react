import React, { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useRecoilState } from "recoil";
import { countState, sampleState } from "@states/sampleState";
import ToastPopup from "@/components/modal/ToastPopup";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { modalState } from "@/states/modalState";
import TitleHeadComponent from "@/components/head/TitleHeadComponent";
import RangeComponent from "@/components/survey/todaySurvey/RangeComponent";
import RangeArrowComponent from "@/components/survey/todaySurvey/RangeArrowComponent ";
import $ from "jquery";
import ISISurveyComponent01 from "@/components/survey/surveylist/ISI/ISISurveyComponent01";
import ISISurveyComponent02 from "@/components/survey/surveylist/ISI/ISISurveyComponent02";
import ModalComponent from "@/components/modal/ModalComponent";

const ISI = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sample, setSample] = useRecoilState(sampleState);
  const [count, setCount] = useRecoilState(countState);
  const [modal, setModal] = useRecoilState(modalState);
  const [userListError, setUserListError] = useState(true);
  const [toast, setToast] = useState(false);
  const increase = () => setCount(count + 1);
  const setTitle = () =>
    setSample({
      ...sample,
      title: String(document.querySelector("input")?.value),
    });
  const [step, setStep] = useState(1);
  if (step === 3) {
    const inner = document.querySelector(".next");
  }

  const handleModal = () => {
    setModal({
      ...modal,
      show: true,
      title: "",
      cancelShow: false,
      content: (
        <div>
          수면<span>(ISI)</span> 설문을
          <br />
          완료하셨습니다.
        </div>
      ),
      confirmText: "확인",
    });
  };

  const handlePopup = () => {
    setToast(true);
    setTimeout(() =>{
      setToast(false);
    }, 3000)
  };

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
      <ModalComponent/>
      <TitleHeadComponent name="수면(ISI)" />
      {/* <button type='button' onClick={() => setModal({...modal, show:true, title:'기본2'})}>버튼</button> */}
      <div className="tired painBox " id="ISI">
        <ISISurveyComponent01 />
        <ISISurveyComponent02 />
      </div>
      <div className="fixBtn">
        <button type="button" className="prev" onClick={handlePrevStep}>
          이전
        </button>
        <button type="button" className="next" onClick={handleNextStep}>
          다음
        </button>
      </div>
    </div>
  );
};

export default ISI;
