import React, { useState } from "react";
import InputElement from "../../elements/InputElement";

const ModifyCheck02 = ({ nextStep }: { nextStep: Function }) => {
  const [isSmoke, setIsSmoke] = useState(false);
  const [isDrink, setIsDrink] = useState(false);

  const handleFocusBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    const checkSmoking = document.querySelector(
      '[name="checkSmoking"]:checked'
    ) as HTMLInputElement;
    const checkDrink = document.querySelector(
      '[name="check_drink"]:checked'
    ) as HTMLInputElement;
    const checkCaffeine = document.querySelector(
      '[name="check_caffeine"]:checked'
    ) as HTMLInputElement;

    if (!checkSmoking) return false;
    if (checkSmoking && checkSmoking.value === "흡연")
      return checkSmokingValues();

    if (!checkDrink) return false;
    if (checkDrink && checkDrink.value === "음주") return checkDrinkingValues();

    if (!checkCaffeine) return false;

    nextStep(3);
  };
  const checkSmokingValues = () => {
    const smokingRate = document.getElementById(
      "smoking_rate"
    ) as HTMLInputElement;
    const smokingStart = document.getElementById(
      "smoking_start"
    ) as HTMLInputElement;
    const smokingEnd = document.getElementById(
      "smoking_end"
    ) as HTMLInputElement;

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
    const drinkingRate = document.getElementById(
      "drinking_rate"
    ) as HTMLInputElement;
    const drinkingStart = document.getElementById(
      "drinking_start"
    ) as HTMLInputElement;
    const drinkingEnd = document.getElementById(
      "drinking_end"
    ) as HTMLInputElement;

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
    if (target.value === "흡연") {
      setIsSmoke(true);
    } else {
      setIsSmoke(false);
    }
  };

  const handleDrink = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    if (target.value === "음주") {
      setIsDrink(true);
    } else {
      setIsDrink(false);
    }
  };

  return (
    <React.Fragment>
      <div className="modifyCheck" id="modify">
        <p className="title">개인정보 입력</p>
        <div className="MemberChk MemberChk01">
          <ul>
            <li>
              <label>
                <span>흡연여부</span>
              </label>
              <div className="chk_radio02">
                <span className="isCheck">
                  <InputElement type="radio" value="흡연" name="checkSmoking" id="smoking" onChange={handleSmoke}/>
                  <label htmlFor="smoking">흡연</label>
                </span>
                <span>
                  <InputElement
                    type="radio"
                    value="비흡연"
                    name="checkSmoking"
                    id="nonSmoking"
                  />
                  <label htmlFor="nonSmoking">비흡연</label>
                </span>
                <span>
                  <InputElement type="radio" value="금연" name="checkSmoking" id="stopSmoking" onChange={handleSmoke}/>
                  <label htmlFor="stopSmoking">금연</label>
                </span>
              </div>
              <div className="input_detail" style={{ display: isSmoke ? "block" : "none" }}>
                <span>양</span>
                <span className="detail">
                  <InputElement type="number" id="drinking_rate" />
                  <label>갑/일</label>
                </span>
                <span className="term">
                  <span>기간</span>
                  <span className="termDate">
                    <InputElement
                      type="number"
                      placeholder="시작"
                      id="drinking_start"
                    />
                    <label>년</label>
                    <b>~</b>
                    <InputElement
                      type="number"
                      placeholder="마지막"
                      id="drinking_end"
                    />
                    <label>년</label>
                  </span>
                </span>
              </div>
            </li>
            <li>
              <label>
                <span>음주여부</span>
              </label>
              <div className="chk_radio02">
                <span>
                  <InputElement type="radio" value="음주" name="check_drink" id="drink" onChange={handleDrink}/>
                  <label htmlFor="drink">음주</label>
                </span>
                <span>
                  <InputElement
                    type="radio"
                    value="비음주"
                    name="check_drink"
                    id="nonAlcol"
                  />
                  <label htmlFor="nonAlcol">비음주</label>
                </span>
                <span>
                  <InputElement type="radio" value="금주" id="stopDrink" name="check_drink" />
                  <label htmlFor="stopDrink">금주</label>
                </span>
              </div>
            </li>
            <li>
              <div className="input_detail" id="stopDrink" style={{ display: isDrink ? "block" : "none" }}>
                <span>종류</span>
                <span className="detail">
                  <InputElement type="number" id="drinking_rate" />
                  <label>병/일</label>
                </span>
                <span className="term">
                  <span>기간</span>
                  <span className="termDate">
                    <InputElement
                      type="number"
                      placeholder="시작"
                      id="drinking_start"
                    />
                    <label>년</label>
                    <b>~</b>
                    <InputElement
                      type="number"
                      placeholder="마지막"
                      id="drinking_end"
                    />
                    <label>년</label>
                  </span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ModifyCheck02;
