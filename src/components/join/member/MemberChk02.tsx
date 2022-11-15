import React, { useState } from 'react';
import { useEffect } from 'react';
import InputElement from '../../elements/InputElement';
import useUserHttp from '@hooks/queries/useUserQuery';
import { ListInterface } from '@interfaces/listInterface';
import { UserInterface } from '@interfaces/userInterface';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import $ from 'jquery';


const MemberChk02 = ({ nextStep }: { nextStep: Function }) => {
  const [isSmoke, setIsSmoke] = useState(false);
  const [isDrink, setIsDrink] = useState(false);

  const handleFocusBtn = (event: React.MouseEvent<HTMLButtonElement>) => {

    const checkSmoking = document.querySelector('[name="check_smoking"]:checked') as HTMLInputElement;
    const checkDrink = document.querySelector('[name="check_drink"]:checked') as HTMLInputElement;
    const checkCaffeine = document.querySelector('[name="check_caffeine"]:checked') as HTMLInputElement;

    if (!checkSmoking) return false;
    if (checkSmoking && checkSmoking.value === '흡연')
      return checkSmokingValues();

    if (!checkDrink) return false;
    if (checkDrink && checkDrink.value === '음주')
      return checkDrinkingValues();

    if (!checkCaffeine)
      return false;

    nextStep(3);
  };

  const checkSmokingValues = () => {
    const smokingRate = document.getElementById('smoking_rate') as HTMLInputElement;
    const smokingStart = document.getElementById('smoking_start') as HTMLInputElement;
    const smokingEnd = document.getElementById('smoking_end') as HTMLInputElement;

    if (!smokingRate.value) {
      smokingRate.focus();
      return false;
    }
    if (!smokingStart.value) {
      smokingStart.focus();
      return false;
    }
    if (!smokingEnd.value) {
      smokingEnd.focus();
      return false;
    }

    return true;
  };

  const checkDrinkingValues = () => {
    const drinkingRate = document.getElementById('drinking_rate') as HTMLInputElement;
    const drinkingStart = document.getElementById('drinking_start') as HTMLInputElement;
    const drinkingEnd = document.getElementById('drinking_end') as HTMLInputElement;

    if (!drinkingRate.value) {
      drinkingRate.focus();
      return false;
    }
    if (!drinkingStart.value) {
      drinkingStart.focus();
      return false;
    }
    if (!drinkingEnd.value) {
      drinkingEnd.focus();
      return false;
    }

    return true;
  };

  const handleSmoke = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    if (target.value === '흡연') {
      setIsSmoke(true);
    } else {
      setIsSmoke(false);
    }
  };

  const handleDrink = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    if (target.value === '음주') {
      setIsDrink(true);
    } else {
      setIsDrink(false);
    }
  };

  useEffect(() => {

    $('.isCheck').on('click', function() {
      const options = $(this).parent().siblings('.input_detail');
      options.css('display', 'block');

    });

  }, []);

  return (
    <React.Fragment>
      <p className="title">개인정보 입력</p>
      <div className="MemberChk MemberChk02">
        <label>
          <span>흡연여부</span>
        </label>
        <div className="chk_radio02">
          <span>
            <InputElement type="radio" value="흡연" name="check_smoking" id="agree" onChange={handleSmoke} />
            <label htmlFor="agree">흡연</label>
          </span>
          <span>
            <InputElement type="radio" value="비흡연" name="check_smoking" id="agree01" onChange={handleSmoke} />
            <label htmlFor="agree01">비흡연</label>
          </span>
          <span>
            <InputElement type="radio" value="금연" name="check_smoking" id="agree02" onChange={handleSmoke} />
            <label htmlFor="agree02">금연</label>
          </span>
        </div>
        <div className="input_detail" style={{ display: isSmoke ? 'block' : 'none' }}>
          <span>양</span>
          <span>
            <InputElement type="number" id="smoking_rate" />
            <label>갑/일</label>
          </span>
          <span className="term">
            <span>기간</span>
            <InputElement type="number" placeholder="시작" id="smoking_start" />
            <label>년</label>
            <b>~</b>
            <InputElement type="number" placeholder="마지막" id="smoking_end" />
            <label>년</label>
          </span>
        </div>
        <label>
          <span>음주여부</span>
        </label>
        <div className="chk_radio02">
          <span>
            <InputElement type="radio" value="음주" name="check_drink" id="agree03" onChange={handleDrink} />
            <label htmlFor="agree03">음주</label>
          </span>
          <span>
            <InputElement type="radio" value="비흡연" name="check_drink" id="agree04" onChange={handleDrink} />
            <label htmlFor="agree04">비음주</label>
          </span>
          <span>
            <InputElement type="radio" value="금연" name="check_drink" id="agree05" onChange={handleDrink} />
            <label htmlFor="agree05">금주</label>
          </span>
        </div>
        <div className="input_detail" style={{ display: isDrink ? 'block' : 'none' }}>
          <span>종류</span>
          <span>
            <InputElement type="number" id="drinking_rate" />
            <label>병/일</label>
          </span>
          <span className="term">
            <span>기간</span>
            <InputElement type="number" placeholder="시작" id="drinking_start" />
            <label>년</label>
            <b>~</b>
            <InputElement type="number" placeholder="마지막" id="drinking_end" />
            <label>년</label>
          </span>
        </div>
        <label>
          <span>카페인 섭취여부</span>
        </label>
        <div className="chk_radio">
          <span>
            <InputElement type="radio" value="섭취" name="check_caffeine" id="agree06" />
            <label htmlFor="agree06">섭취</label>
          </span>
          <span>
            <InputElement type="radio" value="비섭취" name="check_caffeine" id="agree07" />
            <label htmlFor="agree07">비섭취</label>
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
