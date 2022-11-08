import React, { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useRecoilState } from "recoil";
import { countState, sampleState } from "@states/sampleState";
import ModalComponent from "@/components/modal/ModalComponent";
import HeaderComponent from "@/components/head/Header";
import ProgramDetailComponent from "@/components/program/programDetail/ProgramDetailComponent";
import ProgramNumberComponent from "@/components/program/ProgramNumberComponent";
import DownLoadComponent from "@/components/program/programDetail/DownLoadComponent";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { modalState } from "@/states/modalState";
import TitleHeadComponent from "@/components/head/TitleHeadComponent";
import $ from "jquery";
const PrgramInfo = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <div className="programInfo">
        <h2>프로그램 정보</h2>
        <p className='programName'>굿바이 피로 1기</p>
        <div className="videoWrap">
          <video></video>
        </div>
        <ProgramDetailComponent />
        <DownLoadComponent />
        <ProgramNumberComponent />
        <div>
          <h3>기타정보</h3>
          <span>• 주의 사항</span>
          <p>
            우천시, 프로그램 참여 인원 5명 이하 시 프로그램이 취소될 수
            있음(사전 연락) 프로그램 전, 후 설문조사 참여(10~15분 소요)
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PrgramInfo;
