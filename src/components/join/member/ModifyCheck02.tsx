import React from "react";
import { useEffect } from "react";
import InputElement from "../../elements/InputElement";
import $ from "jquery";


const ModifyCheck02 = () => {
  useEffect(() => {  
    $('.isCheck').on('click', function() {
      const options = $(this).parent().siblings(".input_detail"); // 체크된 Radio 버튼의 값을 가져옵니다.
      options.css("display","block")

  });

  }, []);

  return (
    <React.Fragment>
      <div className="modifyCheck">
        <p className="title">개인정보 입력</p>
        <div className="MemberChk MemberChk01">
          <ul>
            <li>
              <label>
                <span>흡연여부</span>
              </label>
              <div className="chk_radio02">
                <span className="isCheck">
                  <InputElement type="radio" value="흡연" name="checkSmoking" />
                  <span>흡연</span>
                </span>
                <span>
                  <InputElement
                    type="radio"
                    value="비흡연"
                    name="checkSmoking"
                  />
                  <span>비흡연</span>
                </span>
                <span>
                  <InputElement type="radio" value="금연" name="checkSmoking" />
                  <span>금연</span>
                </span>
              </div>
              <div className="input_detail">
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
                  <InputElement type="radio" value="음주" name="chk_smoking" />
                  <span>음주</span>
                </span>
                <span>
                  <InputElement
                    type="radio"
                    value="비흡연"
                    name="chk_smoking"
                    id=""
                  />
                  <span>비음주</span>
                </span>
                <span>
                  <InputElement type="radio" value="금연" name="chk_smoking" />
                  <span>금주</span>
                </span>
              </div>
            </li>
            <li>
              <div className="input_detail">
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
