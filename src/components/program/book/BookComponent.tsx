import React from "react";

import useUserHttp from "@hooks/queries/useUserQuery";
import { ListInterface } from "@interfaces/listInterface";
import { UserInterface } from "@interfaces/userInterface";

const BookComponent = () => {
  return (
    <React.Fragment>
      <div className="program-wrap">
        <div className="prg prg-01">
          <div className="ready-prg">
            <div className="prg-head">
              <p> 굿바이 피로 1기 </p>
              <span className="d-day">
                D-8
                <span>예약마감까지</span>
              </span>
            </div>
            <ul className="term">
              <li className="red">예약기간: 2022.08.01 ~ 2022.08.14</li>
              <li className="">진행기간: 2022.09.01 ~ 2022.10.01</li>
              <li className="red">잔여인원: 5명 (모집인원: 15명)</li>
              <li className="">장소: 서울 안산도시자연공원</li>
            </ul>
          </div>
          <button type="button" className="btn-02">
            예약하기
          </button>
        </div>
        <div className="prg prg-01">
          <div className="ready-prg">
            <div className="prg-head">
              <p> 굿바이 피로 1기 </p>
            </div>
            <ul className="term">
              <li className="red">예약기간: 2022.08.01 ~ 2022.08.14</li>
              <li>진행기간: 2022.09.01 ~ 2022.10.01</li>
              <li className="red">잔여인원: 5명 (모집인원: 15명)</li>
              <li>장소: 서울 안산도시자연공원</li>
            </ul>
          </div>
          <button type="button" className="btn-02 gray-btn">
            예약마감
          </button>
        </div>
      </div>
      <div className="program-wrap">
        <div className="prg prg-01">
          <div className="ready-prg">
            <div className="prg-head sky">
            <p> 웰검 굿잠 1기 </p>
              <span className="d-day">
                D-8
                <span>예약마감까지</span>
              </span>
            </div>
            <ul className="term">
              <li className="red">예약기간: 2022.08.01 ~ 2022.08.14</li>
              <li className="">진행기간: 2022.09.01 ~ 2022.10.01</li>
              <li className="red">잔여인원: 5명 (모집인원: 15명)</li>
              <li className="">장소: 서울 안산도시자연공원</li>
            </ul>
          </div>
          <button type="button" className="btn-02">
            예약하기
          </button>
        </div>
        <div className="prg prg-01">
          <div className="ready-prg">
            <div className="prg-head sky">
              <p> 웰검 굿잠 1기 </p>
            </div>
            <ul className="term">
              <li className="red">예약기간: 2022.08.01 ~ 2022.08.14</li>
              <li>진행기간: 2022.09.01 ~ 2022.10.01</li>
              <li className="red">잔여인원: 5명 (모집인원: 15명)</li>
              <li>장소: 서울 안산도시자연공원</li>
            </ul>
          </div>
          <button type="button" className="btn-02 gray-btn">
            예약마감
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BookComponent;
