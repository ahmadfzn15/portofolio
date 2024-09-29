import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-[70vh] w-full px-20 flex justify-between items-center">
        <div className="flex flex-col gap-5">
          <h1 className="font-extrabold text-4xl uppercase">Hello</h1>
          <h1 className="font-extrabold text-7xl uppercase">I'am ahmad</h1>
          <h1 className="font-extrabold text-2xl uppercase">
            Senior mobile developer
          </h1>
          <div className="space-x-5">
            <button className="bg-blue-600 text-white hover:transition-all transition-all duration-500 border-2 border-white hover:bg-white hover:text-black hover:border-2 hover:border-blue-600 py-4 px-10 rounded-md text-sm font-bold uppercase">
              Hire me
            </button>
            <button className="hover:bg-blue-600 hover:text-white bg-white text-black border-2 duration-500 border-blue-600 hover:transition-all transition-all py-4 px-10 rounded-md text-sm font-bold uppercase">
              Get CV
            </button>
          </div>
        </div>

        <Image
          src="/assets/profile.webp"
          alt=""
          width={400}
          height={400}
          className="self-end"
        />
      </div>
    </>
  );
}
