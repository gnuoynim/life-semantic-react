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
import RoundComponent from "@/components/program/RoundComponent";
import $ from "jquery";


const ForestList = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <div className="programInfo">
        <h2>치유의 숲 찾기</h2>
        <div className="forest">
          <ul>
            <li className="roundNumber">전체</li>
            <li className="roundNumber">서울</li>
            <li className="roundNumber">인천</li>
            <li className="roundNumber">가평</li>
            <li className="roundNumber">장흥</li>
            <li className="roundNumber">장성</li>
            <li className="roundNumber">청태산</li>
            <li className="roundNumber">대관령</li>
          </ul>
        </div>
        <div className="forestCard">
          <Link to={"/forestView"}>
            <p className="forestName">산음 치유의 숲</p>
            <span>경기도 양평군 단월면 윗고북길<br/> 33-39</span>
            <span>031-774-8133</span>
          </Link>
        </div>
        <div className="forestCard">
          <Link to={"/forestView"}>
            <p className="forestName">산음 치유의 숲</p>
            <span>경기도 양평군 단월면 윗고북길<br/> 33-39</span>
            <span>031-774-8133</span>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ForestList;
