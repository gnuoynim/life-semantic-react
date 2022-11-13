import React from 'react';
import { useEffect } from "react";
import InputElement from '../../elements/InputElement';
import useUserHttp from '@hooks/queries/useUserQuery';
import { ListInterface } from '@interfaces/listInterface';
import { UserInterface } from '@interfaces/userInterface';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import $ from "jquery";


const  MemberChk02= ({ nextStep }: { nextStep: Function }) => {
  
  const handleFocusBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target;
    
    const smoking_rate = document.getElementById(
      "smoking_rate"
    ) as HTMLInputElement;
    const smoking_start = document.getElementById(
      "smoking_start"
    ) as HTMLInputElement;
    const smoking_end = document.getElementById(
      "smoking_end"
    ) as HTMLInputElement;
    const chk_caffeine = document.querySelectorAll<HTMLInputElement>(
      "[name='chk_caffeine']:checked"
    );
    if (!smoking_rate.value) {
      smoking_rate.focus();
      return false;
    }
    if (!smoking_start.value) {
      smoking_start.focus();
      return false;
    }
    if (!smoking_end.value) {
      smoking_end.focus();
      return false;
    }
    if (!chk_caffeine) {
      chk_caffeine;
      return false;
    }
    nextStep(3);
  };
  useEffect(() => {  

      $('#chkAll').click(function(){
        chkAll(); 
    });
  
    function chkAll(){
      var chk = $('#chkAll').is(':checked');
      if(chk) { 
          $('.inputCheck input[type=checkbox]').prop('checked', true); // 체크박스 전체 선택
      }else{
          $('.inputCheck input[type=checkbox]').prop('checked', false); // 체크박스 전체 해제
      }    
    }
  

  
    $('.isCheck').on('click', function() {
      const options = $(this).parent().siblings(".input_detail"); 
      options.css("display","block")

  });

  }, []);

  return (
    <React.Fragment>
      <p className='title'>개인정보 입력</p>
      <div className='MemberChk MemberChk02'>
        <label>
            <span>흡연여부</span>
        </label>
        <div className='chk_radio02'>
          <span>
            <InputElement type='radio' value='흡연' name='chk_smoking'/>
            <span>흡연</span>
          </span>
          <span>
            <InputElement type='radio' value='비흡연' name='chk_smoking'/>
            <span>비흡연</span>
          </span>
          <span>
            <InputElement type='radio' value='금연' name='chk_smoking'/>
            <span>금연</span>
          </span>
        </div>
        <div className='input_detail'>
          <span>양</span>
          <span>
            <InputElement type='number' id='smoking_rate'/>
            <label>갑/일</label>
          </span>
          <span className='term'>
            <span>기간</span>
            <InputElement type='number' placeholder='시작' id='smoking_start'/>
            <label>년</label>
            <b>~</b>
            <InputElement type='number' placeholder='마지막'id='smoking_end'/>
            <label>년</label>
          </span>
        </div>
        <label>
            <span>음주여부</span>
        </label>
        <div className='chk_radio02'>
          <span>
            <InputElement type='radio' value='음주' name='chk_smoking' />
            <span>음주</span>
          </span>
          <span>
            <InputElement type='radio' value='비흡연' name='chk_smoking' id=''/>
            <span>비음주</span>
          </span>
          <span>
            <InputElement type='radio' value='금연' name='chk_smoking'/>
            <span>금주</span>
          </span>
        </div>
        <div className='input_detail'>
          <span>종류</span>
          <span>
            <InputElement type='number' id='drinking_rate'/>
            <label>병/일</label>
          </span>
          <span className='term'>
            <span>기간</span>
            <InputElement type='number' placeholder='시작' id='drinking_start'/>
            <label>년</label>
            <b>~</b>
            <InputElement type='number' placeholder='마지막' id='drinking_end'/>
            <label>년</label>
          </span>
        </div>
        <label>
            <span>카페인 섭취여부</span>
        </label>
        <div className='chk_radio'>
          <span>
            <InputElement type='radio' value='섭취' name='chk_caffeine'/>
            <span>섭취</span>
          </span>
          <span>
            <InputElement type='radio' value='비섭취' name='chk_caffeine'/>
            <span>비섭취</span>
          </span>
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

export default MemberChk02;
