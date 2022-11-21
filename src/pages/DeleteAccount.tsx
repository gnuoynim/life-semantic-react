import React, { useEffect, useState } from "react";
import WebLayout from "@layouts/web/WebLayout";
import { useRecoilState } from "recoil";
import HeaderComponent from "@/components/head/Header";
import { modalState } from "@/states/modalState";
import { Link } from "react-router-dom";
import InputElement from "@/components/elements/InputElement";
import ModalComponent from "@/components/modal/ModalComponent";



const DeleteAccount = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const handleModal = () => {
    setModal({
      ...modal,
      show: true,
      title: "",
      cancelShow: true,
      content: (
        <div>
          회원 탈퇴를<br/>
          중단하시겠습니까?
        </div>
      ),
      confirmText: "아니요",
      cancelText: "네",
    });
  };
  const handleModal01 = () => {
    setModal({
      ...modal,
      show: true,
      title: "",
      cancelShow: true,
      content: (
        <div>
          정말 탈퇴하시겠습니까?<br/>
          탈퇴 후에는 복구가 불가합니다.
        </div>
      ),
      confirmText: "아니요",
      cancelText: "네",
    });
  };
  return (
    <WebLayout>

      <HeaderComponent />
      <div className="account">
        <h2>회원 탈퇴</h2>
        <div className="delete">
          <p>
            회원 탈퇴 시 모든 정보가 삭제되며, <br />
            <strong>이후 복구가 불가능</strong>합니다.
          </p>
          <table>
            <tbody>
              <tr>
                <td>아이디</td>
                <td>dtha1234</td>
              </tr>
              <tr>
                <td>최초가입일자</td>
                <td>2022-07-01</td>
              </tr>
            </tbody>
          </table>
          <div className="deletId">
            <p>
              비밀번호 확인 후 아이디는
              <br />
              <strong>즉시 탈퇴</strong>됩니다.
            </p>
            <span className="password">
              <label htmlFor="">비밀번호</label>
              <InputElement type="password"  maxLength={16}/>
            </span>
          </div>
        </div>
        <div className="buttonBox">
          <button type="button" className="prevButton">
            취소
          </button>
          <button type="button" className="nextButton">
            탈퇴
          </button>
        </div>
      </div>
      <ModalComponent id="flexModal"/>
    </WebLayout>
  );
};

export default DeleteAccount;
