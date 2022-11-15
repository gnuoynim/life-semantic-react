import React, {useEffect, useState} from "react";
import HeaderComponent from "@/components/head/Header";
import ProgramDetailComponent from "@/components/program/programDetail/ProgramDetailComponent";
import ProgramNumberComponent from "@/components/program/ProgramNumberComponent";
import DownLoadComponent from "@/components/program/programDetail/DownLoadComponent";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {ViewInterface} from "@/interfaces/viewInterface";
import useAxios from "@/hooks/useAxios";
import {ProgramInterface} from "@/interfaces/ProgramInterface";

const ProgramInfo = () => {
    const {state} = useLocation() as ViewInterface;
    const navigate = useNavigate();
    const api = useAxios();
    const [program, setProgram] = useState<ProgramInterface>();

    const getProgram = async () => {
        await api
            .post("/programs/view", {pgIdx: state.pgIdx})
            .then((res) => {
                if (res.data.result === "success") setProgram(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        (async () => {
            await getProgram();
        })();
    }, []);

    return (
        <React.Fragment>
            <HeaderComponent/>
            <div className="programInfo">
                <h2>프로그램 정보</h2>
                <p className='programName'>{program?.pgTitle}</p>
                <div className="videoWrap">
                    <video></video>
                </div>
                <div className="textContents">
                    <ul>
                        <li>
                            <span>회차</span>
                            <span>주 1회(월), 총 8회차 </span>
                        </li>
                        <li>
                            <span>예약기간</span>
                            <span>{program?.pgAppSttDate} ~ {program?.pgAppEndDate}</span>
                        </li>
                        <li>
                            <span>주관기관</span>
                            <span>{program?.pgOrgan}</span>
                        </li>
                        <li>
                            <span>연락처</span>
                            <span>{program?.pgContact}</span>
                        </li>
                        <li>
                            <span>예약대상자</span>
                            <span>{program?.pgTarget}</span>
                        </li>
                        <li>
                            <span>진행기간</span>
                            <span>{program?.pgSttDate} ~ {program?.pgEndDate}</span>
                        </li>
                        <li>
                            <span>소요시간</span>
                            <span>{program?.pgTakenTimes}분</span>
                        </li>
                        <li>
                            <span>모집인원</span>
                            <span>{program?.pgAppNow}명</span>
                        </li>
                        <li>
                            <span>진행장소</span>
                            <Link to='/forestView'>{program?.pgPlace}</Link>
                        </li>
                        <li>
                            <span>진행방법</span>
                            <span>{program?.pgProcWay}</span>
                        </li>
                        <li>
                            <span>주요활동</span>
                            <span>{program?.pgMainAct}</span>
                        </li>
                        <li>
                            <span>기대효과</span>
                            <span>{program?.pgExpect}</span>
                        </li>
                    </ul>
                </div>
                {/*<ProgramDetailComponent/>*/}
                <DownLoadComponent/>
                <ProgramNumberComponent/>
                <div>
                    <h3>기타정보</h3>
                    <span>• 주의 사항</span>
                    <p>
                        우천시, 프로그램 참여 인원 5명 이하 시 프로그램이 취소될 수
                        있음(사전 연락) 프로그램 전, 후 설문조사 참여(10~15분 소요)
                    </p>
                    <button type="button" className="borderButton">목록으로 돌아가기</button>
                </div>
            </div>
            <button type="button" className="btn-02 active fixed">예약하기</button>
        </React.Fragment>
    );
};

export default ProgramInfo;
