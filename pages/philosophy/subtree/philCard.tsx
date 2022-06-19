import React, { FC, ReactNode } from "react";

interface Props {
  title: string;
  author: string;
  children: ReactNode;
}

const PhilCard: FC<Props> = ({ title, author, children }) => {
  return (
    <div
      className={`

      sticky top-0
      z-50
      font-ibm
      min-h-screen min-w-full 
      flex flex-col lg:flex-row`}
    >
      <div
        className="
        w-[100vw]  lg:w-[30vw]
        h-[30vh] lg:min-h-screen
        flex flex-col
        lg:justify-center
        items-center justify-evenly"
      >
        <h4
          className="

         
          dark:text-zinc-800
          items-end
          gap-2
          flex-col  flex
          px-10
          text-zinc-300
          font-semibold uppercase"
        >
          <span
            className="
            text-left
            w-full overflow-x-clip
            text-2xl lg:text-5xl"
          >
            {title}
          </span>
          <span className="text-xs lg:text-lg">-{author}</span>
        </h4>
      </div>

      <div
        className="
    grid place-items-center
    w-full lg:w-[70vw]
    lg:p-20
    h-[70vh] lg:min-h-screen "
      >
        {children}
      </div>
    </div>
  );
};

export default PhilCard;
