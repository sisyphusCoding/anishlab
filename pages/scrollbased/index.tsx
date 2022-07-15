import { NextPage } from "next";
import React, { useRef } from "react";
import ScrollText from "./components/ScrollText";
import {useScroll} from 'react-use'

const ScrollBased:NextPage = () => {

  const mainRef = useRef<HTMLElement>(null)

  const{y} = useScroll(mainRef)


  return(
    <main
     ref={mainRef} 
     className="
      dark:bg-black
      flex flex-col 
      items-center justify-between
      max-h-screen
      min-w-full
      overflow-x-hidden
      overflow-y-scroll
      "
      >
      <div
       className="
        flex justify-end items-end
        min-w-full
        min-h-screen bg-zinc-900"
       >
      </div>
      <ScrollText scrollY={y}/>

      <div
       className="
        flex justify-end items-end
        min-w-full
        min-h-screen bg-zinc-900"
      /> 
    </main>
  )
}

export default ScrollBased
