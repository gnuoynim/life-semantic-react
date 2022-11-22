import React, { useEffect, useState } from 'react';
import ProgramNumberDetailComponent from './ProgramNumberDetailComponent';
import useUserHttp from '@hooks/queries/useUserQuery';
import { ListInterface } from '@interfaces/listInterface';
import { UserInterface } from '@interfaces/userInterface';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const RoundTextComponent = () => {
  const [roundDetails, setRoundDetails] = useState<number[]>([]);

  useEffect(() => {
    const totalRound = document.querySelector('.roundNumber') as HTMLDivElement;
    totalRound.click();
  }, []);

  const setDetail = (
    event: React.MouseEvent<HTMLElement>,
    roundNumber: number,
    backgroundColor: string,
    color: string,

  ) => {
    event.preventDefault();

    const target = event.target as HTMLDivElement;
    target.parentElement
      ?.querySelectorAll<HTMLDivElement>('.swiper-slide')
      .forEach((item) => {
        item.style.backgroundColor = '#f3f3f3';
        item.style.color = '#000';
      });

    target.style.backgroundColor = backgroundColor;
    target.style.color = color;
 

    setRoundDetails(roundNumber === 0 ? [1, 2, 3, 4, 5, 6] : [roundNumber]);
  };

  return (
    <React.Fragment>
      <Swiper
        spaceBetween={10}
        slidesPerView={'auto'}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide
          className="roundNumber"
          onClick={(event) => setDetail(event, 0, '#41b946', '#fff')}
        >
          전체
        </SwiperSlide>
        <SwiperSlide
          className="roundNumber"
          onClick={(event) => setDetail(event, 1, '#41b946', '#fff')}
        >
         서울
        </SwiperSlide>
        <SwiperSlide
          className="roundNumber"
          onClick={(event) => setDetail(event, 2, '#41b946', '#fff')}
        >
          인천
        </SwiperSlide>
        <SwiperSlide
          className="roundNumber"
          onClick={(event) => setDetail(event, 3, '#41b946', '#fff')}
        >
          가평
        </SwiperSlide>
        <SwiperSlide
          className="roundNumber"
          onClick={(event) => setDetail(event, 4, '#41b946', '#fff')}
        >
          장흥
        </SwiperSlide>
        <SwiperSlide
          className="roundNumber"
          onClick={(event) => setDetail(event, 5, '#41b946', '#fff')}
        >
          산음
        </SwiperSlide>
        <SwiperSlide
          className="roundNumber"
          onClick={(event) => setDetail(event, 6, '#41b946', '#fff')}
        >
          장성
        </SwiperSlide>
        <SwiperSlide
          className="roundNumber"
          onClick={(event) => setDetail(event, 6, '#41b946', '#fff')}
        >
          청태산
        </SwiperSlide>
        <SwiperSlide
          className="roundNumber"
          onClick={(event) => setDetail(event, 6, '#41b946', '#fff')}
        >
          대관령
        </SwiperSlide>
      </Swiper>
    </React.Fragment>
  );
};

export default RoundTextComponent;
