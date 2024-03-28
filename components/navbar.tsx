"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";

export default function Navbar() {
  const [drawer, setDrawer] = useState(false);

  return (
    <div>
      <nav className="flex justify-between items-center w-full p-5 fixed top-0 z-50">
        <div className="">
          <h1 className="text-2xl font-thin">Ahmad Fauzan</h1>
        </div>
        <div className="hidden lg:flex">
          <a href="#" className="px-10">
            Home
          </a>
          <a href="#project" className="px-10">
            Project
          </a>
          <a href="#contact" className="px-10">
            Contact
          </a>
          <a href="#about" className="px-10">
            About
          </a>
        </div>
        <HiMenu
          className={`w-10 h-10 lg:hidden transition-all ${
            drawer ? "opacity-0" : ""
          } text-white cursor-pointer`}
          onClick={() => setDrawer(!drawer)}
        />
      </nav>
      <div
        className={`fixed h-screen bg-black/70 z-50 top-0 p-5 transition-all ${
          drawer ? "right-0" : "-right-full"
        } flex flex-col items-center text-xl`}
      >
        <HiXMark
          className="w-10 h-10 text-white cursor-pointer self-end"
          onClick={() => setDrawer(!drawer)}
        />
        <Link href="/" className="px-24 py-10" onClick={() => setDrawer(false)}>
          Home
        </Link>
        <Link href="/" className="px-24 py-10" onClick={() => setDrawer(false)}>
          Project
        </Link>
        <Link href="/" className="px-24 py-10" onClick={() => setDrawer(false)}>
          Contact
        </Link>
        <Link href="/" className="px-24 py-10" onClick={() => setDrawer(false)}>
          About
        </Link>
      </div>
    </div>
  );
}
