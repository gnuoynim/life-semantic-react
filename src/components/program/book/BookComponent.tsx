import React, { useEffect, useState } from "react";
import useAxios from "@hooks/useAxios";
import { ProgramInterface } from "@interfaces/ProgramInterface";
import { useNavigate } from "react-router-dom";

const BookComponent = () => {
  const navigate = useNavigate();
  const api = useAxios();
  const [programs, setPrograms] = useState<ProgramInterface[]>();
  const [requestData, setRequestData] = useState({
    pgType: "",
    pgStatus: "",
    order: "",
    myStatus: "",
  });

  const getProgramList = async () => {
    await api
      .post("/programs/list", requestData)
      .then((res) => {
        if (res.data.result === "success") setPrograms(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDayCount = (endDay: string) => {
    const nowDate = new Date();
    const endDate = new Date(endDay);
    const dateDiff = endDate.getTime() - nowDate.getTime();
    return Math.ceil(dateDiff / 1000 / 60 / 60 / 24);
  };

  const getMaker = (startDay: string, endDay: string) => {
    const nowDate = new Date();
    const startDate = new Date(startDay);
    const endDate = new Date(endDay);
    if (nowDate > startDate && nowDate < endDate) {
      return <span className="participate">참여 중</span>;
    } else {
      return <span className="reserve">예약 중</span>;
    }
  };

  useEffect(() => {
    (async () => {
      await getProgramList();
    })();
  }, []);

  // 프로그램 상태 (
  // / 빈 값: 전체
  // / preApply: 신청기간 이전
  // / applying: 신청기간(=신청중)
  // / endApply: 신청기간 마감(=운영기간 이전)
  // / inOper: 운영기간(=운영중)
  // / endOper: 운영기간 마감)

  return (
    <React.Fragment>
      <div className="program-wrap">
        {programs?.map((item, index) => {
          return (
            <div className="prg prg-01" key={index}>
              <div className="ready-prg">
                {item.type === "goodBye" && (
                  <div className="prg-head unBook unLog">
                    {item.pgIsApply === "1" &&
                      getMaker(item.pgSttDate, item.pgEndDate)}
                    <p>{item.pgTitle}</p>
                    {item.pgStatus === "applying" && (
                      <span className="d-day">
                        D-{getDayCount(item.pgAppEndDate)}
                        <span>예약마감까지</span>
                      </span>
                    )}
                  </div>
                )}
                {item.type === "goodNight" && (
                  <div className="prg-head unBook sky">
                    {item.pgIsApply === "1" &&
                      getMaker(item.pgSttDate, item.pgEndDate)}
                    <p>{item.pgTitle}</p>
                    {item.pgStatus === "applying" && (
                      <span className="d-day">
                        D-{getDayCount(item.pgAppEndDate)}
                        <span>예약마감까지</span>
                      </span>
                    )}
                  </div>
                )}
                <ul className="term">
                  <li className="red">
                    예약기간: {item.pgAppSttDate} ~ {item.pgAppEndDate}
                  </li>
                  <li className="">
                    진행기간: {item.pgSttDate} ~ {item.pgEndDate}
                  </li>
                  {item.pgStatus === "inOper" && (
                    <li className="red">참여인원: {item.pgAppNow}명</li>
                  )}
                  {item.pgStatus === "endApply" && (
                    <li className="red">참여인원: {item.pgAppNow}명</li>
                  )}
                  {item.pgStatus === "applying" && (
                    <li className="red">
                      잔여인원:{" "}
                      {parseInt(item.pgAppLimit) - parseInt(item.pgAppNow)}명
                      (모집인원: {item.pgAppLimit})
                    </li>
                  )}
                  <li className="">장소: {item.pgPlace}</li>
                </ul>
              </div>
              {item.pgIsApply === "0" && item.pgStatus === "inOper" && (
                <button type="button" className="btn-02 ">
                  운영중
                </button>
              )}
              {item.pgIsApply === "0" && item.pgStatus === "endApply" && (
                <button type="button" className="btn-02 gray-btn">
                  예약마감
                </button>
              )}
              {item.pgIsApply === "0" && item.pgStatus === "applying" && (
                <button type="button" className="btn-02 active">
                  예약하기
                </button>
              )}
              {item.pgIsApply === "1" && item.pgStatus === "inOper" && (
                <button type="button" className="btn-02 ">
                  운영중
                </button>
              )}
              {item.pgIsApply === "1" && item.pgStatus === "endApply" && (
                <button type="button" className="btn-02 gray-btn">
                  취소불가
                </button>
              )}
              {item.pgIsApply === "1" && item.pgStatus === "applying" && (
                <button type="button" className="btn-02 active ">
                  <span className="cancel">취소하기</span>
                </button>
              )}
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default BookComponent;
