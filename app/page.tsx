import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="overflow-x-hidden scroll-smooth">
      <Navbar />
      <div className="p-5 h-screen w-screen bg-img"></div>
      <div id="contact" className="p-5 h-screen w-screen"></div>
    </div>
  );
}
