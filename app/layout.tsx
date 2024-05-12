import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const poppins = Poppins({ weight: "200", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmad Fauzan",
  description: "Web portofolio by ahmad fauzan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} overflow-hidden`}>
        <Navbar />
        <div className="h-[calc(100vh-4rem)] mt-16 overflow-y-auto overflow-x-hidden">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
