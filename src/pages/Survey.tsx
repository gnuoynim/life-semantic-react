import React, {useEffect, useState} from "react";
import TitleHeadComponent from "@/components/head/TitleHeadComponent";
import {Link, useLocation, useNavigate} from "react-router-dom";
import { modalState } from "@/states/modalState";
import ModalComponent from "@/components/modal/ModalComponent";
import { useRecoilState } from "recoil";
import useAxios from "@/hooks/useAxios";
import {SurveyListInterface} from "@/interfaces/surveyListInterface";

const Survey = () => {
    const [modal, setModal] = useRecoilState(modalState);
    const location = useLocation();
    const navigate = useNavigate();
    const api = useAxios();
    const [isShow, setShow] = useState<boolean>(false);
    const [survey, setSurvey] = useState<SurveyListInterface[]>();

    const handleToolTip = () => {
        setShow(!isShow);
    }   

    const handleNotOpen = () => {
        setModal({
          ...modal,
          show: true,
          title: "",
          cancelShow: false,
          content: (
            <div>
              아직 설문이<br />
              열리지 않았습니다.
            </div>
          ),
          confirmText: "확인",
        });
      };

    const getSurvey = async () => {
        await api
            .post("/surveys/list", {userNo: '1'})
            .then((res) => {
                console.log(res.data.data)
                if (res.data.result === "success") setSurvey(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        (async () => {
            await getSurvey();
        })();
    }, []);

    return (
        <React.Fragment>
            <TitleHeadComponent name="설문 작성"/>
            <div className="survey">
                <div className="surveyMain">
                    <div className="surveyName">
                        <p>굿바이 피로1기</p>
                        <div className="noticeIco on" onClick={handleToolTip}>
                            <img src="public/images/question.svg" alt="" className="" />
                            {isShow &&
                            <div className="noticeBox">
                                <ul>
                                    <li>
                                        <span>매일 입력 설문</span>은 8주 간(56일간)매일 간단한
                                        수치를 입력하는 설문입니다.
                                    </li>
                                    <li>
                                        <span>사전/사후 설문</span>은 프로그램 시작전, 종료 후에
                                        선택형 및 서술형으로 작성하는 설문입니다.
                                    </li>
                                </ul>
                            </div>
                            }
                        </div>
                    </div>
                    <ul>
                        <li className="">
                            <Link to="/surveyBefore">시작전 설문(2/3)</Link>
                        </li>
                        <li className="">
                            <Link to="/surveyToday">일일 설문<br/><span>(최근 5일 이내 미작성 2건)</span></Link>
                        </li>
                        <li className="active">
                            <Link to="" onClick={handleNotOpen}>종료후 설문(0/3)</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <ModalComponent />
        </React.Fragment>
    );
};

export default Survey;
