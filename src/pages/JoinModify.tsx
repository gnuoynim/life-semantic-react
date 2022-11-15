import React, { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useRecoilState } from "recoil";
import TitleHeadComponent from "@/components/head/TitleHeadComponent";
import CircleComponent from "@/components/CircleComponent";
import ModifyCheck01 from "@/components/join/member/ModifyCheck01";
import ModifyCheck02 from "@/components/join/member/ModifyCheck02";
import ModifyCheck03 from "@/components/join/member/ModifyCheck03";
import { countState, sampleState } from "@states/sampleState";
import WebLayout from "@layouts/web/WebLayout";
import InputElement from "@components/elements/InputElement";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { surveyState } from "@/states/surveyState";
import $ from "jquery";


const JoinModify = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const [sample, setSample] = useRecoilState(sampleState);
  const [survey, setSurvey] = useRecoilState(surveyState);
  const [count, setCount] = useRecoilState(countState);
  const [userListError, setUserListError] = useState(true);
  const [step, setStep] = useState(1);

  const increase = () => setCount(count + 1);
  const setTitle = () =>
    setSample({
      ...sample,
      title: String(document.querySelector("input")?.value),
    });

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
    const scrollHeight = $(".modifyProgress").prop("scrollHeight");


    $(window).on("scroll", function () {
      const height = $(document).scrollTop();
      console.log(height);
      if (this.scrollY > 100) {
        $(".modifyProgress").addClass("fixed");
      } else {
        $(".modifyProgress").removeClass("fixed");
      }
    });
  }, []);


  return (
    <WebLayout>
      {/* {menu === true ? <dd/> : null} */}
      <TitleHeadComponent name="회원정보 수정" />
      <div className="modify">
        <div className="modifyProgress">
          <ul className="Step">
            <CircleComponent step="1" active={step >= 1} />
            <CircleComponent step="2" active={step >= 2} />
            <CircleComponent step="3" active={step >= 3} />
          </ul>
        </div>

        {step === 1 && <ModifyCheck01 />}
        {step === 2 && <ModifyCheck02 />}
        {step === 3 && <ModifyCheck03 />}

        <div className="fixBtn ">
          <button type="button" className="prev" onClick={handlePrevStep}>
            이전
          </button>
          <button type="button" className="next" onClick={handleNextStep}>
            다음
          </button>
        </div>
      </div>
    </WebLayout>
  );
};

export default JoinModify;
