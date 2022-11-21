import React, { useEffect, useState } from "react";
import InputElement from "@/components/elements/InputElement";
import useUserHttp from "@hooks/queries/useUserQuery";
import RangeComponent from "../../todaySurvey/RangeComponent";
import RangeArrowComponent from "../../todaySurvey/RangeArrowComponent ";
import $ from "jquery";

const ISISurveyComponent01 = () => {
  return (
    <React.Fragment>
      <h2>시작전 설문 - 수면(ISI)</h2>

      <div className="surveyList isi">
        <p>
          1. 최근 2주동안에 당신의 불면증의<br/> <span>심한 정도</span>를 아래에
          표시하십시오?
        </p>
        <ul>
          <li className="surveyContent">
            <p>a.잠들기 어려움</p>
            <ul>
              <li>
                <InputElement
                  type="radio"
                  className="radioButton"
                  value="1"
                  name="qna1"
                />
                <label htmlFor="">전혀</label>
              </li>
              <li>
                <InputElement
                  type="radio"
                  className="radioButton"
                  value="2"
                  name="qna1"
                />
                <label htmlFor="">약간</label>
              </li>
              <li>
                <InputElement
                  type="radio"
                  className="radioButton"
                  value="3"
                  name="qna1"
                />
                <label htmlFor="">보통</label>
              </li>
              <li>
                <InputElement
                  type="radio"
                  className="radioButton"
                  value="4"
                  name="qna1"
                />
                <label htmlFor="">심한</label>
              </li>
              <li>
                <InputElement
                  type="radio"
                  className="radioButton"
                  value="5"
                  name="qna1"
                />
                <label htmlFor="">매우 심한</label>
              </li>
            </ul>
          </li>
          <li className="surveyContent">
            <p>b.수면 유지가 어려움(자주 깬)</p>
            <ul>
              <li>
                <InputElement
                  type="radio"
                  className="radioButton"
                  value="1"
                  name="qna2"
                />
                <label htmlFor="">전혀</label>
              </li>
              <li>
                <InputElement
                  type="radio"
                  className="radioButton"
                  value="2"
                  name="qna2"
                />
                <label htmlFor="">약간</label>
              </li>
              <li>
                <InputElement
                  type="radio"
                  className="radioButton"
                  value="3"
                  name="qna2"
                />
                <label htmlFor="">보통</label>
              </li>
              <li>
                <InputElement
                  type="radio"
                  className="radioButton"
                  value="4"
                  name="qna2"
                />
                <label htmlFor="">심한</label>
              </li>
              <li>
                <InputElement
                  type="radio"
                  className="radioButton"
                  value="5"
                  name="qna2"
                />
                <label htmlFor="">매우 심한</label>
              </li>
            </ul>
          </li>
          <li className="surveyContent">
            <p>c.새벽에 너무 일찍 잠에서 깸</p>
            <ul>
              <li>
                <InputElement
                  type="radio"
                  className="radioButton"
                  value="1"
                  name="qna3"
                />
                <label htmlFor="">전혀</label>
              </li>
              <li>
                <InputElement
                  type="radio"
                  className="radioButton"
                  value="2"
                  name="qna3"
                />
                <label htmlFor="">약간</label>
              </li>
              <li>
                <InputElement
                  type="radio"
                  className="radioButton"
                  value="3"
                  name="qna3"
                />
                <label htmlFor="">보통</label>
              </li>
              <li>
                <InputElement
                  type="radio"
                  className="radioButton"
                  value="4"
                  name="qna3"
                />
                <label htmlFor="">심한</label>
              </li>
              <li>
                <InputElement
                  type="radio"
                  className="radioButton"
                  value="5"
                  name="qna3"
                />
                <label htmlFor="">매우 심한</label>
              </li>
            </ul>
          </li>
        </ul>
        <p>
          2. 당신의 현재 수면 패턴에 얼마나 만족하십니까? 
          <p className="subTitle">
          (좌우로 <span>동그라미</span>를 움직여주세요.)
        </p>
        </p>

        <RangeComponent/>

      </div>
    </React.Fragment>
  );
};

export default ISISurveyComponent01;
