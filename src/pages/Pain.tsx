import React, { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useRecoilState } from "recoil";
import { countState, sampleState } from "@states/sampleState";
import ModalComponent from "@/components/modal/ModalComponent";
import ProgressComponent from "@/components/ProgressComponent";
import PainComponent from "@/components/survey/surveylist/PainComponent";
import MostPainListComponent from "@/components/survey/surveylist/MostPainListComponent";
import FrontPainComponent from "@/components/survey/surveylist/pain/FrontPainComponent";
import BackPainComponent from "@/components/survey/surveylist/pain/BackPainComponent";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { modalState } from "@/states/modalState";
import TitleHeadComponent from "@/components/head/TitleHeadComponent";
import $ from "jquery";


const Pain = () => {
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

  useEffect(() => {
    const inner = document.querySelector(".next") as HTMLButtonElement;
    if (step === 3) {
      inner.innerText = "작성완료";
    }else if(step !==3){
      inner.innerText = "다음";
    }
  }, [step]);

  useEffect(() => {
    const scHeight = $(".Step").prop("scrollHeight");
    console.log(scHeight);

    $(window).on("scroll", function () {
      var height = $(document).scrollTop();
      console.log(height);
      if (this.scrollY > 300) {
        $(".Step").addClass("fixed");
      } else {
        $(".Step").removeClass("fixed");
      }
    });
  }, []);

  
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
      <TitleHeadComponent name="통증" />
      {/* <button type='button' onClick={() => setModal({...modal, show:true, title:'기본2'})}>버튼</button> */}
      <div className="painBox">
        <h2>시작전 설문 - 통증</h2>
        <div className="Step">
          <ul>
            <ProgressComponent active={step === 1} />
            <ProgressComponent active={step === 2} />
            <ProgressComponent active={step === 3} />
          </ul>
        </div>
        {step === 3 ? <MostPainListComponent /> : <PainComponent step={step} />}
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

export default Pain;
