import React, { useEffect, useState } from "react";
import HeaderComponent from "@/components/head/Header";
import InputElement from "@/components/elements/InputElement";
import { modalState } from "@/states/modalState";
import TitleHeadComponent from "@/components/head/TitleHeadComponent";
import RoundComponent from "@/components/program/RoundComponent";
import $, { each } from "jquery";


const ReservationList = () => {

  useEffect(() => {
    $("input[type='checkbox']").click(function (){
      
    });
    const check_box = $("input[type='checkbox']");
    const tr_bx = $("table tr");
    
 
  }, []);

  return (
    <React.Fragment>
      <HeaderComponent />
      <div className="reservationList">
        <h2>예약내역</h2>
        <button type="button" className="cancelButton active">선택취소</button>
        <div className="reservationTable">
          <span className="order">최신 등록 순</span>
          <table>
            <tbody>
              <tr>
                <td></td>
                <td>프로그램명</td>
                <td>현황</td>
              </tr>
              <tr>
                <td>
                  <InputElement type="checkbox" />
                </td>
                <td>굿바이 피로</td>
                <td><span className="reserved">예약 중</span></td>
              </tr>
              <tr>
                <td>
                  <InputElement type="checkbox" />
                </td>
                <td>굿바이 피로</td>
                <td><span className="attend">참여 중</span></td>
              </tr>
              <tr>
                <td>
                  <InputElement type="checkbox" />
                </td>
                <td>굿바이 피로</td>
                <td>예약중</td>
              </tr>
              <tr>
                <td>
                  <InputElement type="checkbox"  />
                </td>
                <td>굿바이 피로</td>
                <td>예약중</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ReservationList;
