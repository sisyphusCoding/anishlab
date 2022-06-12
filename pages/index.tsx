import type { NextPage } from "next";

import { useEffect, useState } from "react";

import Split from "../tools/Split";

import { useScroll, useGesture } from "@use-gesture/react";

const Home: NextPage = () => {
  const [name, setName] = useState(true);
  return (
    <div
      className="  
      flex flex-col items-center justify-center
      "
    >
      <h1
        className="
        tracking-tighter
        lowercase
        font-accuratist "
      >
        <Split name={name} text="anish kanna" />
      </h1>
    </div>
  );
};

export default Home;
