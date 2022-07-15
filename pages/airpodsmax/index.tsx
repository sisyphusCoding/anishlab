import { NextPage } from "next";
import React, { useRef, FC } from "react";
import HeaderA from "./components/HeaderA";
import VideoII from "./components/VideoII";

import { useMeasure, useScroll, useWindowScroll } from "react-use";
import SmallDescription from "./components/SmallDescription";
import Design from "./components/Design";

const AirPodsMax: FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const { current: elMain } = mainRef;
  let { y } = useScroll(mainRef);

  let sH: number = 0;
  let h: number = 0;

  if (elMain) {
    h = elMain.clientHeight;
    sH = elMain.scrollHeight;
  }

  return (
    <div
      ref={mainRef}
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
      <VideoII currentY={y} />
      <Design />
    </div>
  );
};

export default AirPodsMax;
