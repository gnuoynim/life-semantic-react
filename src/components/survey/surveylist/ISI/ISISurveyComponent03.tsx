import React, { useEffect, useState } from "react";
import InputElement from "@/components/elements/InputElement";
import useUserHttp from "@hooks/queries/useUserQuery";
import $ from "jquery";

const ISISurveyComponent03 = () => {
 


  return (
    <React.Fragment>
     
     <div className="surveyList">
      <ul>
        <li className="surveyContent">
          <p>11. (어떤 것을 할 때)집중할 수 있으십니까?</p>
          <ul>
            <li>
              <InputElement type='radio' className='radioButton' value='1' name='qna1'/>
              <label htmlFor="">전혀 그렇지 않다</label>
            </li>
            <li>
              <InputElement type='radio' className='radioButton' value='2' name='qna1'/>
              <label htmlFor="">그렇지 않다</label>
            </li>
            <li>
              <InputElement type='radio' className='radioButton' value='3' name='qna1'/>
              <label htmlFor="">그렇다</label>
            </li>
            <li>
              <InputElement type='radio' className='radioButton' value='4' name='qna1'/>
              <label htmlFor="">매우 그렇다</label>
            </li>
            
          </ul>
        </li>
        <li className="surveyContent">
          <p>12. (어떤 것을 할 때)주저하게 되거나 귀찮다고 느끼십니까?</p>
          <ul>
            <li>
              <InputElement type='radio' className='radioButton' value='1' name='qna2'/>
              <label htmlFor="">전혀 그렇지 않다</label>
            </li>
            <li>
              <InputElement type='radio' className='radioButton' value='2' name='qna2'/>
              <label htmlFor="">그렇지 않다</label>
            </li>
            <li>
              <InputElement type='radio' className='radioButton' value='3' name='qna2'/>
              <label htmlFor="">그렇다</label>
            </li>
            <li>
              <InputElement type='radio' className='radioButton' value='4' name='qna2'/>
              <label htmlFor="">매우 그렇다</label>
            </li>
            
          </ul>
        </li>
        <li className="surveyContent">
          <p>13. 기운이 다 빠진 느낌이 드십니까?</p>
          <ul>
            <li>
              <InputElement type='radio' className='radioButton' value='1' name='qna3'/>
              <label htmlFor="">전혀 그렇지 않다</label>
            </li>
            <li>
              <InputElement type='radio' className='radioButton' value='2' name='qna3'/>
              <label htmlFor="">그렇지 않다</label>
            </li>
            <li>
              <InputElement type='radio' className='radioButton' value='3' name='qna3'/>
              <label htmlFor="">그렇다</label>
            </li>
            <li>
              <InputElement type='radio' className='radioButton' value='4' name='qna4'/>
              <label htmlFor="">매우 그렇다</label>
            </li>
            
          </ul>
        </li>
        <li className="surveyContent">
          <p>14. 어떤 것을 하기 위해서 스스로 자신을 격려할 수 있습니까?</p>
          <ul>
            <li>
              <InputElement type='radio' className='radioButton' value='1' name='qna4'/>
              <label htmlFor="">전혀 그렇지 않다</label>
            </li>
            <li>
              <InputElement type='radio' className='radioButton' value='2' name='qna4'/>
              <label htmlFor="">그렇지 않다</label>
            </li>
            <li>
              <InputElement type='radio' className='radioButton' value='3' name='qna4'/>
              <label htmlFor="">그렇다</label>
            </li>
            <li>
              <InputElement type='radio' className='radioButton' value='4' name='qna4'/>
              <label htmlFor="">매우 그렇다</label>
            </li>
          </ul>
        </li>
        <li className="surveyContent">
          <p>15. 너무 피곤해서 무엇을 해야 할 지 잘 모르겠다고 느끼십니까?</p>
          <ul>
            <li>
              <InputElement type='radio' className='radioButton' value='1' name='qna4'/>
              <label htmlFor="">전혀 그렇지 않다</label>
            </li>
            <li>
              <InputElement type='radio' className='radioButton' value='2' name='qna4'/>
              <label htmlFor="">그렇지 않다</label>
            </li>
            <li>
              <InputElement type='radio' className='radioButton' value='3' name='qna4'/>
              <label htmlFor="">그렇다</label>
            </li>
            <li>
              <InputElement type='radio' className='radioButton' value='4' name='qna4'/>
              <label htmlFor="">매우 그렇다</label>
            </li>
          </ul>
        </li>
      </ul>
     </div>
    </React.Fragment>
  );
};

export default ISISurveyComponent03;
