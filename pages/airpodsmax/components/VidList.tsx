import { openStdin } from "process";
import React, { FC, ReactNode, RefObject, useRef } from "react";
import { cursorTo } from "readline";


interface vidListProps {
  content: string;
  id: number;
  currentY: number;
  parentH: number;
}

const VidList: FC<vidListProps> = ({ content, id, currentY, parentH }) => {
  
  const listRef = useRef<HTMLLIElement>(null)

  currentY -= (parentH*0.256)

  const { current: elList } = listRef;

    let sT = 0

    if(elList){
    const{clientHeight:thisH}=elList
    sT = elList.offsetTop
  }

  let test = currentY-sT

  let opac = test / sT
  
  console.log(opac,id)
  if(opac>0.5){
  opac += .4
  }else if(opac<0.5) {
    opac -= .5
  }

  
  console.log(opac,id)

  test*=-1


 
  return (
    <li
      style={{
        transform:`translate3d(0,${test}px,0)`
      }}
      ref={listRef}
      className="              
        flex flex-col items-center justify-center
        transition-all ease-in-Expo duration-[0s]
        border-white border-2
        max-w-[80vmin] 
        text-zinc-50
       "
    >
      <p
        style={{opacity:opac}}
        className={`
               transition-opacity  ease-in-Expo duration-1000
                -tracking-wider
              text-[6vmin] 
              font-extrabold 
              text-center `}
      >
        {content}
      </p>
    </li>
  );
};

export default VidList;
