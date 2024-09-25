import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../Assests/img1.avif'; 
import img2 from '../Assests/img2.jpg'; 
import img3 from '../Assests/img3.jpg'; 
import img4 from '../Assests/img4.jpg'; 
import img5 from '../Assests/img5.jpg'; 

const FeaturedCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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

  const items = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
    { id: 5, src: img5 },

  ];

  return (
    <div className="carousel-container my-8 ">
      <h2 className="text-4xl font-semibold text-center mb-6 text-amber-900">
        Featured Collection
      </h2>
      <Slider {...settings} className="m-9 flex justify-center">
        {items.map((item) => (
           <div className="w-full h-[400px] flex justify-center items-center">
           <img
             className="w-full h-full object-contain"
             src={item.src}
             alt={`Item ${item.id}`}
           />
         </div>
        ))}
      </Slider>
    </div>
  );
};


const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow right-0`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow left-0`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

export default FeaturedCarousel;
