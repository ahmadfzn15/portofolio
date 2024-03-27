import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="overflow-x-hidden scroll-smooth">
      <Navbar />
      <div className="p-5 h-screen w-screen bg-img"></div>
      <div id="" className="p-5 h-screen w-screen"></div>
      <div
        id=""
        className="p-5 h-screen w-screen flex justify-center items-center"
      >
        <div className="flex flex-col items-center gap-5 w-5/6 sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-2/5">
          <h1 className="text-3xl font-bold tracking-widest">Stay Tuned</h1>
          <p className="text-center">
            Subscribe my newsletter and don't miss any update on new products,
            promotions or even career events.
          </p>
          <input
            type="text"
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
