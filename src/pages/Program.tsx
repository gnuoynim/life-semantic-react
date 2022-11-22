import React from "react";
import BookComponent from "@/components/program/book/BookComponent";
import GoodByeComponent from "@/components/program/GoodByeProgramComponent";
import GoodSleepComponent from "@/components/program/GoodSleepProgramComponent";
import BannerComponent from "@/components/program/banner/BannerComponent";
import BookProgram from "./BookProgram";
import BannerComponent02 from "@/components/program/banner/BannerComponent02";
import HeaderComponent from "../components/head/Header";
import { Link } from "react-router-dom";
import { userState } from "@states/userState";
import { useRecoilValue } from "recoil";

const Program = () => {
  const user = useRecoilValue(userState);
  return (
    <React.Fragment>
        <HeaderComponent />
        <div className="programName">
        {user.accessToken && <BookProgram />}
        <GoodByeComponent />
        <GoodSleepComponent />
        </div>
        <BannerComponent />
        <BookComponent />
        <button type="button" className="borderButton02">
            프로그램 더보기
        </button>
        <BannerComponent02 />
        
        <div className="customerBox">
            <p>
                고객센터 : <span>02 - 123 - 4567</span> <br />
                문의하실 내용이 있으면, 고객센터로 연락바랍니다.
            </p>
            <Link to="/policy">이용약관</Link>
            <Link to="/policy">개인정보 처리방침</Link>
        </div>
    </React.Fragment>
  );
};

export default Program;
