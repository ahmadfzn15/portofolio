"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Home() {
  const subscribe = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight * 2) {
        gsap.to(subscribe.current, {
          duration: 1,
          y: -25,
          opacity: 1,
        });
      } else {
        gsap.to(subscribe.current, {
          duration: 1,
          y: 25,
          opacity: 0,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="h-screen w-screen grid grid-cols-1 lg:grid-cols-2 lg:pl-20 lg:pr-26 bg-home">
        <div className="lg:flex items-center hidden"></div>
      </div>
      <div className="min-h-screen w-screen flex flex-col items-center gap-5 pt-16 pb-10 px-60">
        <h1 className="text-3xl">Who me?</h1>
        <div className="w-[200px] h-[200px] rounded-full overflow-hidden">
          <img
            src="/img/ahmad.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-center text-lg text-slate-800">
          My name is Ahmad Fauzan, a highly skilled Fullstack Developer based in
          Indonesia, with extensive experience in both web and Android
          development. I have honed my expertise at a leading company, mastering
          a diverse range of technologies including Laravel, ReactJS, NextJS,
          ExpressJS, Flutter, and Kotlin. My proficiency in these cutting-edge
          frameworks and my ability to deliver robust and innovative solutions
          make me an invaluable asset in the tech industry.
        </p>
      </div>
      <div className="h-screen w-screen flex justify-center items-center bg-slate-200"></div>
      <div className="h-3/4 w-screen bg-img flex justify-center items-center">
        <div className="w-2/3">
          <h1 className="text-center text-xl text-white">
            ”Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            dicta iure totam suscipit aut nostrum ea quae quidem, et voluptate”
          </h1>
        </div>
      </div>
      <div className="p-5 h-screen w-screen flex justify-center items-center">
        <div className="flex flex-col items-center mt-[100px] gap-5 w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-2/5">
          <h1 className="lg:text-3xl text-2xl font-bold tracking-widest">
            Stay Tuned
          </h1>
          <p className="text-center text-sm lg:text-base">
            Subscribe to my newsletter and don't miss any updates on new
            products, promotions, or even career events.
          </p>
          <input
            type="email"
            placeholder="Enter your email address . . ."
            className="bg-transparent border border-slate-300 focus:outline-none px-6 py-4 rounded-full w-full"
          />
          <button
            type="submit"
            className="bg-red-600 border border-slate-800 py-4 w-full rounded-full uppercase font-bold tracking-widest active:scale-95 text-white"
          >
            Subscribe me
          </button>
        </div>
      </div>
    </>
  );
}
