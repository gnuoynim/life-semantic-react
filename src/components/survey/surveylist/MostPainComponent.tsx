import React, { useEffect, useState } from "react";
import FrontPainComponent from "./pain/FrontPainComponent";
import BackPainComponent from "./pain/BackPainComponent";

import ImageMapper, { MapAreas } from "@mohamadtsn/react-img-mapper";
import InputElement from "@/components/elements/InputElement";
import useUserHttp from "@hooks/queries/useUserQuery";
import { ListInterface } from "@interfaces/listInterface";
import { UserInterface } from "@interfaces/userInterface";
import $ from "jquery";

const MostPainComponent = () => {
  const dots = ["foreHead", ""];
  const [painColor, setPainColor] = useState<number[]>([]);

  useEffect(() => {
    setPainColor(Array.from(Array($(".dot").length)).map((i) => 0));
    $(".pain")
      .off("click")
      .on("click", ".dot", function (event) {
        event.preventDefault();
        if (!isCritical) {
          $(this).toggleClass("on");
        } else {
          if ($(this).hasClass("on")) {
            $(this).toggleClass("red");
          }
        }
      });
  }, []);

  console.log(painColor);

  return (
    <React.Fragment>
      <p>
        2. 제일 아픈 부위를 선택해주세요
        <br />(<b>한 곳만 선택</b>)
      </p>
      <div className="pain">
        <FrontPainComponent isCritical={true} />
        <BackPainComponent />
      </div>
    </React.Fragment>
  );
};

export default MostPainComponent;
