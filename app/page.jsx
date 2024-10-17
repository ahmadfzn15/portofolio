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

      <div className="w-full h-screen flex justify-start items-center gap-32 px-20">
        <Image src="/assets/profile2.webp" alt="" width={400} height={400} />
        <div className="space-y-5 w-[40%]">
          <h1 className="font-extrabold text-4xl uppercase">
            let's <br /> Introduce about <br /> myself
          </h1>
          <p className="text-gray-500">
            Whose given. Were gathered. There first subdue greater. Bearing you
            Whales heaven midst their. Beast creepeth. Fish days.
          </p>
          <p className="text-gray-500">
            Is give may shall likeness made yielding spirit a itself together
            created after sea is in beast beginning signs open god you're
            gathering whose gathered cattle let. Creature whales fruit unto meat
            the life beginning all in under give two.
          </p>
          <button className="bg-blue-600 text-white hover:transition-all transition-all duration-500 border-2 border-white hover:bg-white hover:text-black hover:border-2 hover:border-blue-600 py-4 px-10 rounded-md text-sm font-bold uppercase">
            Download CV
          </button>
        </div>
      </div>

      <div className="w-full h-screen flex flex-col justify-center items-center gap-20 px-20">
        <div className="space-y-4 text-center w-[50%]">
          <h1 className="font-extrabold text-4xl uppercase">Service Offers</h1>
          <p className="text-gray-500 text-center">
            Is give may shall likeness made yielding spirit a itself togeth
            created after sea is in beast beginning signs open god you're
            gathering ithe
          </p>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <div className="bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-gray-400 hover:transition-all hover:duration-500 transition-all duration-500 p-10 flex flex-col items-center gap-5">
            <h1 className="font-extrabold text-2xl uppercase text-center">
              Web Development
            </h1>
            <p className="text-gray-500 text-center">
              Creeping for female light years that lesser can't evening heaven
              isn't bearing tree
            </p>
          </div>
          <div className="bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-gray-400 hover:transition-all hover:duration-500 transition-all duration-500 p-10 flex flex-col items-center gap-5">
            <h1 className="font-extrabold text-2xl uppercase text-center">
              UI/ux design
            </h1>
            <p className="text-gray-500 text-center">
              Creeping for female light years that lesser can't evening heaven
              isn't bearing tree
            </p>
          </div>
          <div className="bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-gray-400 hover:transition-all hover:duration-500 transition-all duration-500 p-10 flex flex-col items-center gap-5">
            <h1 className="font-extrabold text-2xl uppercase text-center">
              Web design
            </h1>
            <p className="text-gray-500 text-center">
              Creeping for female light years that lesser can't evening heaven
              isn't bearing tree
            </p>
          </div>
          <div className="bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-gray-400 hover:transition-all hover:duration-500 transition-all duration-500 p-10 flex flex-col items-center gap-5">
            <h1 className="font-extrabold text-2xl uppercase text-center">
              Seo optimize
            </h1>
            <p className="text-gray-500 text-center">
              Creeping for female light years that lesser can't evening heaven
              isn't bearing tree
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
