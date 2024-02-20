import React from "react";

import ColorButton from "./ColorButton"

import heroImg from "../assets/home-hero.jpg";
import heroImgMobile from "../assets/home-hero-mobile.jpg";

import { AiFillStar } from 'react-icons/ai'
const HomeHero = () => {
  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-black">
      {/* bg-cover bg-center bg-hero animate-background-zoom */}
      <img
        src={heroImg}
        alt=""
        className="absolute hidden lg:block animate-background-zoom h-full object-cover z-0"
      />
      <img
        src={heroImgMobile}
        alt=""
        className="absolute lg:hidden animate-background-zoom h-full object-cover z-0"
      />
      <div className="absolute z-5 w-full h-full bg-black/40">
        <div className="max-w-5xl mx-auto px-5 pt-20 lg:pt-28 flex flex-col justify-center h-full lg:flex-row lg:items-center gap-10">
          <div className="lg:w-7/12 flex flex-col gap-4">
            <div className="flex gap-1 text-primaryClr bg-white/50 w-fit p-1 rounded-full">
              <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
            </div>
            <div className="text-left text-3xl lg:text-5xl font-btnFont text-white font-normal">Welcome to Kiril's Place <br /> 5 Star Hotel</div>
            <div className="text-left text-md w-11/12 text-white font-normal  hidden lg:block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nesciunt incidunt aliquid quis provident</div>
          </div>
          <div className="max-w-lg mx-auto lg:w-5/12 bg-blackClr p-5 flex flex-col gap-6 lg:gap-8">
            <div>
              <label htmlFor="" className="text-white flex flex-col gap-2 text-left font-normal w-full">
                Check-in
                <input type="date" name="" id="" className="bg-lightBlackClr h-8 lg:h-10 py-1 px-3 w-full"/>
              </label>
            </div>
            <div>
              <label htmlFor="" className="text-white flex flex-col gap-2 text-left font-normal w-full">
                Check-out
                <input type="date" name="" id="" className="bg-lightBlackClr h-8 lg:h-10 py-1 px-3 w-full"/>
              </label>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
              <div>
                <label htmlFor="" className="text-white flex flex-col gap-2 text-left font-normal">
                  Adults
                  <input type="number" name="" id="" className="bg-lightBlackClr h-8 lg:h-10 py-1 px-3"/>
                </label>
              </div>
              <div>
                <label htmlFor="" className="text-white flex flex-col gap-2 text-left font-normal">
                  Children
                  <input type="number" name="" id="" className="bg-lightBlackClr h-8 lg:h-10 py-1 px-3"/>
                </label>
              </div>
            </div>
            <div className="m-5">
              <ColorButton  text="search" link="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
