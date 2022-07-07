import React, { FC, useEffect, useRef } from "react";

import Image from "next/image";

import cat0 from "/cat/cat0.webp";
import cat1 from "/cat/cat1.webp";
import cat2 from "/cat/cat2.webp";
import cat3 from "/cat/cat3.webp";
import cat4 from "/cat/cat4.webp";
import cat5 from "/cat/cat5.webp";
import cat6 from "/cat/cat6.webp";

import { useIntersection } from "react-use";

import ImageCard from "./components/ImageCard";

const Carouselsnap: FC = () => {

  const listOfCat = [cat0,cat1,cat2,cat3,cat4,cat5,cat6]
  const thisRef = useRef<HTMLDivElement>(null)
  return(
    <section
     className="
      px-10
      font-space
      flex
      max-w-full
      overflow-hidden
      gap-[10vmin] 
      flex-col items-center justify-center
      min-h-screen min-w-full"
      >
 
      <h3 
       className="        
        w-full
        px-1
        -tracking-widest
        whitespace-pre-line" 
       >
        Intersection observer
      </h3>
    

     <div
      ref={thisRef}
       className=" 
        p-5
        snap-x snap-mandatory
        drop-shadow-[0_15px_10px_rgba(0,0,0,.7)]   
        max-w-[100vmin]
        overflow-x-scroll overflow-y-hidden 
        gap-10
        scroll-px-32
        min-w-[100vmin]
        rounded-xl
        flex items-center justify-start
        "
       >
        {listOfCat.map((item,index)=>(
          <ImageCard  
            parentRef={thisRef}
            index={index}
            lastChild={listOfCat.length}
            key={index.toString()}
            imageURL={listOfCat[index]}/>
        ))}
      </div>   

    </section>
  )

}

export default Carouselsnap;
