import { NextPage } from "next";
import React, { useRef,FC } from "react";
import HeaderA from "./components/HeaderA";
import VideoII from "./components/VideoII";

import{useScroll,useWindowScroll} from 'react-use'
import SmallDescription from "./components/SmallDescription";

const AirPodsMax:FC = () => {

  const mainRef = useRef<HTMLDivElement>(null)
  
 
  const{x,y} = useWindowScroll()


  return(
    <div
      ref={mainRef}
      onScroll={()=>console.log('not scrolling')}
      className=" 
      relative
      scroll-smooth
      font-space
      flex flex-col items-center justify-center
      dark:bg-black
      min-h-full
      min-w-full"
      >
      <HeaderA  currScroll={y} />
      <SmallDescription/>
      <VideoII />
    </div>
  )
      
}


export default AirPodsMax
