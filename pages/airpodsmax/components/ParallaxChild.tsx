import { off } from "process";
import React,{FC, useRef} from "react";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

interface parallaxChildProps {
  parentTop:number
  content:string
  currentY:number
  parentH:number
  id:number
}

const ParallaxChild:FC<parallaxChildProps> = (
{
parentTop,
content,
currentY,
parentH,
id
}) => {
  

  const paraRef = useRef<HTMLParagraphElement>(null)

  const {current:elPara} = paraRef



  let offTop = 0
  let h =0

  if(elPara){
    h=elPara.clientHeight
    offTop = elPara.offsetTop
    let windowH = window.innerHeight
  }

  let customY =  (currentY*1.28)

  let hasEntered = customY >parentTop
  
  let trialOpac = 0

    

    if(offTop<customY){
      trialOpac = 1
    }
 

  let opac  =  Math.abs((( (currentY+h) - (offTop) ) / (h) )) / 10

  opac +=.3

  


  

  console.log(id,customY,offTop,opac)

  return(  
          <p         
            style={{opacity:opac}}
            ref={paraRef}
            className=' 
            outline outline-2 outline-black
            transition-opacity ease duration-700
            text-center
            max-w-[80vmin]
            text-white
            font-semibold
            inline-flex 
            text-[6vmin]
              '
            >
          <span
            className={`
            transition-all ease duration-1000
            `}
            >
          {content}
          </span>
        </p>
  )
}


export default ParallaxChild
