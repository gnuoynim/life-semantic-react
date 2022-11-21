import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import TitleHeadComponent from "@/components/head/TitleHeadComponent";
import CircleComponent from "@/components/CircleComponent";
import ModifyCheck01 from "@/components/join/member/ModifyCheck01";
import ModifyCheck02 from "@/components/join/member/ModifyCheck02";
import ModifyCheck03 from "@/components/join/member/ModifyCheck03";
import { countState, sampleState } from "@states/sampleState";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { surveyState } from "@/states/surveyState";
import { modalState } from "@/states/modalState";
import ToastPopup from "@/components/modal/ToastPopup";
import ModalComponent from "@/components/modal/ModalComponent";
import $ from "jquery";


const JoinModify = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [modal, setModal] = useRecoilState(modalState);
  const [sample, setSample] = useRecoilState(sampleState);
  const [count, setCount] = useRecoilState(countState);
  const [step, setStep] = useState(1);
  const [toast, setToast] = useState(false);
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

  const handleChange = () => {
    setModal({
      ...modal,
      show: true,
      title: "",
      cancelShow: true,
      content: (
        <div>
          작성을 중단하시겠습니까? <br />
          중단하신 내용은<br/>
          저장되지 않습니다.
        </div>
      ),
      confirmText: "아니요",
      cancelText: "네",
    });
  };
  const handleChange01 = () => {
    setModal({
      ...modal,
      show: true,
      title: "",
      cancelShow: false,
      content: (
        <div>
          입력하지 않은 <br />
          항목이 있습니다.
        </div>
      ),
      confirmText: "확인",
    });
  };

  const handlePopup = () => {
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 3000);
  };

  return (
    <React.Fragment>
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
        {step === 2 && <ModifyCheck02 nextStep={handleNextStep} />}
        {step === 3 && <ModifyCheck03 />}
        <div className="fixBtn ">
          <button type="button" className="prev" onClick={handlePrevStep}>
            이전
          </button>
          <button type="button" className="next" onClick={handleNextStep}>
            수정
          </button>
        </div>
      </div>
      <ToastPopup content={"수정되었습니다."} show={toast} />
      <ModalComponent id="flexModal" />
    </React.Fragment>
  );
};

export default JoinModify;
