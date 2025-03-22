import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {
  const fileUrl = "/file/cv.pdf";

  return (
    <>
      <div className="h-[70vh] w-full px-20 flex justify-between items-center">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-5">
            <h1 className="font-extrabold text-4xl uppercase">Hello</h1>
            <div className="w-[300px] h-0.5 bg-gray-600"></div>
          </div>
          <h1 className="font-extrabold text-7xl uppercase">I'am ahmad</h1>
          <h1 className="font-extrabold text-2xl uppercase">
            Fullstack developer
          </h1>
          <div className="space-x-5">
            <button className="bg-blue-600 text-white hover:transiteion-all transition-all duration-500 border-2 border-white hover:bg-white hover:text-black hover:border-2 hover:border-blue-600 py-4 px-10 rounded-md text-sm font-bold uppercase">
              Hire me
            </button>
            <a href={fileUrl} download="ahmadfauzan.pdf">
              <button className="hover:bg-blue-600 hover:text-white bg-white text-black border-2 duration-500 border-blue-600 hover:transition-all transition-all py-4 px-10 rounded-md text-sm font-bold uppercase">
                Get CV
              </button>
            </a>
          </div>
        </div>

        <div className="mt-20">
          <Image
            src="/assets/profile.webp"
            alt=""
            width={450}
            height={450}
            className="self-end"
          />
        </div>
      </div>

      <div
        id="about"
        className="w-full h-screen flex justify-start items-center gap-32 px-20 pt-40"
      >
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

      <div
        id="skills"
        className="w-full h-screen flex flex-col justify-center items-center gap-20 px-20 pt-40"
      >
        <div className="space-y-4 text-center w-[50%]">
          <h1 className="font-extrabold text-4xl uppercase">Skills</h1>
          <p className="text-gray-500 text-center">
            I've been doing web and android development for about 3 years now,
            and I'm always eager to learn more in this fast paced industry.
          </p>
        </div>
        <div className="grid grid-cols-1">
          <div className="">
            <h1 className="text-xl text-slate-700 uppercase">
              Technology that i often use :
            </h1>
            <div className="grid grid-cols-4 gap-3">
              <div className="flex justify-center items-center p-2 hover:transition-all transition-all hover:shadow-lg hover:shadow-slate-300">
                <img src="/assets/logo/flutter.png" className="w-28" />
              </div>
              <div className="flex justify-center items-center p-2 hover:transition-all transition-all hover:shadow-lg hover:shadow-slate-300">
                <img src="/assets/logo/kotlin.png" className="w-28" />
              </div>
              <div className="flex justify-center items-center p-2 hover:transition-all transition-all hover:shadow-lg hover:shadow-slate-300">
                <img src="/assets/logo/laravel.png" className="w-28" />
              </div>
              <div className="flex justify-center items-center p-2 hover:transition-all transition-all hover:shadow-lg hover:shadow-slate-300">
                <img src="/assets/logo/nextjs.png" className="w-28" />
              </div>
              <div className="flex justify-center items-center p-2 hover:transition-all transition-all hover:shadow-lg hover:shadow-slate-300">
                <img src="/assets/logo/node.png" className="w-28" />
              </div>
              <div className="flex justify-center items-center p-2 hover:transition-all transition-all hover:shadow-lg hover:shadow-slate-300">
                <img src="/assets/logo/reactjs.png" className="w-28" />
              </div>
              <div className="flex justify-center items-center p-2 hover:transition-all transition-all hover:shadow-lg hover:shadow-slate-300">
                <img src="/assets/logo/php.png" className="w-28" />
              </div>
              <div className="flex justify-center items-center p-2 hover:transition-all transition-all hover:shadow-lg hover:shadow-slate-300">
                <img src="/assets/logo/js.webp" className="w-28" />
              </div>
              <div className="flex justify-center items-center p-2 hover:transition-all transition-all hover:shadow-lg hover:shadow-slate-300">
                <img src="/assets/logo/html.png" className="w-28" />
              </div>
              <div className="flex justify-center items-center p-2 hover:transition-all transition-all hover:shadow-lg hover:shadow-slate-300">
                <img src="/assets/logo/css.png" className="w-28" />
              </div>
              <div className="flex justify-center items-center p-2 hover:transition-all transition-all hover:shadow-lg hover:shadow-slate-300">
                <img src="/assets/logo/tailwind.png" className="w-28" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="services"
        className="w-full h-screen flex flex-col justify-center items-center gap-20 px-20 pt-40"
      >
        <div className="space-y-4 text-center w-[50%]">
          <h1 className="font-extrabold text-4xl uppercase">Service Offers</h1>
          <p className="text-gray-500 text-center">
            Is give may shall likeness made yielding spirit a itself togeth
            created after sea is in beast beginning signs open god you're
            gathering ithe
          </p>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <div className="bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-gray-400 hover:transition-all hover:duration-500 transition-all duration-500 p-5 flex flex-col items-center gap-5">
            <Image src="/assets/logo/mouse.webp" width="70" height="70" />
            <h1 className="font-extrabold text-xl uppercase text-center">
              Web Development
            </h1>
            <p className="text-gray-500 text-sm text-center">
              Creeping for female light years that lesser can't evening heaven
              isn't bearing tree
            </p>
          </div>
          <div className="bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-gray-400 hover:transition-all hover:duration-500 transition-all duration-500 p-5 flex flex-col items-center gap-5">
            <Image src="/assets/logo/dev.webp" width="70" height="70" />
            <h1 className="font-extrabold text-xl uppercase text-center">
              Mobile Development
            </h1>
            <p className="text-gray-500 text-sm text-center">
              Creeping for female light years that lesser can't evening heaven
              isn't bearing tree
            </p>
          </div>
          <div className="bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-gray-400 hover:transition-all hover:duration-500 transition-all duration-500 p-5 flex flex-col items-center gap-5">
            <Image src="/assets/logo/web.webp" width="70" height="70" />
            <h1 className="font-extrabold text-xl uppercase text-center">
              UI/UX Design
            </h1>
            <p className="text-gray-500 text-sm text-center">
              Creeping for female light years that lesser can't evening heaven
              isn't bearing tree
            </p>
          </div>
          <div className="bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-gray-400 hover:transition-all hover:duration-500 transition-all duration-500 p-5 flex flex-col items-center gap-5">
            <Image src="/assets/logo/seo.webp" width="70" height="70" />
            <h1 className="font-extrabold text-xl uppercase text-center">
              Seo optimize
            </h1>
            <p className="text-gray-500 text-sm text-center">
              Creeping for female light years that lesser can't evening heaven
              isn't bearing tree
            </p>
          </div>
        </div>
      </div>

      <div
        id="projects"
        className="w-full h-screen flex flex-col justify-center items-center gap-20 px-20 pt-40"
      >
        <h1 className="font-extrabold text-4xl uppercase">My Projects</h1>
        <div className="grid grid-cols-4 gap-5">
          <div className="space-y-4">
            <div className="relative group">
              <img src="/assets/logo/sample.webp" alt="" />
              <div className="w-0 group-hover:w-full h-full bg-blue-600/30 absolute top-0 transition-all"></div>
            </div>
            <div className="">
              <h1 className="font-extrabold text-xl uppercase">Web Admin</h1>
              <p className="text-gray-500 text-sm">
                Creeping for female light years that lesser can't evening heaven
                isn't bearing tree
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative group">
              <img src="/assets/logo/sample.webp" alt="" />
              <div className="w-0 group-hover:w-full h-full bg-blue-600/30 absolute top-0 transition-all"></div>
            </div>
            <div className="">
              <h1 className="font-extrabold text-xl uppercase">Web Admin</h1>
              <p className="text-gray-500 text-sm">
                Creeping for female light years that lesser can't evening heaven
                isn't bearing tree
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative group">
              <img src="/assets/logo/sample.webp" alt="" />
              <div className="w-0 group-hover:w-full h-full bg-blue-600/30 absolute top-0 transition-all"></div>
            </div>
            <div className="">
              <h1 className="font-extrabold text-xl uppercase">Web Admin</h1>
              <p className="text-gray-500 text-sm">
                Creeping for female light years that lesser can't evening heaven
                isn't bearing tree
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative group">
              <img src="/assets/logo/sample.webp" alt="" />
              <div className="w-0 group-hover:w-full h-full bg-blue-600/30 absolute top-0 transition-all"></div>
            </div>
            <div className="">
              <h1 className="font-extrabold text-xl uppercase">Web Admin</h1>
              <p className="text-gray-500 text-sm">
                Creeping for female light years that lesser can't evening heaven
                isn't bearing tree
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
