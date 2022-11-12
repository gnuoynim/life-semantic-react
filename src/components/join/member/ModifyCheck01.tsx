import React from "react";
import { useEffect } from "react";
import InputElement from "../../elements/InputElement";
import $ from "jquery";

const ModifyCheck01 = () => {
  return (
    <React.Fragment>
      <div className="modifyCheck">
        <p className="title">회원정보 입력</p>
        <div className="MemberChk MemberChk01">
          <ul>
            <li>
              <label>
                <span>아이디</span>
              </label>
              <span>아이디</span>
            </li>
            <li>
              <label>
                <span>비밀번호</span>
              </label>
              <InputElement
                type="password"
                placeholder="비밀번호 확인"
                id="password_check"
              />
            </li>
            <li>
              <label>
                <span>비밀번호 확인</span>
              </label>
              <InputElement
                type="password"
                placeholder="비밀번호 확인"
                id="password_check"
              />
            </li>
            <li>
              <label>
                <span>이름</span>
              </label>
              <InputElement
                type="text"
                placeholder="이름확인"
                id="name_check"
              />
            </li>
            <li>
              <label>
                <span>생년월일</span>
              </label>
              <span>생년월일</span>
            </li>
            <li>
              <label>
                <span>휴대폰번호</span>
              </label>
              <span>휴대폰번호</span>
            </li>
          </ul>

          <label>
            <span>문자 수신동의</span>
          </label>
          <div className="chk_radio">
            <span>
              <InputElement type="radio" value="동의" name="chk_info" />
              <span>동의</span>
            </span>
            <span>
              <InputElement type="radio" value="미동의" name="chk_info" />
              <span>미동의</span>
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ModifyCheck01;
