import React, { useEffect, useState } from "react";

import useUserHttp from "@hooks/queries/useUserQuery";
import InputElement from "@/components/elements/InputElement";
import { ListInterface } from "@interfaces/listInterface";
import { UserInterface } from "@interfaces/userInterface";
import { Link, useLocation, useNavigate } from "react-router-dom";
import $ from "jquery";

const DropBoxComponent = () => {
  useEffect(() => {
    $(".dropDown .selected a").click(function () {
      console.log(this);
      const options = $(this).parent().siblings(".options");
      options.find("ul").show();
    });

    $(".dropDown .options ul li a").click(function () {
      const text = $(this).html();
      const selected = $(this).closest(".options").siblings(".selected");

      selected.find("> a > span").html(text);

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
            <Link to="/">
              <span>개요 프로그램 구분</span>
            </Link>
          </div>
          <div className="options">
            <ul>
              <li>
                <Link to="/">
                  전체
                  <span className="value"></span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  굿바이 피로
                  <span className="value"></span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  웰컴 굿잠
                  <span className="value"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="dropDown">
          <div className="selected">
            <Link to="/">
              <span>프로그램 현황</span>
            </Link>
          </div>
          <div className="options">
            <ul>
              <li>
                <Link to="/">
                  전체
                  <span className="value"></span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  예약 접수 중<span className="value"></span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  (운영 대기 중)
                  <span className="value"></span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  운영중
                  <span className="value"></span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  (종료)
                  <span className="value"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="dropDown">
          <div className="selected">
            <Link to="/">
              <span>정렬 순서</span>
            </Link>
          </div>
          <div className="options">
            <ul>
              <li>
                <Link to="/">
                  전체
                  <span className="value"></span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  마감 임박 순<span className="value"></span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  잔여 인원 순<span className="value"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="checkBox" id="checkBox">
          <span className="inputCheckType01">
            <InputElement type="checkbox" class="check" id="agree" />
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
