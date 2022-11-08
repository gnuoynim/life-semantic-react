import React, { useState } from "react";
import ProgramNumberDetailComponent from "./ProgramNumberDetailComponent";
import useUserHttp from "@hooks/queries/useUserQuery";
import { ListInterface } from "@interfaces/listInterface";
import { UserInterface } from "@interfaces/userInterface";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const RoundComponent = () => {
  const [roundDetail, setRoundDetail] = useState(0);

  const setDetail = (
    event: React.MouseEvent<HTMLElement>,
    roundNmber: number,
    color: string
  ) => {
    event.preventDefault();

    const target = event.target as HTMLDivElement;
    target.parentElement
      ?.querySelectorAll<HTMLDivElement>(".swiper-slide")
      .forEach((item) => (item.style.backgroundColor = "transparent"));
    target.style.backgroundColor = color;

    setRoundDetail(roundNmber);
  };

  return (
    <React.Fragment>
      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide
          className="roundNumber"
          onClick={(event) => setDetail(event, 1, "red")}
        >
          1회기
        </SwiperSlide>
        <SwiperSlide
          className="roundNumber"
          onClick={(event) => setDetail(event, 2, "red")}
        >
          2회기
        </SwiperSlide>
        <SwiperSlide
          className="roundNumber"
          onClick={(event) => setDetail(event, 3, "red")}
        >
          3회기
        </SwiperSlide>
        <SwiperSlide
          className="roundNumber"
          onClick={(event) => setDetail(event, 4, "red")}
        >
          4회기
        </SwiperSlide>
        <SwiperSlide
          className="roundNumber"
          onClick={(event) => setDetail(event, 5, "red")}
        >
          5회기
        </SwiperSlide>
        <SwiperSlide
          className="roundNumber"
          onClick={(event) => setDetail(event, 6, "red")}
        >
          6회기
        </SwiperSlide>
      </Swiper>

      <ProgramNumberDetailComponent roundDetail={roundDetail} />
    </React.Fragment>
  );
};

export default RoundComponent;
