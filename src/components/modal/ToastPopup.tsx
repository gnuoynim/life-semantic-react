import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputElement from "../elements/InputElement";
import useUserHttp from "@hooks/queries/useUserQuery";
import { ListInterface } from "@interfaces/listInterface";
import { UserInterface } from "@interfaces/userInterface";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ModalInterface } from "@/interfaces/modalInterface";
import { useRecoilState } from "recoil";
import { modalState } from "@/states/modalState";


const ToastPopup = ({text}:{text:string}) => {
  const handleModal = () => {

  };

  return (
    <React.Fragment>
      <div className="toastPop">
        <p className="title">{text}</p>
      </div>
    </React.Fragment>
  );
};

export default ToastPopup;
