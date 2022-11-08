import React, { useState } from "react";
import WebLayout from "@layouts/web/WebLayout";
import HeaderComponent from "@/components/head/Header";
import BookComponent from "@/components/program/book/BookComponent";
import GoodByeComponent from "@/components/program/GoodByeProgramComponent";
import GoodSleepComponent from "@/components/program/GoodSleepProgramComponent";
import BannerComponent from "@/components/program/banner/BannerComponent";
const Program = () => {

  return (
    <WebLayout>
      <HeaderComponent />
      <div className="programName">
        <GoodByeComponent />
        <GoodSleepComponent />
      </div>
      <BannerComponent/>
      <BookComponent />
    </WebLayout>
  );
};

export default Program;
