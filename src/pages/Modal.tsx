import React, { useState } from "react";
import WebLayout from "@layouts/web/WebLayout";
import { useRecoilState } from "recoil";
import ModalComponent from "@/components/modal/ModalComponent";
import { ModalInterface } from "@/interfaces/modalInterface";
import { modalState } from "@/states/modalState";

const Modal = () => {
  const [modal, setModal] = useRecoilState(modalState);

  const handleModal = () => {
    setModal({
      ...modal,
      show: true,
      title: "안내",
      content: "아이디 또는 비밀번호를 다시 확인해 주세요.",
    });
  };

  return (
    <WebLayout>
      <ModalComponent />
      <button type="button" onClick={handleModal}>
        로그인 아이디확인 버튼
      </button>
    </WebLayout>
  );
};

export default Modal;
