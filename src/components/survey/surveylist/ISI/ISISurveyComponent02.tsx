import React, { useEffect, useState } from "react";
import InputElement from "@/components/elements/InputElement";
import useUserHttp from "@hooks/queries/useUserQuery";
import $ from "jquery";

const ISISurveyComponent02 = () => {
  return (
    <React.Fragment>
      <div className="surveyList">
        <p>
          3. 당신의 수면 문제가 당신의 삶의 질에 영향을 미치고 있다는 것을 남들이 얼마나 <span>알아챌 수 있다고 생각하십니까?</span>
        </p>
        <ul>
          <li className="surveyContent">
            <ul>
              <li>
                <InputElement
                  type="radio"
                  className="radioButton"
                  value="1"
                  name="qna4"
                />
                <label htmlFor="">전혀 알 수 없다</label>
              </li>
              <li>
                <InputElement
                  type="radio"
                  className="radioButton"
                  value="2"
                  name="qna4"
                />
                <label htmlFor="">간신히 알 수 있다</label>
              </li>
              <li>
                <InputElement
                  type="radio"
                  className="radioButton"
                  value="3"
                  name="qna4"
                />
                <label htmlFor="">어느 정도 알수 있다</label>
              </li>
              <li>
                <InputElement
                  type="radio"
                  className="radioButton"
                  value="4"
                  name="qna4"
                />
                <label htmlFor="">쉽게 알 수 있다</label>
              </li>
              <li>
                <InputElement
                  type="radio"
                  className="radioButton"
                  value="5"
                  name="qna4"
                />
                <label htmlFor="">매우 쉽게 알 수 있다</label>
              </li>
            </ul>
          </li>

        </ul>
      </div>
      <div className="surveyList">
        <p>
          4. 당신의 현재 수면 문제에 대하여 얼마나 걱정하고 고통 받으십니까?
        </p>
        <ul>
          <li className="surveyContent">
            <ul>
              <li>
                <InputElement
                  type="radio"
                  className="radioButton"
                  value="1"
                  name="qna5"
                />
                <label htmlFor="">전혀 걱정하지 않는다</label>
              </li>
              <li>
                <InputElement
                  type="radio"
                  className="radioButton"
                  value="2"
                  name="qna5"
                />
                <label htmlFor="">조금 걱정한다</label>
              </li>
              <li>
                <InputElement
                  type="radio"
                  className="radioButton"
                  value="3"
                  name="qna5"
                />
                <label htmlFor="">약간 걱정한다</label>
              </li>
              <li>
                <InputElement
                  type="radio"
                  className="radioButton"
                  value="4"
                  name="qna5"
                />
                <label htmlFor="">많이 걱정한다</label>
              </li>
              <li>
                <InputElement
                  type="radio"
                  className="radioButton"
                  value="5"
                  name="qna5"
                />
                <label htmlFor="">매우 많이 걱정한다</label>
              </li>
            </ul>
          </li>

        </ul>
      </div>
      <div className="surveyList">
        <p>
          5. 당신의 수면 문제가 일상 생활에 어느 정도 <span>방해</span>가 되십니까?
          (예: 낮 동안 피관함, 직장 또는 일상 생활 수행 능력, 집중력, 기억력, 기분 등)
        </p>
        <ul>
          <li className="surveyContent">
            <ul>
              <li>
                <InputElement
                  type="radio"
                  className="radioButton"
                  value="1"
                  name="qna6"
                />
                <label htmlFor="">전혀 방해되지 않는다</label>
              </li>
              <li>
                <InputElement
                  type="radio"
                  className="radioButton"
                  value="2"
                  name="qna6"
                />
                <label htmlFor="">조금 방해된다</label>
              </li>
              <li>
                <InputElement
                  type="radio"
                  className="radioButton"
                  value="3"
                  name="qna6"
                />
                <label htmlFor="">어느 정도 방해된다</label>
              </li>
              <li>
                <InputElement
                  type="radio"
                  className="radioButton"
                  value="4"
                  name="qna6"
                />
                <label htmlFor="">많이 방해된다</label>
              </li>
              <li>
                <InputElement
                  type="radio"
                  className="radioButton"
                  value="5"
                  name="qna6"
                />
                <label htmlFor="">무척 많이 방해된다</label>
              </li>
            </ul>
          </li>

        </ul>
      </div>
    </React.Fragment>
  );
};

export default ISISurveyComponent02;
