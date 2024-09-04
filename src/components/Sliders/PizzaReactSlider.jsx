import React, { useState } from "react";
import img1 from "../../images/pizzaLogin.png";
import img2 from "../../images/pizzaForm.png";
import img3 from "../../images/pizzaMenu.png";
import img4 from "../../images/pizzaNewOrder.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PizzaReactSlider() {
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    console.log(props);
    return (
      <div className={`${className}`} style={{ ...style }} onClick={onClick} />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={`${className}`} style={{ ...style }} onClick={onClick} />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-[80%] max-w-[1200px]">
        <Slider {...settings}>
          <span className="">
            <img src={img1} alt="item1" />
          </span>
          <span>
            <img src={img2} alt="item2" />
          </span>
          <span>
            <img src={img3} alt="item3" />
          </span>
          <span>
            <img src={img4} alt="item4" />
          </span>
        </Slider>
      </div>
    </div>
  );
}
