"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import { Link } from "react-scroll";

export default function Navbar() {
  const [drawer, setDrawer] = useState(false);
  const route = usePathname();

  const navItems = [
    { label: "About", to: "about" },
    { label: "Experience", to: "experience" },
    { label: "Projects", to: "projects" },
    { label: "Gallery", to: "gallery" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <div>
      <nav className="h-16 px-5 flex justify-between items-center w-full fixed top-0 z-50 bg-black backdrop-blur-md">
        <Link className="text-xl">Ahmad Fauzan</Link>
        <div className="hidden lg:flex">
          {navItems.map((d) => (
            <Link
              key={d.to}
              to={d.to}
              smooth={true}
              duration={500}
              className="p-5"
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
        {navItems.map((d) => (
          <Link
            key={d.to}
            to={d.to}
            smooth={true}
            duration={500}
            onClick={() => setDrawer(false)}
          >
            {d.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
