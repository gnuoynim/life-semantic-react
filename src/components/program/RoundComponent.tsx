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
    roundNumber: number,
    backgroundColor: string,
    color: string
  ) => {
    event.preventDefault();

    const target = event.target as HTMLDivElement;
    target.parentElement
      ?.querySelectorAll<HTMLDivElement>(".swiper-slide")
      .forEach((item) => {
        item.style.backgroundColor = "#f3f3f3";
        item.style.color = "#8f8f8f";
      });

    target.style.backgroundColor = backgroundColor;
    target.style.color = color;

    setRoundDetail(roundNumber);
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
          onClick={(event) => setDetail(event, 1, "#41b946", "#fff")}
        >
          1회기
        </SwiperSlide>
        <SwiperSlide
          className="roundNumber"
          onClick={(event) => setDetail(event, 1, "#41b946", "#fff")}
        >
          1회기
        </SwiperSlide>
        <SwiperSlide
          className="roundNumber"
          onClick={(event) => setDetail(event, 2, "#41b946", "#fff")}
        >
          2회기
        </SwiperSlide>
        <SwiperSlide
          className="roundNumber"
          onClick={(event) => setDetail(event, 3, "#41b946", "#fff")}
        >
          3회기
        </SwiperSlide>
        <SwiperSlide
          className="roundNumber"
          onClick={(event) => setDetail(event, 4, "#41b946", "#fff")}
        >
          4회기
        </SwiperSlide>
        <SwiperSlide
          className="roundNumber"
          onClick={(event) => setDetail(event, 5, "#41b946", "#fff")}
        >
          5회기
        </SwiperSlide>
        <SwiperSlide
          className="roundNumber"
          onClick={(event) => setDetail(event, 6, "#41b946", "#fff")}
        >
          6회기
        </SwiperSlide>
      </Swiper>

      <ProgramNumberDetailComponent roundDetail={roundDetail} />
    </React.Fragment>
  );
};

export default RoundComponent;
