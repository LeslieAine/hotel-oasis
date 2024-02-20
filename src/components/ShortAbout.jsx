import React from "react";

import BorderButton from "./BorderButton";

import { FaShuttleVan, FaSwimmingPool } from "react-icons/fa";
import { MdOutlineRoomService } from "react-icons/md";
import { GiVideoCamera } from "react-icons/gi";

import img1 from "../assets/short-about-1.jpg";
import img2 from "../assets/short-about-2.jpg";

const ShortAbout = () => {
  let services = [
    {
      name: "Airport transfer",
      icon: <FaShuttleVan />,
    },
    {
      name: "All Inclusive",
      icon: <MdOutlineRoomService />,
    },
    {
      name: "Swiming Pool",
      icon: <FaSwimmingPool />,
    },
    {
      name: "Video surveilance",
      icon: <GiVideoCamera />,
    },
  ];
  return (
    <div className="bg-blackClr">
      <div className="max-w-5xl px-5 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 justify-between -top-12 relative">
        {services.map((service) => (
          <div
            key={service.name}
            className="bg-black text-white flex flex-col items-center justify-center p-5 gap-2 h-24"
          >
            <div className="text-4xl">{service.icon}</div>
            <div>{service.name}</div>
          </div>
        ))}
      </div>
      <div className="max-w-5xl  px-5 mx-auto flex gap-5 flex-wrap">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="lg:w-1/2">
            <img src={img1} alt="lobby" className="w-full overflow-hidden"/>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 w-full lg:w-1/2 ">
            <div className="text-4xl text-left w-full font-btnFont text-white">We have 17+ years of Experience</div>
            <div className="text-left text-fontClrGrey font-normal">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
              consequatur quos dolore! Laudantium, impedit maiores odit nemo
              necessitatibus consequatur distinctio delectus vel ratione quis.
              Quae assumenda quaerat facere illum mollitia.
            </div>
            <div className="flex items-left w-full my-5">
                <BorderButton text="more about us" link="/"/>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-5">
          <div className="flex flex-col items-center justify-center gap-5 w-full lg:w-1/2 ">
            <div  className="text-4xl text-left w-full font-btnFont text-white">Start your Amazing Adventure!</div>
            <div className="text-left text-fontClrGrey font-normal">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
              consequatur quos dolore! Laudantium, impedit maiores odit nemo
              necessitatibus consequatur distinctio delectus vel ratione quis.
              Quae assumenda quaerat facere illum mollitia.
            </div>
            <div className="flex items-left w-full my-5">
                <BorderButton text="choose a room" link="/"/>
            </div>
          </div>
          <div  className="lg:w-1/2">
            <img src={img2} alt=""  className="w-full overflow-hidden"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortAbout;
