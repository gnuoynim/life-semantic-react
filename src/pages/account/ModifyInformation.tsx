import React, { useState } from "react";
import WebLayout from "@layouts/web/WebLayout";
import TitleHeadComponent from "@components/head/TitleHeadComponent";
import BookComponent from "@components/program/book/BookComponent";
import GoodByeComponent from "@components/program/GoodByeProgramComponent";
import GoodSleepComponent from "@components/program/GoodSleepProgramComponent";
import BannerComponent from "@components/program/banner/BannerComponent";
import { Link } from "react-router-dom";
import InputElement from "@components/elements/InputElement";

const ModifyInformation = () => {
  return (
    <WebLayout>
      <TitleHeadComponent name="내 정보 수정" />
      <div className="modifyList">
        <ul>
          <li>
            <Link to="">회원정보 수정</Link>
          </li>
          <li>
            <Link to="">개인정보 수정</Link>
          </li>
          <li>
            <Link to="">암 건강정보 수정</Link>
          </li>
        </ul>
      </div>
    </WebLayout>
  );
};

export default ModifyInformation;
