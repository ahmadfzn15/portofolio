"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";

export default function Navbar() {
  const [drawer, setDrawer] = useState(false);

  return (
    <div>
      <nav className="h-16 px-5 flex justify-between items-center w-full fixed top-0 z-50 bg-black">
        <div className="">
          <h1 className="text-2xl font-thin">Ahmad Fauzan</h1>
        </div>
        <div className="hidden lg:flex">
          <Link href="/" className="p-5">
            Home
          </Link>
          <Link href="/products" className="p-5">
            Products
          </Link>
          <Link href="/project" className="p-5">
            Project
          </Link>
          <Link href="/galery" className="p-5">
            Galery
          </Link>
          <Link href="/contact" className="p-5">
            Contact
          </Link>
          <Link href="/about" className="p-5">
            About
          </Link>
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
          Galery
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
