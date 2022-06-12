import React, { FC, useEffect, useRef } from "react";

import Image from "next/image";

import cat0 from "./cat/cat0.jpeg";
import cat1 from "./cat/cat1.jpeg";
import cat2 from "./cat/cat2.jpeg";
import cat3 from "./cat/cat3.jpeg";
import cat4 from "./cat/cat4.jpeg";
import cat5 from "./cat/cat5.jpeg";
import cat6 from "./cat/cat6.jpeg";

import { useIntersection } from "react-use";

import { animate, domMax, motion, Variants } from "framer-motion";

const Carouselsnap: FC = () => {
  if (typeof window !== "undefined") {
    const cards = document.querySelectorAll(".card");
    const wrapper = document.querySelector(".carousel");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
        });
      },
      { root: wrapper, threshold: 0.5, rootMargin: "-20%" }
    );
    cards.forEach((card) => {
      observer.observe(card);
    });
  }

  return (
    <div
      className="
      flex flex-col items-center justify-center
      "
    >
      <section
        className="         
      carousel  
      px-10  
      scroll-smooth    
      drop-shadow-[0_3px_50px_rgba(0,0,0,.7)]     
      dark:drop-shadow-[0_3px_10px_#171717]       
      rounded-2xl
      snap-mandatory snap-x 
      overflow-y-hidden
      gap-0 
      flex items-center justify-start
      max-w-[100vw]
      h-[60vh] 
         "
      >
        {[cat0, cat1, cat2, cat3, cat4, cat5, cat6].map((pet, index) => (
          <motion.div
            style={{
              transformStyle: "preserve-3d",
            }}
            key={index}
            className={`
  rounded-xl
  overflow-hidden
    snap-center       
    snap-always
     md:min-w-[70vmin]   
     md:max-w-[70vmin]       
     max-w-[90vmin]       
     min-w-[90vmin] h-auto          
  ${index === 0 ? "ml-[100%]" : ""}     

  ${index === 6 ? "mr-[100%]" : ""}     
      `}
          >
            <Image
              className=" 
    duration-700
    transition-all ease-in-Expo
      rounded-xl card"
              src={pet}
              layout="responsive"
              height={70}
              objectFit="cover"
              width={100}
              alt="cat"
            />
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Carouselsnap;
