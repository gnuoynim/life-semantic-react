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
import ToastPopup from "@/components/modal/ToastPopup";
import TiredSurveyComponent01 from "@/components/survey/surveylist/tired/TiredSurveyComponent01";
import TiredSurveyComponent02 from "@/components/survey/surveylist/tired/TiredSurveyComponent02";
import TiredSurveyComponent03 from "@/components/survey/surveylist/tired/TiredSurveyComponent03"; 


const Tired = () => {
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
  const handlePopup = () => {
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 2000);
  };

  useEffect(() => {
    const scrollHeight = $(".Step").prop("scrollHeight");
    console.log(scrollHeight);

    $(window).on("scroll", function () {
      const height = $(document).scrollTop();
      console.log(height);
      if (this.scrollY > 300) {
        $(".Step").addClass("fixed");
      } else {
        $(".Step").removeClass("fixed");
      }

    });
  }, []);


  return (
    <div>
      <TitleHeadComponent name="피로" />
      {/* <button type='button' onClick={() => setModal({...modal, show:true, title:'기본2'})}>버튼</button> */}
      <div className="tired painBox">
        
        <div className="Step">
          <ul>
            <ProgressComponent active={step === 1} />
            <ProgressComponent active={step === 2} />
            <ProgressComponent active={step === 3} />
          </ul>
        </div>

        {step === 1 && <TiredSurveyComponent01 />}
        {step === 2 && <TiredSurveyComponent02 />}
        {step === 3 && <TiredSurveyComponent03 />}

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
      <ToastPopup text="이번페이지는 설문을 완료하여주세요." show={toast} />
      <ToastPopup
        text="완료하시면 수정이 불가합니다. 내용을 확인해주세요."
        show={toast}
      />
    </div>
  );
};

export default Tired;
