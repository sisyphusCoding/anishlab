import React, { FC, useRef } from "react";

const SmallDescription: FC = () => {

  const descRef = useRef<HTMLElement>(null)
  const{current:elDecs} = descRef
  
    let sT = 0

  if(elDecs){
    sT = elDecs.scrollTop
  }

  return (
    <section
      ref={descRef} 
      style={{top:`${sT}px`}}
      className="
      bg-zinc-300 dark:bg-black
      shadow-[0_25px_30px_-5px_rgba(0,0,0,.5)]
      z-50
      font-extrabold
      py-20
      w-screen
      flex flex-col items-center justify-center"
    >
      <p
        className="
      md:text-xl lg:text-2xl
      -tracking-wide
       md:px-[10vmin] 
      max-w-[80vmin]  text-center"
      >
        Introducing AirPods Max — a perfect balance of exhilarating
        high-fidelity audio and the effortless magic of AirPods. The ultimate
        personal listening experience is here.
      </p>
    </section>
  );
};

export default SmallDescription;
