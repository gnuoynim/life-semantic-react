import React, {useState} from "react";
import {ErrorBoundary} from "react-error-boundary";
import WebLayout from "@layouts/web/WebLayout";
import HeaderComponent from "@/components/head/Header";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useRecoilState} from "recoil";
import {countState, sampleState} from "@states/sampleState";
import {surveyState} from "@/states/surveyState";
import {modalState} from "@/states/modalState";
import ModalComponent from "../components/modal/ModalComponent";


const Account = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [modal, setModal] = useRecoilState(modalState);

    const handleDeleteAccount = () => {
        navigate('/deleteAccount');
    };

    const handleLogOut = () => {
        navigate('/');
    };
    const handleModal = () => {
        setModal({
          ...modal,
          show: true,
          title: "",
          cancelShow: true,
          content: (
            <div>
              로그아웃 하시겠습니까?
            </div>
          ),
          confirmText: "아니요",
          cancelText: "네",
        });
      };
    // const handleLogOut = () => {
    //     setModal({
    //         ...modal,
    //         show: true,
    //         title: "",
    //         cancelShow: true,
    //
    //         content: (
    //             <div>
    //                 로그아웃 하시겠습니까?
    //             </div>
    //         ),
    //         cancelText: <div className="close">아니요</div>,
    //         confirmText: "네",
    //     });
    // };

    return (
        <React.Fragment>
            <HeaderComponent/>
            <div className="account">
                <h2>계정관리</h2>
                <div className="">
                    <Link to={""}>내 정보 수정하기</Link>
                    <div className="accountBox">
                        <div>
                            <span>현재 계정</span>
                            <span>dhay123</span>
                        </div>
                        <p>
                            <span>{""}</span>님, 환영합니다.
                        </p>
                    </div>
                </div>
                <div className="grayButton">
                    <button type="button" onClick={handleDeleteAccount}>회원탈퇴</button>
                    <button type="button" onClick={handleModal}>로그아웃</button>
                </div>
            </div>
            <ModalComponent id="flexModal"/>
        </React.Fragment>
    );
};

export default Account;
