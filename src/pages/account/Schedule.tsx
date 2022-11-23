import React, { useState } from "react";
import WebLayout from "@layouts/web/WebLayout";
import HeaderComponent from "@components/head/Header";
import ModalComponent from "@components/modal/ModalComponent";
import { ModalInterface } from "@interfaces/modalInterface";
import { useRecoilState } from "recoil";
import { modalState } from "@states/modalState";

const Schedule = () => {
  const [modal, setModal] = useRecoilState(modalState);

  const handleModal = () => {
    setModal({ ...modal,
              show: true,
              title: "안내",
              content :"아이디 또는 비밀번호를 다시 확인해 주세요.",
             });
  };

  const today = new Date();
  const todayMonth = today.getMonth();
  const todayDate = today.getDate();
  const todayYear = today.getFullYear();
  const weekday = new Array(7);
  weekday[0] = "일요일";
  weekday[1] = "월요일";
  weekday[2] = "화요일";
  weekday[3] = "수요일";
  weekday[4] = "목요일";
  weekday[5] = "금요일";
  weekday[6] = "토요일";

  const day = weekday[today.getDay()];

  const handleChagne = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <WebLayout>
      <HeaderComponent />
      <div className="scheduleBox">
        <p>일정관리</p>
        <div className="schedulDate">
          <span className="fullYear">{todayYear}년</span>
          <div className="date">
            <button type="button"></button>
            <span className="month">{todayMonth}월</span>
            <button type="button"></button>
          </div>
        </div>
        <div className="programSchedul">
          <div className="toDay">
            <span>
              {todayMonth}/{todayDate}
              <br />
              {day}
            </span>
          </div>
          <div className="programInfo">
            <span className="name goodBye">굿바이 피로</span>
            <span className="round">3회차</span>
            <span className="time">10:00 ~ 11:00</span>
          </div>
        </div>
        <div className="programSchedul ">
          <div className="roundDate">
            <span>
              8/22
              <br />
              (월)
            </span>
          </div>
          <div className="programInfo">
            <span className="name goodBye">굿바이 피로</span>
            <span className="round">3회차</span>
            <span className="time">10:00 ~ 11:00</span>
          </div>
        </div>
        <div className="programSchedul programType">
          <div className="roundDate">
            <span>
              8/22
              <br />
              (월)
            </span>
            
          </div>
          <div>
            <div className="programInfo">
              <span className="name goodBye">굿바이 피로</span>
              <span className="round">3회차</span>
              <span className="time">10:00 ~ 11:00</span>
            </div>
            <div className="programInfo">
              <span className="name welcome">굿바이 피로</span>
              <span className="round">3회차</span>
              <span className="time">10:00 ~ 11:00</span>
            </div>
          </div>
          <span className="badge">완료</span>
        </div>
      </div>
      <button type="button" onClick={handleModal}></button>
      <ModalComponent />
    </WebLayout>
  );
};

export default Schedule;
