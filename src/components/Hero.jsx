/* eslint-disable react/no-unknown-property */
import {
  chocoBar,
  chocoBin,
  chocoBin2,
  coconutBreak,
  coconutLeaf,
  CookieJoe_1,
  GrainyBilly_3_sq,
  GrainySue_4,
  leaf,
  Mocca,
} from "../assets/images";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.from("#heroHeader", {
      y: -50,
      scale: 1.5,
      opacity: 0,
      yoyo: true,
      ease: "power1.inOut",
      // ease: "elastic.inOut(1, 0.8)",
      // ease: "bounce.in bounce.out",
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
    gsap.from("#coconutRight", {
      y: 50,
      opacity: 0,
      scale: 0.5,
      delay: 0.6,
      duration: 0.6,
      yoyo: true,
      ease: "back.inOut(1.7)",
    });
    gsap.from("#coconutMid", {
      y: -50,
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
      <section className="">
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
        <img
          src={CookieJoe_1}
          alt="coconutLeaf"
          className="w-[40%] absolute top-[15%] right-[66%] transform translate-x-1/2 z-10"
          id="coconutLeft"
        />
        <img
          src={GrainyBilly_3_sq}
          alt="coconutLeaf"
          className="w-[42%] absolute top-[17%] right-[52%] transform translate-x-1/2 z-30"
          id="coconutMid"
        />
        <img
          src={GrainySue_4}
          alt="coconutLeaf"
          className="w-[40%] absolute top-[15%] right-[40%] transform translate-x-1/2 z-10"
          id="coconutRight"
        />
        <img
          src={coconutBreak}
          alt="coconutLeaf"
          className="w-[20%] absolute top-[65%] right-[10%] transform translate-x-1/2 z-20"
          id="coconutBreak"
        />
        <h1
          id="heroHeader"
          className="text-[20vw] text-center text-gray-50 pt-6 z-0"
        >
          SIMPLY
        </h1>
        <p
          id="heroSubHeader"
          className="subheader text-5xl mb-[-50px]  text-center py-4"
        >
          Fill with your flavor!
        </p>
      </section>

      <section className="bg-orange-100 py-24 mt-24 relative h-[70vh]">
        <div className="container mx-auto grid md:grid-cols-3 gap-4">
          <div className="h-24 ">
            <img
              src={Mocca}
              alt="coconutLeaf"
              className="w-[40%] absolute top-[10%] right-[70%] transform translate-x-1/2 z-10"
              id="coconutLeaf"
            />
          </div>
          <div className=" py-24  absolute bottom-[2%] right-[42%] transform translate-x-1/2 z-10">
            <span className="subheader text-5xl mb-[-50px] absolute">
              say it
            </span>
            <h3 className="header text-[800%] relative">Simply</h3>
            <p>
              Send meaningful boxes of Belgian chocolates <br /> with messages
              for every occasion
            </p>
            <button className="bg-[#926550] py-2 px-8 rounded-lg text-orange-100 font-semibold mt-4">
              Shop Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
