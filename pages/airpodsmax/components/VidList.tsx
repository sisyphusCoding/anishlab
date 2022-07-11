import { parse } from "path";
import React, { FC, ReactNode, RefObject, useRef } from "react";

import {useIntersection} from 'react-use'

interface vidListProps {
  content: string;
  id: number;
  currentY: number;
  parentH: number;
}

const VidList: FC<vidListProps> = ({ content, id, currentY, parentH}) => {
  const listRef = useRef<HTMLLIElement>(null);

  const { current: elList } = listRef;


  let sT: number = 0;
  let h: number = 0;
  if (elList) {
    sT = elList.offsetTop;
    h = elList.clientHeight;
  }

  let approx = parentH / 3.33

  let halfH = parentH * 0.5

  let thisScroll = currentY-approx

  let transY = (currentY) - (parentH + sT)
  transY*=-1
  transY /=2


 let scrollByPasser = (parentH+sT);

  let opac = 1


  console.log(id,opac)



  const intersection = useIntersection(listRef,{
    root:null,
    rootMargin:`${parentH/2}px`,
    threshold:1
  })
  
  let checkOpac 

  if(intersection){ 
    checkOpac = intersection.intersectionRatio<1
    console.log(id,checkOpac)
  }




  return (
    <li
      
      style={{
        transform:`translate3d(0,${transY}rem,0)`
      }}
      ref={listRef}
      className="            
        py-40
        overflow-hidden
        sticky top-0
        max-w-[80vmin] 
        text-zinc-50
        rounded-3xl
       "
    >
      <p
        style={{
        }}
        className={`
            ${checkOpac? 'opacity-0 ease-out ':'opacity-100 ease-in'} 
               transition-opacity duration-500
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