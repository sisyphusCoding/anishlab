import { parse } from "path";
import React, { FC, ReactNode, useRef } from "react";

interface vidListProps {
  content: string;
  id: number;
  currentY: number;
  parentH: number;
}

const VidList: FC<vidListProps> = ({ content, id, currentY, parentH }) => {
  const listRef = useRef<HTMLLIElement>(null);

  const { current: elList } = listRef;

  let sT: number = 0;
  let h: number = 0;
  if (elList) {
    sT = elList.offsetTop;
    h = elList.clientHeight;
  }

  let scrollByPasser = (parentH+sT);

  let opac = (currentY-scrollByPasser)/(scrollByPasser) *(25/(id+1))

  if(opac>1){opac=0}


  console.log(scrollByPasser,currentY,id)

  let thisY = opac * -150

  return (
    <li
      style={{
      transform: `translate3d(0,${thisY}px,0)`,
      }}
      ref={listRef}
      className="           
        overflow-hidden
        overflow-y-scroll
        sticky top-0
        max-w-[80vmin] 
        text-zinc-50
        rounded-3xl
       "
    >
      <p
        style={{
          opacity: opac,
        }}
        className=" 
                -tracking-wider
              text-[6vmin] 
              font-extrabold 
              text-center"
      >
        {content}
      </p>
    </li>
  );
};

export default VidList;
