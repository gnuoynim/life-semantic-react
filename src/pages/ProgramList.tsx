import React, { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useRecoilState } from "recoil";
import { countState, sampleState } from "@states/sampleState";
import ModalComponent from "@/components/modal/ModalComponent";
import Form from "react-bootstrap/Form";
import BookComponent from "@/components/program/book/BookComponent";
import UnBookComponent from "@/components/program/unBook/UnBookComponent";
import HeaderComponent from "@/components/head/Header";
import DropBoxComponent from "@/components/program/DropBoxComponent";
import InputElement from "@/components/elements/InputElement";
import ProgramDetailComponent from "@/components/program/programDetail/ProgramDetailComponent";
import ProgramNumberComponent from "@/components/program/ProgramNumberComponent";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { modalState } from "@/states/modalState";
import $ from "jquery";
import useAxios from "@/hooks/useAxios";

const ProgramList = () => {


  return (
    <React.Fragment>
      <HeaderComponent />
      <DropBoxComponent />
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
