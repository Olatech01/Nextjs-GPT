import Blog from "@/components/Landing/Blog";
import Brand from "@/components/Landing/Brand";
import Endless from "@/components/Landing/Endless";
import Feature from "@/components/Landing/Feature";
import Footer from "@/components/Landing/Footer";
import Future from "@/components/Landing/Future";
import Hero from "@/components/Landing/Hero";
import Navbar from "@/components/Landing/Navbar";
import Possibilities from "@/components/Landing/Possibilities";
import Image from "next/image";

export default function Home() {
  return (
    <div className='flex flex-col gap-[50px] items-center'>
      <Navbar />
      <Hero />
      <Brand />
      <Feature />
      <Future />
      <Possibilities />
      <Endless />
      <Blog />
      <Footer />
    </div>
    );
}
