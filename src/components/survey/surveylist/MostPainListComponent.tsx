import React, { useEffect, useState } from "react";
import FrontPainComponent from "./pain/FrontPainComponent";
import BackPainComponent from "./pain/BackPainComponent";
import RangeArrowComponent from "../todaySurvey/RangeArrowComponent ";
import RangeComponent from "../todaySurvey/RangeComponent";
import InputElement from "@/components/elements/InputElement";
import useUserHttp from "@hooks/queries/useUserQuery";
import { ListInterface } from "@interfaces/listInterface";
import { UserInterface } from "@interfaces/userInterface";
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
      <RangeArrowComponent left="통증없음" right="극도의 통증" />
    </React.Fragment>
  );
};

export default MostPainListComponent;
