import { NextPage } from "next";
import React, { useRef, FC } from "react";
import HeaderA from "./components/HeaderA";
import VideoII from "./components/VideoII";

import { useMeasure, useScroll, useWindowScroll } from "react-use";
import SmallDescription from "./components/SmallDescription";

const AirPodsMax: FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const{current:elMain} = mainRef
  let { y } = useScroll(mainRef)
  
  let sH  , h

  if(elMain){
    h = elMain.clientHeight 
    sH = elMain.scrollHeight
    console.log(sH,y)
    y+=h
  }


  return (
    <div
      ref={mainRef}
      onScroll={() => console.log("not scrolling")}
      className=" 
      relative
      scroll-smooth
      font-space
      flex flex-col items-center justify-start
      dark:bg-black
      overflow-x-hidden
      overflow-y-scroll
      max-h-screen
      min-w-full"
    >
      <HeaderA currScroll={y} />
      <SmallDescription />
      <VideoII />
    </div>
  );
};

export default AirPodsMax;
