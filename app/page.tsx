"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Carousel, ThemeProvider } from "@material-tailwind/react";
import gsap from "gsap";
import { Poppins } from "next/font/google";
import { useEffect, useRef } from "react";

const poppins = Poppins({ weight: "300", subsets: ["latin"] });

export default function Home() {
  const subscribe = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY >= innerHeight * 2) {
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

    addEventListener("scroll", handleScroll);
    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="overflow-x-hidden scroll-smooth">
      <Navbar />
      <div className="p-5 h-screen w-screen bg-img"></div>
      <div id="" className="h-screen w-screen">
        <Carousel
          autoplay
          loop
          autoplayDelay={3000}
          transition={{ type: "tween", duration: 1 }}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <div className="relative overflow-hidden w-screen h-screen">
            <img src="/img/img2.jpg" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/75 flex justify-center items-center">
              <h1 className={`font-bold text-3xl ${poppins.className}`}>
                Coding Life
              </h1>
            </div>
          </div>
          <div className="relative overflow-hidden w-screen h-screen">
            <img src="/img/img2.jpg" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/75 flex justify-center items-center">
              <h1 className="font-bold text-3xl">Coding Life</h1>
            </div>
          </div>
          <div className="relative overflow-hidden w-screen h-screen">
            <img src="/img/img2.jpg" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/75 flex justify-center items-center">
              <h1 className="font-bold text-3xl">Coding Life</h1>
            </div>
          </div>
        </Carousel>
      </div>
      <div
        id=""
        className="p-5 h-screen w-screen flex justify-center items-center"
      >
        <div
          ref={subscribe}
          className="flex flex-col items-center mt-[100px] opacity-0 gap-5 w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-2/5"
        >
          <h1 className="lg:text-3xl text-2xl font-bold tracking-widest">
            Stay Tuned
          </h1>
          <p className="text-center text-sm lg:text-base">
            Subscribe my newsletter and don't miss any update on new products,
            promotions or even career events.
          </p>
          <input
            type="email"
            placeholder="Enter your email address . . ."
            className="bg-transparent border border-slate-800 focus:outline-none px-6 py-4 rounded-full w-full"
          />
          <button
            type="submit"
            className="bg-red-600 border border-slate-800 py-4 w-full rounded-full uppercase font-bold tracking-widest active:scale-95"
          >
            Subscribe me
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
