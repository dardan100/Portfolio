import React from "react";
import img1 from "../../images/mountainAdventureDashboard.png";
import img2 from "../../images/mountainAdventureCabins.png";
import img3 from "../../images/mountainAdventureBookings.png";
import img4 from "../../images/mountainAdventureBookingCabin.png";
import img5 from "../../images/mountainAdventureUpdateAccount.png";
import img6 from "../../images/lightMountainAdventureDashboard.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PizzaReactSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

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
      <div className="w-[80%] ">
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
          <span>
            <img src={img5} alt="item4" />
          </span>
          <span>
            <img src={img6} alt="item4" />
          </span>
        </Slider>
      </div>
    </div>
  );
}
