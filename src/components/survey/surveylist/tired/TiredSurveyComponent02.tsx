import React, { useEffect, useState } from "react";
import InputElement from "@/components/elements/InputElement";
import useUserHttp from "@hooks/queries/useUserQuery";
import $ from "jquery";

const TiredSurveyComponent02 = () => {
 


  return (
    <React.Fragment>
     
     <div className="surveyList">
      <ul>
        <li className="surveyContent">
          <p>6. 쉽게 피곤해지십니까?</p>
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
          <p>7. 누워있고 싶은 마음이 드십니까?</p>
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
          <p>8. 기운이 다 빠진 느낌이 드십니까?</p>
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
          <p>9. (매사에) 주의력이 떨어졌다고 느끼십니까?</p>
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
          <p>10. 활력이 있습니까?</p>
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

export default TiredSurveyComponent02;