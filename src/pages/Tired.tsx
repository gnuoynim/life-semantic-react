import React, { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useRecoilState } from "recoil";
import { countState, sampleState } from "@states/sampleState";
import ModalComponent from "@/components/modal/ModalComponent";
import ProgressComponent from "@/components/ProgressComponent";
import PainComponent from "@/components/survey/surveylist/PainComponent";
import TermsComponent from "@/components/join/TermsComponent";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { modalState } from "@/states/modalState";
import TitleHeadComponent from "@/components/head/TitleHeadComponent";
import $ from "jquery";
import TiredComponent from "@/components/survey/surveylist/TiredComponent";
const Tired = () => {
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
  useEffect(() => {
    $(window).on("scroll", function () {
      if((this).scrollY > 50){
        $('.fixBtn').addClass('fixed');
        
      }else{
      }
    });
  }, []);


  return (
    <div>
      <TitleHeadComponent name="피로" />
      {/* <button type='button' onClick={() => setModal({...modal, show:true, title:'기본2'})}>버튼</button> */}
      <div className="pain">
        <h2>시작전 설문 - 피로</h2>
        <p><strong>현재상태</strong>를 가장 적절하게 설명하고 있는 번호 하나 선택해주세요.</p>
        <p>각 질문에 대해 깊이 생각하기 보다는 <strong>첫 느낌을 기준으로</strong> 대답하여 주십시오.</p>
        <div className="Step">
          <ul>
            <ProgressComponent active={step === 1} />
            <ProgressComponent active={step === 2} />
            <ProgressComponent active={step === 3} />
          </ul>
        </div>

        {step === 1 && <TiredComponent />}

      </div>
      <div className="fixBtn">
        <button type="button" className="prev" onClick={handlePrevStep}>
          {" "}
          이전
        </button>
        <button type="button" className="next" onClick={handleNextStep}>
          {" "}
          다음
        </button>
      </div>
    </div>
  );
};

export default Tired;
