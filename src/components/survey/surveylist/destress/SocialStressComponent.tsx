import React from "react";
import InputElement from "@/components/elements/InputElement";
import useUserHttp from "@hooks/queries/useUserQuery";
import { ListInterface } from "@interfaces/listInterface";
import { UserInterface } from "@interfaces/userInterface";

const SocialStressComponent = () => {
  return (
    <React.Fragment>
      <div className="checkList">
      <span>정서 문제(9)</span>
          <ul>
            <li>
              <InputElement type="checkbox" id="" className="check02" />
              <label>걱정 또는 불안</label>
            </li>
            <li>
              <InputElement type="checkbox" id="" className="check02" />
              <label>슬픔 또는 우울감</label>
            </li>
            <li>
              <InputElement type="checkbox" id="" className="check02" />
              <label>흥미 또는 즐거움 감소</label>
            </li>
            <li>
              <InputElement type="checkbox" id="" className="check02" />
              <label>비애감 또는 상실감</label>
            </li>
            <li>
              <InputElement type="checkbox" id="" className="check02" />
              <label>공포</label>
            </li>
            <li>
              <InputElement type="checkbox" id="" className="check02" />
              <label>외로움</label>
            </li>
            <li>
              <InputElement type="checkbox" id="" className="check02" />
              <label>분노</label>
            </li>
            <li>
              <InputElement type="checkbox" id="" className="check02" />
              <label>외모 변화</label>
            </li>
            <li>
              <InputElement type="checkbox" id="" className="check02" />
              <label>버거움 또는 무가치함 </label>
            </li>
          </ul>
          <span>사회관계 문제(6)</span>
          <ul>
            <li>
              <InputElement type="checkbox" id="" className="check02" />
              <label>배우자와의 관계</label>
            </li>
            <li>
              <InputElement type="checkbox" id="" className="check02" />
              <label>자녀와의 관계</label>
            </li>
            <li>
              <InputElement type="checkbox" id="" className="check02" />
              <label>가족과의 관계</label>
            </li>
            <li>
              <InputElement type="checkbox" id="" className="check02" />
              <label>친구 또는 동료와의 관계</label>
            </li>
            <li>
              <InputElement type="checkbox" id="" className="check02" />
              <label>의료진과의 관계</label>
            </li>
            <li>
              <InputElement type="checkbox" id="" className="check02" />
              <label>양육 능력</label>
            </li>
          </ul>

        </div>
    </React.Fragment>
  );
};

export default SocialStressComponent;
