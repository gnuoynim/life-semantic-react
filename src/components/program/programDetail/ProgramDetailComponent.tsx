import React from "react";
import useUserHttp from "@hooks/queries/useUserQuery";
import { ListInterface } from "@interfaces/listInterface";
import { UserInterface } from "@interfaces/userInterface";
import { Link, useLocation, useNavigate } from "react-router-dom";
const ProgramDetailComponent = () => {
  return (
    <React.Fragment>
      <div className="textContents">
        <ul>
          <li>
            <span>회차</span>
            <span>주 1회(월), 총 8회차 </span>
          </li>
          <li>
            <span>예약기간</span>
            <span>2022.07.15 ~ 2022.07.30</span>
          </li>
          <li>
            <span>주관기관</span>
            <span>가천산림치유센터</span>
          </li>
          <li>
            <span>연락처</span>
            <span>02-110-2345</span>
          </li>
          <li>
            <span>예약대상자</span>
            <span>개인(암 생존자)</span>
          </li>
          <li>
            <span>진행기간</span>
            <span>2022.08.01 ~ 2022.10.01</span>
          </li>
          <li>
            <span>소요시간</span>
            <span>120분</span>
          </li>
          <li>
            <span>모집인원</span>
            <span>12명</span>
          </li>
          <li>
            <span>진행장소</span>
            <Link to="">서울 안산도시자연공원</Link>
          </li>
          <li>
            <span>진행방법</span>
            <span>
              숲 활동, 운동, 명상 프로그램이 각 10-30분 정도로 총 4~6가지의
              활동으로 운영.
            </span>
          </li>
          <li>
            <span>주요활동</span>
            <span>
              상지, 하지, 코어, 마음, 호흡 근력 활동 및 명상 혹은 림프마사지
              등의 활동 등
            </span>
          </li>
          <li>
            <span>기대효과</span>
            <span>
              호흡근력 강화, 스트레스 완화, 감정상태 인지, 심리적 안정 증진,
              코어근력 강화, 자신감 및 협동심 증진 증
            </span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default ProgramDetailComponent;
