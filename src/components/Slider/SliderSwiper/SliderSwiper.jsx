import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Button from "../../ButtonPrimary";

import Slider1 from "../../../assets/slider/slider1.png";
import styled from "styled-components";

const SliderWrap = styled.div`
  padding: 6.25rem 0 0 0;

  .swiper-horizontal {
    height: 40rem;
  }
  .swiper-button-prev {
    left: var(--swiper-navigation-sides-offset, 59rem);
    top: 38rem;
  }
  .swiper-button-next {
    right: var(--swiper-navigation-sides-offset, 53rem);
    top: 38rem;
  }
`;
const SliderItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 17.7rem;
  height: 25rem;
  border-radius: 23.479px;
  background: var(--others-white, #fff);
  box-shadow: 38.81659px 11.7626px 58.81301px 0px rgba(199, 199, 199, 0.6);
  padding: 1.25rem 1.25rem;
  img {
    width: 17.5rem;
    height: 17.5rem;
    flex-shrink: 0;
    border-radius: 23.479px;
  }
`;
const SliderText = styled.div`
  color: #141416;
  font-family: Poppins, sans-serif;
  font-size: 1.31rem;
  font-weight: 600;
  line-height: 140%;
  margin-top: 1.25rem;
`;
const SliderPrice = styled.div`
  display: flex;
  margin-top: 1.25rem;
`;
const SliderDescr = styled.a`
  color: #141416;
  font-family: Poppins, sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin-right: 2.5rem;
`;
const Slider = () => {
  return (
    <SliderWrap>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={200}
        slidesPerView={6}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <SliderItem>
            <img src={Slider1} alt="" />
            <SliderText>Sun-Glass</SliderText>
            <SliderPrice>
              <SliderDescr>Current bid</SliderDescr>
              <Button />
            </SliderPrice>
          </SliderItem>
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem>
            <img src={Slider1} alt="" />
            <SliderText>Sun-Glass</SliderText>
            <SliderPrice>
              <SliderDescr>Current bid</SliderDescr>
              <Button />
            </SliderPrice>
          </SliderItem>
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem>
            <img src={Slider1} alt="" />
            <SliderText>Sun-Glass</SliderText>
            <SliderPrice>
              <SliderDescr>Current bid</SliderDescr>
              <Button />
            </SliderPrice>
          </SliderItem>
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem>
            <img src={Slider1} alt="" />
            <SliderText>Sun-Glass</SliderText>
            <SliderPrice>
              <SliderDescr>Current bid</SliderDescr>
              <Button />
            </SliderPrice>
          </SliderItem>
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem>
            <img src={Slider1} alt="" />
            <SliderText>Sun-Glass</SliderText>
            <SliderPrice>
              <SliderDescr>Current bid</SliderDescr>
              <Button />
            </SliderPrice>
          </SliderItem>
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem>
            <img src={Slider1} alt="" />
            <SliderText>Sun-Glass</SliderText>
            <SliderPrice>
              <SliderDescr>Current bid</SliderDescr>
              <Button />
            </SliderPrice>
          </SliderItem>
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem>
            <img src={Slider1} alt="" />
            <SliderText>Sun-Glass</SliderText>
            <SliderPrice>
              <SliderDescr>Current bid</SliderDescr>
              <Button />
            </SliderPrice>
          </SliderItem>
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem>
            <img src={Slider1} alt="" />
            <SliderText>Sun-Glass</SliderText>
            <SliderPrice>
              <SliderDescr>Current bid</SliderDescr>
              <Button />
            </SliderPrice>
          </SliderItem>
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem>
            <img src={Slider1} alt="" />
            <SliderText>Sun-Glass</SliderText>
            <SliderPrice>
              <SliderDescr>Current bid</SliderDescr>
              <Button />
            </SliderPrice>
          </SliderItem>
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem>
            <img src={Slider1} alt="" />
            <SliderText>Sun-Glass</SliderText>
            <SliderPrice>
              <SliderDescr>Current bid</SliderDescr>
              <Button />
            </SliderPrice>
          </SliderItem>
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem>
            <img src={Slider1} alt="" />
            <SliderText>Sun-Glass</SliderText>
            <SliderPrice>
              <SliderDescr>Current bid</SliderDescr>
              <Button />
            </SliderPrice>
          </SliderItem>
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem>
            <img src={Slider1} alt="" />
            <SliderText>Sun-Glass</SliderText>
            <SliderPrice>
              <SliderDescr>Current bid</SliderDescr>
              <Button />
            </SliderPrice>
          </SliderItem>
        </SwiperSlide>
      </Swiper>
    </SliderWrap>
  );
};

export default Slider;
