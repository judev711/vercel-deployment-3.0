// import React from 'react'
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/Image2.png";
import Image3 from "../../assets/Image1.png";
import Slider from "react-slick";

const Hero = () => {
  const card = [
    {
      id: 1,
      title: "super rentree",
      description: "lycee d'akwa-nord",
      img: Image1,
    },
     {
       id: 1,
       title: "super rentree",
       description: "lycee d'akwa-nord",
       img: Image2,
     },
     {
       id: 1,
       title: "super rentree",
       description: "lycee d'akwa-nord",
       img: Image3,
     },
     {
       id: 1,
       title: "super rentree",
       description: "lycee d'akwa-nord",
       img: Image1
     },
  ];
 var setting = {
  dots: false,
  arrows: true,
  infinite:true,
  speed:3000,
  slidesToScroll:1,
  autoplay: true,
  autoplaySpeed:1000,
  cssEase: "ease-out",
  pauseOnHover: false,
  pauseOnFocus:false,


 };
  return (
    <div className="relative overflow-hidden flex justify-center items-center min-h-[550px] bg-red-600 ">
      <div className="absolute w-[700px] h-[700px] rotate-45 -top-1/2 rounded-3xl bg-primary/40 right-0  "></div>
      <div data-aos="zoom-out" className="container grid grid-cols-1 absolute">
        <Slider {...setting} className="duration-300 transition-all">
        {card.map((data) => (
         <div key={data.id} className=""> 
        <div className="flex flex-row gap-2 items-center   justify-center ">
          <div className="flex flex-col gap-2 max-sm:text-sm sm:text-center md:text-3xl "data-aos="fade-up">
            <h1 className="text-3xl  font-extrabold ">Promotion CYBER PGS</h1>
            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
            <div className="">
              <button className="bg-secondary rounded-full px-3 py-3 text-white font-bold hover:scale-105 duration-300">
                Commandez
              </button>
            </div>
          </div>
          <div className=" ">
            <div className="order order-1">
              <img
                src={Image1}
                className="w-[300px] object-contain max-sm:scale-100 md:scale-125
                 "
              />
            </div>
          </div>
        </div>

        </div>
         ))} 
        </Slider>
      </div>
    </div>
  );
}

export default Hero;
