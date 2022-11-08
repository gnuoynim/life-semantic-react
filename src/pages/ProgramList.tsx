import React, { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useRecoilState } from "recoil";
import { countState, sampleState } from "@states/sampleState";
import ModalComponent from "@/components/modal/ModalComponent";
import BookComponent from "@/components/program/book/BookComponent";
import UnBookComponent from "@/components/program/unBook/UnBookComponent";
import HeaderComponent from "@/components/head/Header";
import ProgramDetailComponent from "@/components/program/programDetail/ProgramDetailComponent";
import Dropdown from "react-bootstrap/Dropdown";
import ProgramNumberComponent from "@/components/program/ProgramNumberComponent";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { modalState } from "@/states/modalState";
import $ from "jquery";

const ProgramList = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <Dropdown>
        <Dropdown.Toggle variant="" id="">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="dropBox">
        <div className="selected">
          <a href="#">
            <span>개요 프로그램 구분</span>
          </a>
        </div>
        <div className="options">
          <ul>
            <li>
              <a href="#">
                전체<span className="value"></span>
              </a>
            </li>
            <li>
              <a href="#">
                굿바이 피로<span className="value"></span>
              </a>
            </li>
            <li>
              <a href="#">
                웰컴 굿잠<span className="value"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="banner">
        <Link to={""}>
          한국산림복지진흥원 <br />
          산림치유 프로그램 보러가기
        </Link>
      </div>
      <BookComponent />
      <UnBookComponent />
    </React.Fragment>
  );
};

export default ProgramList;
