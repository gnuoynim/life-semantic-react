import React, { useEffect, useState } from "react";
import FrontPainComponent from "./pain/FrontPainComponent";
import BackPainComponent from "./pain/BackPainComponent";

import ImageMapper, { MapAreas } from "@mohamadtsn/react-img-mapper";
import InputElement from "@/components/elements/InputElement";
import useUserHttp from "@hooks/queries/useUserQuery";
import { ListInterface } from "@interfaces/listInterface";
import { UserInterface } from "@interfaces/userInterface";
import $ from "jquery";

const PainComponent = ({ step }: { step: number }) => {
  useEffect(() => {
    $(".pain")
      .off("click")
      .on("click", ".dot", function (event) {
        event.preventDefault();
        console.log(step);
        if (step === 1) {
          $(this).toggleClass("on");
        } else {
          if ($(this).hasClass("on")) {
            if ($(this).hasClass("red")) {
              $(this).removeClass("red");
            } else {
              $(".dot.red").removeClass("red");
              $(this).addClass("red");
            }
          }
        }
      });
  }, [step]);

  return (
    <React.Fragment>
      {step === 1 && (
        <p>
          1. 아픈 부위를 <b>모두</b> 선택해주세요
        </p>
      )}

      {step === 2 && (
        <p>
          2. 제일 아픈 부위를 선택해주세요
          <br />(<b>한 곳만 선택</b>)
        </p>
      )}

      <div className="pain">
        <FrontPainComponent />
        <BackPainComponent />
      </div>
    </React.Fragment>
  );
};

export default PainComponent;
