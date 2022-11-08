import React from "react";
import InputElement from "@/components/elements/InputElement";
import useUserHttp from "@hooks/queries/useUserQuery";
import { ListInterface } from "@interfaces/listInterface";
import { UserInterface } from "@interfaces/userInterface";

const ReligionStressComponent = () => {
  return (
    <React.Fragment>
      <div className="checkList">
        <p>
          지난 일주일 동안 염려되었던 항목이 있습니까?
          <strong>(해당되는 곳에 모두 체크하세요.)</strong>
        </p>
        <span>실생활 문제()</span>
        <ul>
          <li>
            <InputElement type="checkbox" id="" className="check02" />
            <label>자신 돌보기</label>
          </li>
          <li>
            <InputElement type="checkbox" id="" className="check02" />
            <label>타인 돌보기</label>
          </li>
          <li>
            <InputElement type="checkbox" id="" className="check02" />
            <label>직장</label>
          </li>
          <li>
            <InputElement type="checkbox" id="" className="check02" />
            <label>학교</label>
          </li>
          <li>
            <InputElement type="checkbox" id="" className="check02" />
            <label>주택</label>
          </li>
          <li>
            <InputElement type="checkbox" id="" className="check02" />
            <label>금융</label>
          </li>
          <li>
            <InputElement type="checkbox" id="" className="check02" />
            <label>보험</label>
          </li>
          <li>
            <InputElement type="checkbox" id="" className="check02" />
            <label>교통</label>
          </li>
          <li>
            <InputElement type="checkbox" id="" className="check02" />
            <label>육아</label>
          </li>
          <li>
            <InputElement type="checkbox" id="" className="check02" />
            <label>충분한 음식 섭취</label>
          </li>
          <li>
            <InputElement type="checkbox" id="" className="check02" />
            <label>약 구하기</label>
          </li>
          <li>
            <InputElement type="checkbox" id="" className="check02" />
            <label>치료 결정</label>
          </li>
        </ul>
        <span>영성/종교 문제(9)</span>
        <ul>
          <li>
            <InputElement type="checkbox" id="" className="check02" />
            <label>삶의 의미 또는 목적</label>
          </li>
          <li>
            <InputElement type="checkbox" id="" className="check02" />
            <label>믿음이나 신념의 변화</label>
          </li>
          <li>
            <InputElement type="checkbox" id="" className="check02" />
            <label>죽음, 임종과정, 사후세계</label>
          </li>
          <li>
            <InputElement type="checkbox" id="" className="check02" />
            <label>신념과 항암치료 사이의 갈등</label>
          </li>
          <li>
            <InputElement type="checkbox" id="" className="check02" />
            <label>신성한 존재와의 관계</label>
          </li>
          <li>
            <InputElement type="checkbox" id="" className="check02" />
            <label>의식 또는 식사의 필요성 </label>
          </li>
          <li>
            <textarea maxLength={500} placeholder="그 외의 염려되는 문제들이 있다면, 작성해주세요."
            ></textarea>
          </li>
        </ul>
      </div> 
    </React.Fragment>
  );
};

export default ReligionStressComponent;
