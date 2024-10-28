import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center py-16 space-y-5">
      <h1 className="text-2xl uppercase font-bold">Follow me</h1>
      <div className="flex gap-4 justify-center">
        <div className="p-3 rounded-full border-2 border-slate-300 hover:bg-slate-200">
          <FaInstagram className="w-5 h-5" />
        </div>
        <div className="p-3 rounded-full border-2 border-slate-300 hover:bg-slate-200">
          <FaFacebookF className="w-5 h-5" />
        </div>
        <div className="p-3 rounded-full border-2 border-slate-300 hover:bg-slate-200">
          <FaTelegramPlane className="w-5 h-5" />
        </div>
        <div className="p-3 rounded-full border-2 border-slate-300 hover:bg-slate-200">
          <FaDribbble className="w-5 h-5" />
        </div>
        <div className="p-3 rounded-full border-2 border-slate-300 hover:bg-slate-200">
          <FaLinkedinIn className="w-5 h-5" />
        </div>
      </div>
      <h1 className="text-sm text-slate-500 pt-5">
        Copyright ©2024 All rights reserved
      </h1>
    </footer>
  );
}
