import React from "react";
import { useState } from "react";
import { useRef } from "react";
import InputElement from "../elements/InputElement";
import MemberChk01 from "../join/member/MemberChk01";
import MemberChk02 from "../join/member/MemberChk02";
import MemberChk03 from "../join/member/MemberChk03";
import useUserHttp from "@hooks/queries/useUserQuery";
import { ListInterface } from "@interfaces/listInterface";
import { UserInterface } from "@interfaces/userInterface";
import { Link, useLocation, useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const [closeList, setCloseList] = useState<boolean>(false);
  const listRef = useRef<HTMLDivElement>(null);
  function foldList() {
    if (!listRef || !listRef.current) {
      return;
    }
    const style = listRef.current.style;
    if (closeList) {
      style.display = "none";
    } else if (!closeList) {
      style.display = "block";
    }
    setCloseList(!closeList);
  }

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    const target = event.target as HTMLLinkElement;
    const twoDep = target.nextElementSibling as HTMLDivElement;

    if (target.classList.contains("on")) {
      target.classList.remove("on");
      twoDep.style.display = "none";
    } else {
      target.classList.add("on");
      twoDep.style.display = "block";
    }
  };

  return (
    <React.Fragment>
      <div className="header">
        <span className="logo">
          <img src="images/logo.png" alt="logo" />
        </span>
        <button
          type="button"
          onClick={foldList}
          className={`${closeList ? "close" : "open"}`}
        >
          <img src="" />
        </button>
        <div className="m-menu" ref={listRef}>
          <div className="drawer on">
            <div className="head">
              <span className="logo">
                <img src="images/logo.png" alt="logo" />
              </span>
              <button
                type="button"
                onClick={foldList}
                className={`${closeList ? "close" : "open"}`}
              >
                메뉴닫기
              </button>
              <div className="log-btn">
                <ul>
                  <li>
                    <Link to="/">로그아웃</Link>
                  </li>
                  <li>
                    <Link to="/">예약내역</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <nav className="nav">
                <ul>
                  <li>
                    <Link to="/">산림치유프로그램</Link>
                  </li>
                  <li className="">
                    <Link to="/">치유의 숲 찾기</Link>
                  </li>
                  <li>
                    <Link to="/" className="arrow" onClick={handleMenuClick}>
                      자료실
                    </Link>
                    <div className="two-dep">
                      <ul>
                        <li>
                          <Link to="/">• 프로그램 사진 및 영상</Link>
                        </li>
                        <li>
                          <Link to="/">• 암 치유인자</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to="/">설문작성</Link>
                  </li>
                  <li>
                    <Link to="/" className="arrow" onClick={handleMenuClick}>
                      마이페이지
                    </Link>
                    <div className="two-dep">
                      <ul>
                        <li>
                          <Link to="/">• 예약내역</Link>
                        </li>
                        <li>
                          <Link to="/">• 일정관리</Link>
                        </li>
                        <li>
                          <Link to="/">• 내 정보</Link>
                        </li>
                        <li>
                          <Link to="/">• 계정관리</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderComponent;
