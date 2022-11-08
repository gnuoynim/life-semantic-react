import React from "react";

import useUserHttp from "@hooks/queries/useUserQuery";
import { ListInterface } from "@interfaces/listInterface";
import { UserInterface } from "@interfaces/userInterface";

const UnBookComponent = () => {
  return (
    <React.Fragment>
      <div className="program-wrap">
        <div className="prg prg-reserve">
          <div className="ready-prg">
            <div className="prg-head unBook">
              <span className="reserve">예약 중</span>
              <p> 굿바이 피로 1기 </p>
            </div>
            <ul className="term">
              <li className="red">예약기간: 2022.08.01 ~ 2022.08.14</li>
              <li className="">진행기간: 2022.09.01 ~ 2022.10.01</li>
              <li className="red">잔여인원: 5명 (모집인원: 15명)</li>
              <li className="">장소: 서울 안산도시자연공원</li>
            </ul>
          </div>
          <button type="button" className="btn-02 cnacel-btn">
            <span>취소하기</span>
          </button>
        </div>
        <div className="prg prg-reserve">
          <div className="ready-prg">
            <div className="prg-head unBook">
              <span className="reserve reserve-02">참여중</span>
              <p> 굿바이 피로 1기 </p>
            </div>
            <ul className="term">
              <li className="red">예약기간: 2022.08.01 ~ 2022.08.14</li>
              <li className="">진행기간: 2022.09.01 ~ 2022.10.01</li>
              <li className="red">잔여인원: 5명 (모집인원: 15명)</li>
              <li className="">장소: 서울 안산도시자연공원</li>
            </ul>
          </div>
          <button type="button" className="btn-02 gray-btn">
            취소불가
          </button>
        </div>
        <div className="prg prg-reserve">
          <div className="ready-prg">
            <div className="prg-head unBook">
              <span className="reserve">참여 중</span>
              <p> 굿바이 피로 1기 </p>
            </div>
            <ul className="term">
              <li className="red">예약기간: 2022.08.01 ~ 2022.08.14</li>
              <li className="">진행기간: 2022.09.01 ~ 2022.10.01</li>
              <li className="red">잔여인원: 5명 (모집인원: 15명)</li>
              <li className="">장소: 서울 안산도시자연공원</li>
            </ul>
          </div>
          <button type="button" className="btn-02 gray-btn">
            운영중
          </button>
        </div>
        <div className="prg  prg-reserve prg-reserve-02">
          <div className="ready-prg">
            <div className="prg-head unBook">
              <span className="reserve">참여 중</span>
              <p> 굿바이 피로 1기 </p>
            </div>
            <ul className="term">
              <li className="red">예약기간: 2022.08.01 ~ 2022.08.14</li>
              <li className="">진행기간: 2022.09.01 ~ 2022.10.01</li>
              <li className="red">잔여인원: 5명 (모집인원: 15명)</li>
              <li className="">장소: 서울 안산도시자연공원</li>
            </ul>
          </div>
          <button type="button" className="btn-02 gray-btn">
            운영중
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UnBookComponent;
