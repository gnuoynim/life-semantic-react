import React, {useState} from "react";
import TitleHeadComponent from "@/components/head/TitleHeadComponent";
import {Link, useLocation, useNavigate} from "react-router-dom";


const SurveyBefore = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isShow, setShow] = useState<boolean>(false);

    const handleToolTip = () => {
        setShow(!isShow);
    }

    return (
        <React.Fragment>
            <TitleHeadComponent name="시작 전 설문"/>
            <div className="survey">
                <div className="surveyMain">
                    <div className="surveyName">
                        <p>굿바이 피로1기</p>
                        <div className="noticeIco on" onClick={handleToolTip}>
                            <img src="public/images/question.svg" alt="" className=""/>
                          {isShow &&
                          <div className="noticeBox">
                            <ul>
                              <li>
                                <span>디스트레스</span>는 지난 일주일 동안 염려되는 항목을 각각의 문제(신체, 정서, 사회관계, 실생활, 영성/종교, 기타 문제)별로
                                체크하는 설문입니다.
                              </li>
                              <li>
                                <span>통증</span>은 앞모습과 뒷모습의 아픈 부위와 가장 아픈 부위를 선택하고, 가장 아픈 부위의 아픈 정도를 수치로 입력하는
                                설문입니다.
                              </li>
                              <li>
                                <span>피로</span>는 총 15문항이며, 각각의 문항마다 현재상태를 가장 적절하게 설명하는 선지를 선택하는 설문입니다.
                              </li>
                              <li>
                                <span>수면(ISI)</span>는 총 5문항이며, 각각의 문항에 대해 응답하는 설문입니다.
                              </li>
                              <li>
                                <span>수면위생(NCCN)</span>는 총 11문항이며, 최근 1주일 동안의 각각의 문항에 응답하는 설문입니다.
                              </li>
                            </ul>
                          </div>
                          }
                        </div>
                    </div>
                    <ul>
                        <li>
                            <Link to="/deStress">디스트레스</Link>
                        </li>
                        <li>
                            <Link to="/pain">통증</Link>
                        </li>
                        <li>
                            <Link to="/tired">피로</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SurveyBefore;
