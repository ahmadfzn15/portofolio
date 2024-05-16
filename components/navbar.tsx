"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";

export default function Navbar() {
  const [drawer, setDrawer] = useState(false);
  const route = usePathname();

  const nav = [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/products",
      label: "Products",
    },
    {
      link: "/project",
      label: "Projects",
    },
    {
      link: "/galery",
      label: "Galery",
    },
    {
      link: "/contact",
      label: "Contact",
    },
    {
      link: "/about",
      label: "About",
    },
  ];

  return (
    <div>
      <nav className="h-16 px-5 flex justify-between items-center w-full fixed top-0 z-50 bg-black/30 backdrop-blur-md">
        <h1 className="text-2xl font-thin">Ahmad Fauzan</h1>
        <div className="hidden lg:flex">
          {nav.map((d) => (
            <Link
              href={d.link}
              className={`${
                route == d.link ? "text-white" : "text-slate-400"
              } p-5 hover:text-white`}
            >
              {d.label}
            </Link>
          ))}
        </div>
        <HiMenu
          className={`w-10 h-10 lg:hidden transition-all ${
            drawer ? "opacity-0" : ""
          } text-white cursor-pointer`}
          onClick={() => setDrawer(!drawer)}
        />
      </nav>
      <div
        className={`fixed h-screen bg-black/70 backdrop-blur-md z-50 top-0 p-5 transition-all ${
          drawer ? "right-0" : "-right-full"
        } flex flex-col items-center text-xl`}
      >
        <HiXMark
          className="w-10 h-10 text-white cursor-pointer self-end"
          onClick={() => setDrawer(!drawer)}
        />
        {nav.map((d) => (
          <Link
            href={d.link}
            className={`px-24 py-10 ${
              route == d.link ? "text-white" : "text-slate-400"
            } hover:text-white`}
            onClick={() => setDrawer(false)}
          >
            {d.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
