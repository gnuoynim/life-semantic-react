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
import NCCNComponent01 from "@/components/survey/surveylist/nccn/NCCNComponent01";
import NCCNComponent02 from "@/components/survey/surveylist/nccn/NCCNComponent02";
import NCCNComponent03 from "@/components/survey/surveylist/nccn/NCCNComponent03";

const NCCN = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sample, setSample] = useRecoilState(sampleState);
  const [count, setCount] = useRecoilState(countState);
  const [modal, setModal] = useRecoilState(modalState);
  const [userListError, setUserListError] = useState(true);
  const increase = () => setCount(count + 1);
  const [step, setStep] = useState(1);
  const setTitle = () =>
    setSample({
      ...sample,
      title: String(document.querySelector("input")?.value),
    });

  useEffect(() => {
    const inner = document.querySelector(".next") as HTMLButtonElement;
    const text = document.querySelector(".explainText") as HTMLBodyElement;
    
    console.log(text);
    if (step === 3) {
      inner.innerText = "작성완료";
    } else if (step !== 3) {
      inner.innerText = "다음";
    }
    if (step === 1) {
      text.style.display = "block";
    } else if (step !== 1) {
      text.style.display = "none";
    }
  }, [step]);

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
      <TitleHeadComponent name="수면위생(NCCN)" />
      {/* <button type='button' onClick={() => setModal({...modal, show:true, title:'기본2'})}>버튼</button> */}
      <div className="tired painBox">
        <h2>시작전 설문 - 수면위생(NCCN)</h2>
        <div className="Step">
          <ul>
            <ProgressComponent active={step === 1} />
            <ProgressComponent active={step === 2} />
            <ProgressComponent active={step === 3} />
          </ul>
        </div>
        <p className="explainText">
          다음은 수면위생에 대한 질문입니다. <br />
          최근 1주일간의 수면위생에 해당되는 선지를 선택해주세요.
        </p>
        {step === 1 && <NCCNComponent01 />}
        {step === 2 && <NCCNComponent02 />}
        {step === 3 && <NCCNComponent03 />}
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

export default NCCN;
