import React, { FC } from "react";

const SmallDescription: FC = () => {
  return (
    <section
      className="
      shadow-[0_20px_30px_-5px_rgba(0,0,0,.7)]
      z-50
      font-extrabold
      py-20
      min-w-full
      flex flex-col items-center justify-center"
    >
      <p
        className="
      md:text-xl lg:text-2xl
      -tracking-wide
      max-w-[80vmin] px-20 text-center"
      >
        Introducing AirPods Max — a perfect balance of exhilarating
        high-fidelity audio and the effortless magic of AirPods. The ultimate
        personal listening experience is here.
      </p>
    </section>
  );
};

export default SmallDescription;
