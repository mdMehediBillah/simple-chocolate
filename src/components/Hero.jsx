/* eslint-disable react/no-unknown-property */
import {
  chocoBin,
  chocoBin2,
  coconutBreak,
  leaf,
  Mixed_Bites,
  Mocca,
  MoccaMolly,
  MoccaMolly_sq_cube,
} from "../assets/images";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".threeSection",
        start: "0% 50%",
        end: "50% 90%",
        scrub: true,
        markers: true,
      },
    });

    tl.from(".MoccaText2", {
      y: -50,
      duration: 3,
      opacity: 0,
      scale: 1.5,
      ease: "smooth",
    });
    tl.from(".moccaLeft", {
      x: 100,
      opacity: 0,
      duration: 0.8,
      scale: 0.5,
    });
    tl.from(".moccaRight", {
      x: -100,
      opacity: 0,
      duration: 0.8,
      scale: 0.5,
    });
  }, []);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".heroSection",
        start: "0% 0%",
        end: "50% 30%",
        scrub: true,
        markers: false,
      },
    });

    tl.to("#coconutBreak", {
      y: 100,
      x: -100,
      scale: 1.5,
      duration: 2,
    });
    tl.to("#mixedBites", {
      y: 100,
      duration: 2,
      scale: 1.1,
    });
    tl.from(".MoccaText", {
      y: 100,
      opacity: 0,
      duration: 1,
    });
    tl.from(".boxImage", {
      x: -200,
      y: 100,
      opacity: 0,
      duration: 1,
    });

    tl.from(".boxText", {
      x: 200,
      y: 100,
      opacity: 0,
      duration: 1,
    });

    // ==================  Hero Section Animation ================== //
    gsap.from("#heroHeader", {
      y: -50,
      scale: 1.5,
      opacity: 0,
      yoyo: true,
      ease: "power1.inOut",
      duration: 0.6,
    });
    gsap.from("#heroSubHeader", {
      y: 50,
      opacity: 0,
      delay: 0.5,
      duration: 0.2,
      yoyo: true,
      ease: "back.inOut(1.7)",
    });
    gsap.from("#coconutLeft", {
      x: -20,
      opacity: 0,
      delay: 0.5,
      duration: 0.6,
      yoyo: true,
      ease: "back.inOut(1.7)",
    });

    gsap.from("#HeroLeaf", {
      x: -50,
      opacity: 0,
      delay: 0.4,
      duration: 0.6,
      rotate: -45,
      yoyo: true,
      ease: "back.inOut(1.7)",
    });
  }, []);
  return (
    <>
      <section className="py-3 mt-12 heroSecrion ">
        <div className="absolute top-20 left-[40%]">
          <h1
            id="heroHeader"
            className="text-orange-50 text-center text-8xl font-semibold"
          >
            SIMPLY
          </h1>
          <p
            id="heroSubHeader"
            className="subheader text-5xl text-center pt-4 pb-4 "
          >
            Fill with your flavor!
          </p>
        </div>
        <img
          src={chocoBin2}
          alt="chocoBin2"
          className="w-[5%] absolute top-[1%] right-[66%] transform translate-x-1/2 z-20"
          id="chocoBar"
        />
        <img
          src={chocoBin}
          alt="chocoBin"
          className="w-[5%] absolute top-[24%] right-[15%] transform translate-x-1/2 z-20 rotate-[-75deg]"
          id="chocoBar"
        />
        <img
          src={leaf}
          alt="coconutLeaf"
          className="w-[20%] absolute top-[12%] right-[96%] transform translate-x-1/2 z-0 rotate-[45deg]"
          id="HeroLeaf"
        />

        <div className="flex justify-end items-center">
          <img
            src={Mixed_Bites}
            alt="coconutLeaf"
            className="z-10 w-[35%] mx-auto max-w-[540px]"
            id="mixedBites"
          />
          <div>
            <img
              src={coconutBreak}
              alt="coconutLeaf"
              className="z-20 w-44"
              id="coconutBreak"
            />
          </div>
        </div>
      </section>

      <section className="bg-orange-100 py-24  twoSection ">
        <div className="container mx-auto grid md:grid-cols-2 gap-4 items-center justify-center">
          <div className="boxImage">
            <img
              src={Mocca}
              alt="coconutLeaf"
              className="w-full "
              id="coconutLeaf"
            />
          </div>
          <div className=" z-10 justify-center flex flex-col items-center boxText ">
            <span className="subheader text-5xl ">say it</span>
            <div>
              <h3 className="header text-8xl ">Simply</h3>
              <p>
                Send meaningful boxes of Belgian chocolates <br /> with messages
                for every occasion
              </p>
              <button className="bg-[#926550] py-2 px-8 rounded-lg text-orange-100 font-semibold mt-4 border-2 hover:bg-transparent hover:border-gray-500 transition-all duration-300 hover:text-orange-800">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#4a3128] py-12  threeSection h-screen ">
        <div className="grid lg:grid-cols-3 items-center max-w-screen-xl mx-auto">
          <img
            src={MoccaMolly_sq_cube}
            alt="MoccaMolly_sq_cube"
            className="moccaLeft"
          />
          <div className="text-orange-50 MoccaText2 opacity-90">
            <h3 className="text-2xl font-semibold">
              Knusprige Kaffeebohnen und dunkle Schokolade
            </h3>
            <span>A match made in heaven</span>
            <p>
              Mit Kaffee und Schokolade macht man nie einen Fehler. Eine
              Schokolade, welche den guten Geschmack von premium Schokolade mit
              den leicht-knusprigen Kaffeebohnen zusammenschmelzen lässt.
            </p>
          </div>
          <img src={MoccaMolly} alt="MoccaMolly" className="moccaRight" />
        </div>
      </section>
    </>
  );
};

export default Hero;
