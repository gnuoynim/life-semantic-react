import React from "react";
import InputElement from "../../elements/InputElement";
import useUserHttp from "@hooks/queries/useUserQuery";
import { ListInterface } from "@interfaces/listInterface";
import { UserInterface } from "@interfaces/userInterface";
import { Link, useLocation, useNavigate } from "react-router-dom";

const MemberChk03 = ({ nextStep }: { nextStep: Function }) => {
  const handleFocusBtn = (event: React.MouseEvent<HTMLButtonElement>) => {    
    const target = event.target;
    const cancer = document.getElementById("cancer") as HTMLInputElement;
    const cancer_start = document.getElementById(
      "cancer_start"
    ) as HTMLInputElement;
    const cancer_end = document.getElementById(
      "cancer_end"
    ) as HTMLInputElement;
    const treatmentType = document.querySelectorAll<HTMLInputElement>('.treatment-type input:checked');


    if (!cancer.value) {
      cancer.focus();
      return false;
    }
    if (!cancer_start.value) {
      cancer_start.focus();
      return false;
    }
    if (!cancer_end.value) {
      cancer_end.focus();
      return false;
    }
    if (!treatmentType.length) {
      // surgery.focus();
      return false;
    }
    
    console.log(444);
    nextStep(4);
  };

  return (
    <React.Fragment>
      <p className="title">암 건강정보 입력</p>
      <div className="MemberChk MemberChk02">
        <label>
          <span>나이</span>
        </label>
        <label>
          <span>암 종(진단명)</span>
        </label>
        <InputElement type="text" placeholder="암 종 선택" id="cancer" />
        <label>
          <span>진단시기</span>
        </label>
        <InputElement
          type="text"
          placeholder="예) 2015년 01월"
          id="cancer_start"
        />
        <label>
          <span>치료종료 시기</span>
        </label>
        <InputElement
          type="text"
          placeholder="예) 2015년 01월"
          id="cancer_end"
        />
        <label>
          <span>치료유형(중복선택 가능)</span>
        </label>
        <div className="chk_list treatment-type">
          <ul>
            <li>
              <InputElement type="checkbox" id="surgery" className="check02" />
              <label>수술</label>
            </li>
            <li>
              <InputElement
                type="checkbox"
                id="cancer_treatment"
                className="check02"
              />
              <label>항암치료</label>
            </li>
            <li>
              <InputElement
                type="checkbox"
                id="radiation_treatment"
                className="check02"
              />
              <label>방사선치료</label>
            </li>
            <li>
              <InputElement
                type="checkbox"
                id="hormone_treatment"
                className="check02"
              />
              <label>호르몬치료</label>
            </li>
            <li>
              <InputElement
                type="checkbox"
                id="etc_treatment"
                className="check02"
              />
              <label>기타</label>
            </li>
          </ul>
          <InputElement
            type="text"
            placeholder="구체적으로 입력"
            id="detail_treatment"
          />
        </div>
        <label>
          <span>현재 건강상태</span>
        </label>
        <div className="radioCheck">
          <ul>
            <li>
              <InputElement
                type="radio"
                value="매우 건강하지 않다."
                name="chk_info"
              />
              <label>매우 건강하지 않다.</label>
            </li>
            <li>
              <InputElement
                type="radio"
                value="건강하지 않다."
                name="chk_info"
              />
              <label>건강하지 않다.</label>
            </li>
            <li>
              <InputElement type="radio" value="건강하다." name="chk_info" />
              <label>건강하다.</label>
            </li>
            <li>
              <InputElement
                type="radio"
                value="매우 건강하다."
                name="chk_info"
              />
              <label>매우 건강하다.</label>
            </li>
          </ul>
        </div>
        <label>
          <span>암 종(진단명)</span>
        </label>
        <InputElement
          type="text"
          placeholder="구체적으로 입력"
          id="cancer_type"
        />
        <label>
          <span>진단시기</span>
        </label>
        <InputElement
          type="text"
          placeholder="예) 2015년 01월"
          id="cancer_type_start"
        />
        <label>
          <span>치료종료 시기</span>
        </label>
        <InputElement
          type="text"
          placeholder="예) 2015년 01월"
          id="cancer_type_end"
        />
        <label className="labelType">
          <span> 암 이외의 진단받고 치료 중인 질환</span>
          (해당질환 모두 선택)
        </label>
        <div className="chk_list disease">
          <ul>
            <li>
              <InputElement type="checkbox" value="" className="" />
              <label>없음</label>
            </li>
            <li>
              <InputElement type="checkbox" value="고혈압" />
              <label>고혈압</label>
            </li>
            <li>
              <InputElement type="checkbox" value="당뇨병" />
              <label>당뇨병</label>
            </li>
            <li>
              <InputElement type="checkbox" value="뇌혈관질환" />
              <label>뇌혈관질환</label>
            </li>
            <li>
              <InputElement type="checkbox" value="호흡기질환" />
              <label>호흡기질환</label>
            </li>
            <li>
              <InputElement type="checkbox" value="심장질환" />
              <label>심장질환</label>
            </li>
            <li>
              <InputElement type="checkbox" value="우울증" />
              <label>우울증</label>
            </li>
            <li>
              <InputElement type="checkbox" value="관련 질환" />
              <label>관련 질환</label>
            </li>
            <li>
              <InputElement type="checkbox" value="기타" />
              <label>기타</label>
            </li>
          </ul>
          <InputElement type="text" placeholder="직접 작성" />
        </div>
      </div>
      <div className="fixBtn ">
        <button type="button" className="prev">
          이전
        </button>
        <button type="button" className="next" onClick={handleFocusBtn}>
          다음
        </button>
      </div>
    </React.Fragment>
  );
};

export default MemberChk03;
