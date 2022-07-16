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

  let customY = currentY * 1.5


  let offTop = 0
  let h =0

  if(elPara){
    h=elPara.clientHeight
    offTop = elPara.offsetTop}

  
  let trialOpac =  customY-offTop

  let thisY = 100

  if(trialOpac>h){
    thisY*=-1
    trialOpac=0}else if(trialOpac<h){
  }

  console.log(trialOpac,id)
   

  return(  
          <p         
            style={{opacity:trialOpac}}
            ref={paraRef}
            className=' 
            transition-opacity ease duration-700
            text-center
            max-w-[80vmin]
            text-white
            font-semibold
            inline-flex 
            text-[clamp(1rem,1rem+5vmin,5rem)] 
              '
            >
          <span
            style={{transform:`translate3d(0,${thisY/2}px,0)`}}
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
