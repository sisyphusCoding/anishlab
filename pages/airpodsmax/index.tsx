import { NextPage } from "next";
import React from "react";
import HeaderA from "./components/HeaderA";



const AirPodsMax:NextPage = () => {
  return(
    <main
      className="
      flex flex-col items-center justify-center
      dark:bg-black
      min-h-screen min-w-full"
      >
      <HeaderA/>
    </main>
  )
}


export default AirPodsMax
