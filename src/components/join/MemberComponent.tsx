import React, { useState } from "react";
import { useEffect } from "react";
import MemberChk01 from "./member/MemberChk01";
import MemberChk02 from "./member/MemberChk02";
import MemberChk03 from "./member/MemberChk03";
import CircleComponent from "../CircleComponent";
import { ListInterface } from "@interfaces/listInterface";
import { UserInterface } from "@interfaces/userInterface";
import { Link, useLocation, useNavigate } from "react-router-dom";
import $ from "jquery";

const MemberComponent = ({ joinLevelStep }: { joinLevelStep: Function }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  useEffect(() => {
    const scrollHeight = $(".porgress").prop("scrollHeight");

    $(window).on("scroll", function () {
      const height = $(document).scrollTop();
      console.log(height);
      if (this.scrollY > 100) {
        $(".progressWrap").addClass("fixed");
      } else {
        $(".progressWrap").removeClass("fixed");
      }
    });
  }, []);

  const handleStep = (nextStep: number) => {
    console.log(nextStep);

    if (nextStep) setStep(nextStep);
    if (nextStep === 4) joinLevelStep();
  };

  return (
    <React.Fragment>
      <div className="progressWrap">
        <div className="progressBar step">
          <ul>
            <CircleComponent step="" active={step === 1} />
            <CircleComponent step="" active={step === 2} />
            <CircleComponent step="" active={step === 3} />
          </ul>
        </div>
      </div>

      <div className="Step"></div>

      <div className="member">
        <div className="">
          {step === 1 && <MemberChk01 nextStep={handleStep} />}
          {step === 2 && <MemberChk02 nextStep={handleStep} />}
          {step === 3 && <MemberChk03 nextStep={handleStep} />}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MemberComponent;
