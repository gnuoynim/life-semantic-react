import React, { useState } from "react";
import WebLayout from "@layouts/web/WebLayout";
import HeaderComponent from "@/components/head/Header";
import BookComponent from "@/components/program/book/BookComponent";
import GoodByeComponent from "@/components/program/GoodByeProgramComponent";
import GoodSleepComponent from "@/components/program/GoodSleepProgramComponent";
import BannerComponent from "@/components/program/banner/BannerComponent";
import { Link } from "react-router-dom";
import InputElement from "@/components/elements/InputElement";

const DeleteAccount = () => {
  return (
    <WebLayout>
      <HeaderComponent />
      <div className="account">
        <h2>회원 탈퇴</h2>
        <div className="delete">
          <p>
            회원 탈퇴 시 모든 정보가 삭제되며, <br />
            <strong>이후 복구가 불가능</strong>합니다.
          </p>
          <table>
            <tbody>
              <tr>
                <td>아이디</td>
                <td>dtha1234</td>
              </tr>
              <tr>
                <td>최초가입일자</td>
                <td>2022-07-01</td>
              </tr>
            </tbody>
          </table>
          <div className="deletId">
            <p>
              비밀번호 확인 후 아이디는
              <br />
              <strong>즉시 탈퇴</strong>됩니다.
            </p>
            <span>
              <label htmlFor="">비밀번호</label>
              <InputElement />
            </span>
          </div>
        </div>
        <div className="buttonBox">
          <button type="button" className="prevButton">
            취소
          </button>
          <button type="button" className="nextButton">
            탈퇴
          </button>
        </div>
      </div>
    </WebLayout>
  );
};

export default DeleteAccount;
