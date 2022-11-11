import React, { useState } from "react";
import WebLayout from "@layouts/web/WebLayout";
import HeaderComponent from "@/components/head/Header";
import BookComponent from "@/components/program/book/BookComponent";
import GoodByeComponent from "@/components/program/GoodByeProgramComponent";
import GoodSleepComponent from "@/components/program/GoodSleepProgramComponent";
import BannerComponent from "@/components/program/banner/BannerComponent";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <WebLayout>
      <HeaderComponent />
      <div className="account">
        <h2>계정관리</h2>
        <div className="">
          <Link to={""}>내 정보 수정하기</Link>
          <div className="accountBox">
            <div>
              <span>현재 계정</span>
              <span>dhay123</span>
            </div>
            <p>
              <span>{""}</span>님, 환영합니다.
            </p>
          </div>
        </div>
        <div className="grayButton">
          <button type="button">회원탈퇴</button>
          <button type="button">로그아웃</button>
        </div>
      </div>
    </WebLayout>
  );
};

export default Account;
