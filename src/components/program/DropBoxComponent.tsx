import React, { useEffect, useState } from "react";
import useUserHttp from "@hooks/queries/useUserQuery";
import InputElement from "@/components/elements/InputElement";
import { ListInterface } from "@interfaces/listInterface";
import { UserInterface } from "@interfaces/userInterface";
import { Link, useLocation, useNavigate } from "react-router-dom";
import $ from "jquery";

const DropBoxComponent = (/*{ programHandler }: { programHandler: Function }*/) => {
  useEffect(() => {
    $(".dropDown .selected span").click(function () {
      const options = $(this).parent().siblings(".options");
      options.find("ul").show();
    });

    $(".dropDown .options ul li ").click(function () {
      const text = $(this).html();
      const selected = $(this).closest(".options").siblings(".selected");

      selected.find("> span").html(text);
      // programHandler(text);

      $(this).closest("ul").hide();

      $(document).bind("click", function (e) {
        const clicked = $(e.target);
        if (!clicked.parents().hasClass("dropDown")) {
          $(".dropDown .options ul").hide();
        }
      });
    });

    $(".checkBox .check").click(function () {
      check_select();
    });

    function check_select() {
      const check_box = $(".checkBox .check");
      const info_bx = $(".checkBox .standbyNot");
      if ($(check_box).is(":checked")) {
        info_bx.css("display", "block");
      } else {
        info_bx.css("display", "none");
      }
    }
  }, []);

  return (
    <React.Fragment>
      <div className="dropBox">
        <h2>프로그램 목록</h2>
        <div className="dropDown">
          <div className="selected">
            <span>개요 프로그램 구분</span>
          </div>
          <div className="options">
            <ul>
              <li>
                전체
                <div className="value"></div>
              </li>
              <li>
                굿바이 피로
                <div className="value"></div>
              </li>
              <li>
                웰컴 굿잠
                <div className="value"></div>
              </li>
            </ul>
          </div>
        </div>
        <div className="dropDown">
          <div className="selected">
            <span>프로그램 현황</span>
          </div>
          <div className="options">
            <ul>
              <li>
                전체
                <div className="value"></div>
              </li>
              <li>
                예약 접수 중<div className="value"></div>
              </li>
              <li>
                (운영 대기 중)
                <div className="value"></div>
              </li>
              <li>
                운영 중<div className="value"></div>
              </li>
              <li>
                (종료)
                <div className="value"></div>
              </li>
            </ul>
          </div>
        </div>
        <div className="dropDown">
          <div className="selected">
            <span>정렬 순서</span>
          </div>
          <div className="options">
            <ul>
              <li>
                전체
                <div className="value"></div>
              </li>
              <li>
                마감 임박 순<div className="value"></div>
              </li>
              <li>
                잔여 인원 순<div className="value"></div>
              </li>
            </ul>
          </div>
        </div>
        <div className="checkBox" id="checkBox">
          <span className="inputCheckType01">
            <InputElement type="checkbox" className="check" id="agree" />
            <label>예약/참여 중</label>
          </span>
          <div className="standbyNot">
            <span>
              <img src="images/no.svg" />
            </span>
            <span>
              운영 대기 중인
              <br />
              프로그램이 없습니다.
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DropBoxComponent;
