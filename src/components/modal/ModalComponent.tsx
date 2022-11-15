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


const ModalComponent = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const {
    show = false,
    title = "모달창",
    content = "기본",
    saveShow = false,
    closeShow = false,
    confirmShow = false,
    cancelShow = false,
    confirmText="확인",
    cancelText="취소"
  } = modal;

  const handleClose = () => {
    setModal({ ...modal, show: false });
  };
  const handleShow = () => {};

  return (
    <React.Fragment>
      <Modal show={show} onHide={handleClose} id="modal">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer>
          {cancelShow && (
            <Button variant="" onClick={handleClose}>
           {cancelText}
            </Button>
          )}
          <Button variant="" onClick={handleClose}>
            {confirmText}
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default ModalComponent;
