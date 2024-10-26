// import React from 'react'
import Women1 from "../../assets/Image1.png";
import Women2 from "../../assets/Women2.jpg";
import Women3 from "../../assets/Women3.jpg";
import Women4 from "../../assets/Women4.jpg";
import Women5 from "../../assets/Women5.jpg";
import { FaStar } from "react-icons/fa6";

const Products = () => {
  const data = [
    {
      id: 1,
      img: Women1,
      title: "Printed T-Shirt",
      rating: 5.0,
      aosDelay: 1200,
      color: "red",
    },
    {
      id: 2,
      img: Women2,
      title: "Printed T-Shirt",
      rating: 5.0,
      aosDelay: 1000,
      color: "red",
    },
    {
      id: 3,
      img: Women3,
      title: "Printed T-Shirt",
      rating: 5.0,
      aosDelay: 2000,
      color: "red",
    },
    {
      id: 4,
      img: Women4,
      title: "Printed T-Shirt",
      rating: 5.0,
      delay: 3000,
      color: "red",
    },
    {
      id: 5,
      img: Women5,
      title: "Printed T-Shirt",
      rating: 5.0,
      aosDelay: 4000,
      color: "red",
    },
  ];
  return (
    <div className="">
      <div className="mt-12">
        <div className="container">
          <div className="text-center">
            <p className=" text-sm text-secondary ">Top selling</p>
            <h1 className=" font-bold text-2xl">Products</h1>
            <p className="text-sm text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              optio voluptate.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-4    lg:grid-cols-5  mt-10 place-items-center">
            {data.map((data) => (
              <div data-aos="zoom-in" className="" key={data.id}>
                <div className="">
                  <img
                    src={data.img}
                    className="h-[220px] w-[150px] object-cover rounded-md"
                  />
                </div>
                <div className="mt-3">
                  <p className="font-bold">{data.title}</p>
                  <p className="text-gray-500 font-bold">{data.color}</p>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  <FaStar className="text-secondary" />
                  <p className="font-bold">{data.rating}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
