import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useEffect, useRef } from "react";
import useUserHttp from "@hooks/queries/useUserQuery";
import { ListInterface } from "@interfaces/listInterface";
import { UserInterface } from "@interfaces/userInterface";
import "swiper/css";
const RangeComponent = () => {
  return (
    <React.Fragment>
      <Slider
        min={0}
        defaultValue={0}
        marks={{
          0: 0,
          10: 1,
          20: 2,
          30: 3,
          40: 4,
          50: 5,
          60: 6,
          70: 7,
          80: 8,
          90: 9,
          100: 10,
        }}
        step={null}
        onChange={(value) =>
          (document.querySelector(".rc-slider-handle")!.textContent = (
            value as number / 10
          ).toString())
        }
      />
    </React.Fragment>
  );
};

export default RangeComponent;
