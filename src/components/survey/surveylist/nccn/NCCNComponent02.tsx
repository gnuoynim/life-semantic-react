import React, { useEffect, useState } from "react";
import InputElement from "@/components/elements/InputElement";
import useUserHttp from "@hooks/queries/useUserQuery";
import $ from "jquery";

const NCCNComponent02 = () => {
 


  return (
    <React.Fragment>
     
     <div className="surveyList">
      <ul>
        <li className="surveyContent">
          <p>7. 카페인 섭취를 제한하고 적어도 취침 4시간 전에는 카페인 섭취를 피한다.</p>
          <ul>
            <li>
              <InputElement type='radio' className='radioButton' value='1' name='qna7'/>
              <label htmlFor="">전혀 그렇지 않다</label>
            </li>
            <li>
              <InputElement type='radio' className='radioButton' value='2' name='qna7'/>
              <label htmlFor="">그렇지 않다</label>
            </li>
            <li>
              <InputElement type='radio' className='radioButton' value='3' name='qna7'/>
              <label htmlFor="">그렇다</label>
            </li>
            <li>
              <InputElement type='radio' className='radioButton' value='4' name='qna7'/>
              <label htmlFor="">매우 그렇다</label>
            </li>
            
          </ul>
        </li>
        <li className="surveyContent">
          <p>8. 수면 환경(어둡고 조용한 방, 쾌적한 온도)을 유지한다.</p>
          <ul>
            <li>
              <InputElement type='radio' className='radioButton' value='1' name='qna8'/>
              <label htmlFor="">전혀 그렇지 않다</label>
            </li>
            <li>
              <InputElement type='radio' className='radioButton' value='2' name='qna8'/>
              <label htmlFor="">그렇지 않다</label>
            </li>
            <li>
              <InputElement type='radio' className='radioButton' value='3' name='qna8'/>
              <label htmlFor="">그렇다</label>
            </li>
            <li>
              <InputElement type='radio' className='radioButton' value='4' name='qna8'/>
              <label htmlFor="">매우 그렇다</label>
            </li>
            
          </ul>
        </li>
        <li className="surveyContent">
          <p>9. 밤에 깨어 있을 때는 시계를 보지 않는다.</p>
          <ul>
            <li>
              <InputElement type='radio' className='radioButton' value='1' name='qna9'/>
              <label htmlFor="">전혀 그렇지 않다</label>
            </li>
            <li>
              <InputElement type='radio' className='radioButton' value='2' name='qna9'/>
              <label htmlFor="">그렇지 않다</label>
            </li>
            <li>
              <InputElement type='radio' className='radioButton' value='3' name='qna9'/>
              <label htmlFor="">그렇다</label>
            </li>
            <li>
              <InputElement type='radio' className='radioButton' value='4' name='qna9'/>
              <label htmlFor="">매우 그렇다</label>
            </li>
            
          </ul>
        </li>
        <li className="surveyContent">
          <p>10. 필요한 경우에는 하루 한번 짧은 낮잠(30분 이하)으로 제한한다.</p>
          <ul>
            <li>
              <InputElement type='radio' className='radioButton' value='1' name='qna10'/>
              <label htmlFor="">전혀 그렇지 않다</label>
            </li>
            <li>
              <InputElement type='radio' className='radioButton' value='2' name='qna10'/>
              <label htmlFor="">그렇지 않다</label>
            </li>
            <li>
              <InputElement type='radio' className='radioButton' value='3' name='qna10'/>
              <label htmlFor="">그렇다</label>
            </li>
            <li>
              <InputElement type='radio' className='radioButton' value='4' name='qna10'/>
              <label htmlFor="">매우 그렇다</label>
            </li>
          </ul>
        </li>
        <li className="surveyContent">
          <p>11. 취침 시간에는 전자제품(휴대전화 및 스마트워치) 및 조명을 사용하지 않는다.</p>
          <ul>
            <li>
              <InputElement type='radio' className='radioButton' value='1' name='qna11'/>
              <label htmlFor="">전혀 그렇지 않다</label>
            </li>
            <li>
              <InputElement type='radio' className='radioButton' value='2' name='qna11'/>
              <label htmlFor="">그렇지 않다</label>
            </li>
            <li>
              <InputElement type='radio' className='radioButton' value='3' name='qna11'/>
              <label htmlFor="">그렇다</label>
            </li>
            <li>
              <InputElement type='radio' className='radioButton' value='4' name='qna11'/>
              <label htmlFor="">매우 그렇다</label>
            </li>
          </ul>
        </li>
      </ul>
     </div>
    </React.Fragment>
  );
};

export default NCCNComponent02;
