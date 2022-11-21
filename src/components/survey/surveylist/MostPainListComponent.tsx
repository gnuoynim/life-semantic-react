import React, { useEffect, useState } from "react";
import RangeComponent from "../todaySurvey/RangeComponent";
import $ from "jquery";


const MostPainListComponent = () => {
  const dots = ["foreHead", ""];
  const [painColor, setPainColor] = useState<number[]>([]);

  useEffect(() => {
    setPainColor(Array.from(Array($(".dot").length)).map((i) => 0));
    $(".pain")
      .off("click")
      .on("click", ".dot", function () {
        console.log($(this).index());
      });
  }, []);

  console.log(painColor);

  return (
    <React.Fragment>
      <p>
        3. <strong>오른쪽 발목</strong>의 통증을 나타내는 숫자   <br />
     에 표시해주세요
      </p>
      <span>(좌우로 동그라미를 움직여주세요.)</span>
      <RangeComponent />
    </React.Fragment>
  );
};

export default MostPainListComponent;
