import { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";
import { BsMouse } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { useEffectOnce, useScroll, useMeasure } from "react-use";

const InvertScroll: NextPage = () => {
  const snapRef = useRef<HTMLDivElement>(null);

  let [loaded, setLoaded] = useState(false);

  let h: number;

  let child: number;

  let parallax: number = 0;

  let { y } = useScroll(snapRef);

  const { current: elSnap } = snapRef;
  if (elSnap) {
    h = elSnap.clientHeight;
    y += h;
    parallax = y - h;
    child = elSnap.childElementCount;
    child--;
  }

  const dummyArr = [0, 1, 2, 3, 4, 5];

  const handleScroll = (i: number) => {
    elSnap?.scroll(0, i * h);
  };

  const handleScale = (i: number) => {
    let zD = Math.max(0.8, 2.5 - Math.abs((y - (i + 1) * h) / h));
    return zD;
  };

  useEffectOnce(() => {
    setLoaded(!loaded);
    setLoaded(!loaded);
    elSnap?.scroll(0, 10);
  });

  return (
    <section
      ref={snapRef}
      className="
      scroll-smooth
      parallaxScroll
      text-zinc-900 
      snapWrap
      font-manrope
      flex-col
      snap-y snap-mandatory
      overflow-y-scroll
      flex items-center justify-start
      max-h-screen
      min-h-screen min-w-full
      relative
      "
    >
      <div
        style={{
          transformStyle: "preserve-3d",
        }}
        className={`  
       
        transition-all ease-in-Expo duration-1000
        md:p-3 p-2
        md:rounded-xl
        rounded-lg
        !shadow-none 
        md:top-1/2 top-[70%]
        bg-black bg-opacity-20
        backdrop-blur-2xl
        transform-cpu
        -translate-y-1/2
        right-2
        fixed
      z-50  
        gap-[.5vmin]
    flex flex-col justify-center items-center    
        `}
      >
        {dummyArr.map((item, index) => (
          <p
            onClick={() => handleScroll(index)}
            key={index}
            style={{
              opacity: Math.max(0.2, 1 - Math.abs((y - (index + 1) * h) / h)),
              transform: `perspective(9vmin) translate3d(0,0,${handleScale(
                index
              )}vmin)`,
            }}
            className={`
          ${index === 0 ? "md:rounded-t-md rounded-t-sm" : ""} 
          ${index === 5 ? "md:rounded-b-md rounded-b-sm" : ""} 
          text-[clamp(.5rem,.5rem+.8vmin,1rem)] md:text-base
          font-bold
          cursor-pointer 
          hover:bg-black hover:text-white
          transition-all ease-in-Expo
          backdrop-blur-sm backdrop-filter
          bg-white 
          flex items-center justify-center
          md:w-[3vmin] md:h-[3vmin]
          w-[5vmin] h-[5vmin]`}
          >
            <span>{index}</span>
          </p>
        ))}
      </div>
      <div
        className="
        
        sticky top-0
        snap-start snap-always
        bg-amber-500
         flex-col
        flex items-center justify-center
        min-h-screen
        h-screen w-full"
      >
        <div
          className="
          px-6
          min-w-full
          overflow-hidden
          uppercase"
        >
          <h3
            style={{
              transform: `translate3d(0,${parallax / 10}vh,0)`,
            }}
            className="transition-all ease-in-Expo duration-75 min-w-full flex justify-center"
          >
            <span
              className="
              px-10 text-zinc-700

              text-center min-w-full"
            >
              scroll-snap
            </span>
          </h3>
        </div>
        <div
          className="
          py-10
          overflow-hidden
        -bottom-7  absolute"
        >
          <div
            style={{
              transform: `translate3d(0,${parallax / 10}vh,0)`,
            }}
            className="
          transition-all ease-in-Expo
          text-5xl lg:text-6xl
        flex flex-col items-center justify-center  
        "
          >
            <BsMouse />
            <span
              className="
            text-4xl lg:text-5xl
           animate-bounce"
            >
              <BiChevronDown />
            </span>
          </div>
        </div>
      </div>
      <div
        className="
        flex-col flex items-center justify-center
        sticky top-0
        
        bg-zinc-300
        snap-start snap-always
        min-h-screen w-full"
      >
        <h1>1</h1>
      </div>

      <div
        className="

        flex-col flex items-center justify-center
        sticky top-0
       
        bg-red-700
        snap-start snap-always
        min-h-screen w-full"
      >
        <h1>2</h1>
      </div>

      <div
        className="
        flex-col flex items-center justify-center
        sticky top-0 
        bg-green-500
        snap-start snap-always
        min-h-screen w-full"
      >
        <h1>3</h1>
      </div>

      <div
        className="
        bg-indigo-800
        flex-col flex items-center justify-center
        sticky top-0
        snap-start snap-always
        min-h-screen w-full"
      >
        <h1>4</h1>
      </div>

      <div
        className="
        flex-col flex items-center justify-center
        sticky top-0 
        bg-sky-600
        snap-start snap-always
        min-h-screen w-full"
      >
        <h1>5</h1>
      </div>
    </section>
  );
};

export default InvertScroll;
