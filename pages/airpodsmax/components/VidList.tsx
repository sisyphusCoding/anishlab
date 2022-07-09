import { parse } from "path";
import React, { FC,ReactNode, useRef } from "react";

interface vidListProps{
  content:string
  id:number
  currentY:number
  parentH:number
}


const VidList:FC<vidListProps> = ({content,id,currentY,parentH}) => {
  
  const listRef = useRef<HTMLLIElement>(null)

  const{current:elList} = listRef

  let sT:number = 0
  if(elList){
     sT = elList.offsetTop
  }

 console.log(parentH)
  console.log(id,'is',sT/parentH , currentY)
    


  return(
        <li 
          ref={listRef}
         className="        
          sticky top-0
         max-w-[80vmin] 
        text-zinc-50
        px-6 py-2
        rounded-3xl
        bg-black bg-opacity-20
        backdrop-blur-sm"
         >
          <p
            className="
                -tracking-wider
              text-[6vmin] 
              font-extrabold 
              text-center"
            >
            {content}
          </p>
      </li> 
  )
}


export default VidList
