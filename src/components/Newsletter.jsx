import React from "react";

import BorderButton from "./BorderButton";

import img1 from "../assets/newsletter-1.jpg";
import img2 from "../assets/newsletter-2.jpg";
import img3 from "../assets/newsletter-3.jpg";
import avatar1 from "../assets/avatar-1.jpg";

const Newsletter = () => {
  let posts = [
    {
      url: img1,
      userName: "Beshteya",
      userAvatar: avatar1,
      date: "December 21, 2021",
      title: "The Ultimate Guide to Traveling When You Have...",
      paragraph:
        "Image for cattle earth. May one Which life divide sea. Commodi soluta minima nemo,…",
    },
    {
      url: img2,
      userName: "Beshteya",
      userAvatar: avatar1,
      date: "December 21, 2021",
      title: "The Best Travel Insurance Companies for Seniors",
      paragraph:
        "Image for cattle earth. May one Which life divide sea. Commodi soluta minima nemo,…",
    },
    {
      url: img3,
      userName: "Beshteya",
      userAvatar: avatar1,

      date: "December 21, 2021",
      title: "18 Easy Steps for Planning Your Next Trip",
      paragraph:
        "Image for cattle earth. May one Which life divide sea. Commodi soluta minima nemo,…",
    },
  ];
  return (
    <div className="bg-mediumBlackClr">
      <div className=" pt-20 pb-4 px-5 max-w-5xl mx-auto flex flex-col lg:flex-row items-start justify-between">
        <div>
          <div className="text-4xl lg:text-6xl text-left w-full font-btnFont text-white pb-5">
            Our Newsletter
          </div>
          <div className="text-left text-fontClrGrey font-semibold mb-10 w-full lg:w-3/4">
            Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
            fugit ea delectus, sed voluptatem.
          </div>
        </div>
        <BorderButton text="all publications" link="/" />
      </div>
      <div className="px-5 pb-10 grid grid-cols-1 lg:grid-cols-3 max-w-5xl mx-auto gap-3">
        {posts.map((post) => (
          <div className="max-w-xl group" key={post.title}>
            <div className="h-40 overflow-hidden">
              <img
                src={post.url}
                alt=""
                className="group-hover:scale-110 duration-500"
              />
            </div>
            <div className="flex flex-row p-5 justify-between">
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src={post.userAvatar}
                    alt="avatar"
                    className="w-10 h-10 rounded-full scale-150"
                  />
                </div>
                <div className="font-normal text-white text-sm">{post.userName}</div>
              </div>
              <div className="font-normal text-white text-sm flex items-center">{post.date}</div>
            </div>
            <div className="text-white font-semibold font-btnFont text-2xl px-5 text-left">{post.title}</div>
            <div className="font-normal text-lg text-fontClrGrey px-5 text-justify p-5">{post.paragraph}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newsletter;
