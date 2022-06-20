import React, { FC, useRef, useEffect, useState } from "react";
import SwanWhite from "./chart/swanWhite";
import PhilCard from "./subtree/philCard";
import Image from "next/image";

import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useIntersection, useScroll, useScrolling } from "react-use";
import { argv0 } from "process";
const Philosophy: FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  const { current: elDiv } = rootRef;

  const { x, y } = useScroll(rootRef);

  let scrollPerc = 0;

  if (elDiv) {
    let st = elDiv.scrollTop;
    let sh = elDiv.scrollHeight;
    let wh = elDiv.clientHeight;

    console.log("scroll Top:", st + wh);
    console.log("scrollY:", y);
    scrollPerc = Math.round(((st) / sh) * 100);
    console.log("scroll %:", scrollPerc);
  }

  let whichOne = 0;

  if (scrollPerc ===0) {
    whichOne = 0;
  }else if(scrollPerc===34){
    whichOne=1;
  }else if(scrollPerc>=60){
  whichOne=2;
}

  whichOne = 0

  console.log(whichOne);

  return (
    <main>
      <Tile />
      <section
        ref={rootRef}
        className="
       flex flex-col  
      gap-6
      scroll-smooth
      relative
      max-h-screen
      scrollWrap
      overflow-x-hidden   
      snap-y snap-mandatory
      overflow-y-scroll
      min-h-screen min-w-full"
      >
        <div
          className={` 
       
        ${
          whichOne === 0
            ? "opacity-100 "
            : "opacity-0"
        } 
        `}
        >
          <PhilCard title="are all swans white?" author="karl popper">
            <SwanWhite />
          </PhilCard>
        </div>

        <div
          className={`
        
        ${
          whichOne === 0
            ? "opacity-100"
            : "opacity-0 "
        } 
        `}
        >
          <PhilCard
            title="if you meet buddha on the road , kill him."
            author="zen koan"
          >
            <div
              className="h-fit w-fit
          px-10  filter drop-shadow-[0_10px_20px_rgba(0,0,0,.6)]
          "
            >
              <Image
                className="rounded-xl "
                alt="self is an illusion"
                src="/self.webp"
                objectFit="cover"
                height={500}
                width={800}
              />
            </div>
          </PhilCard>
        </div>

        <div
          className={`
        min-h-screen min-w-full 
        ${
          whichOne === 0
            ? "opacity-100 "
            : "opacity-0 "
        } 
      `}
        >
          <PhilCard
            title="A great many people think they are thinking when they are merely
rearranging their prejudices."
            author="david bohm"
          >
            <div
              className="h-fit w-fit
          px-10  filter drop-shadow-[0_10px_20px_rgba(0,0,0,.6)]
          "
            >
              <Image
                className="rounded-xl "
                alt="self is an illusion"
                src="/bohm.webp"
                objectFit="cover"
                height={500}
                width={800}
              />
            </div>
          </PhilCard>
        </div>
      </section>
    </main>
  );
};

const Tile = () => {
  return (
    <div
      className="
        min-h-screen min-w-full 
      absolute flex lg:flex-row flex-col"
    >
      <h3 className="absolute top-5 left-5"></h3>

      <div
        className="
        z-0 
        bg-black dark:bg-zinc-400
        w-[100vw]  lg:w-[30vw]
        h-[30vh] lg:min-h-screen"
      ></div>

      <div
        className="
        bg-zinc-300 dark:bg-black
        w-full lg:w-[70vw]
        h-[70vh] lg:min-h-screen"
      ></div>
    </div>
  );
};

export default Philosophy;
