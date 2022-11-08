import React, { useState } from "react";
import WebLayout from "@layouts/web/WebLayout";
import HeaderComponent from "@/components/head/Header";
import BookComponent from "@/components/program/book/BookComponent";
import GoodByeComponent from "@/components/program/GoodByeProgramComponent";
import GoodSleepComponent from "@/components/program/GoodSleepProgramComponent";
import BannerComponent from "@/components/program/banner/BannerComponent";
import { Link } from "react-router-dom";

const BookProgram = () => {

  return (
    <WebLayout>
      <HeaderComponent />
      <div className="bookProgram">
        <p>
          <span>김풀숲님, </span>
          오늘 설문은 하셨나요?
        </p>
        <Link to='' className="surveyLink">
          설문하러가기 {'>'}
        </Link>
      </div>
      <BannerComponent/>
      <BookComponent />
    </WebLayout>
  );
};

export default BookProgram;
