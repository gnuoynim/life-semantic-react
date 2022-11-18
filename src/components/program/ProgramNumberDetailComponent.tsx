import React from "react";

const ProgramNumberDetailComponent = ({roundDetail}:{roundDetail: number}) => {
  return (
    <React.Fragment>
      <div className="round">
        <div className="roundItem">
          <p>{roundDetail}회기 헬로우 피로</p>
          <ul>
            <li>
              일시 : <span>8/15 월 10:00~12:00</span>
            </li>
            <li>
              장소 : <span>서울 안산도시자연공원</span>
            </li>
            <li>
              세부활동 :
              <span>
                숲 만나기, 내 몸 지도 그리기, 자연이름 만들기, 숲길 걷기, 나무
                스트레칭, 숲 나누기
              </span>
            </li>
            <li>
              준비물 : <span>필기구, 수첩(몸 지도), 명찰 카드</span>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProgramNumberDetailComponent;
