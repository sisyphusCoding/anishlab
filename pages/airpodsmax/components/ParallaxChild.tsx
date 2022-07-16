import React,{FC, useRef} from "react";

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

  if(elPara){offTop = elPara.offsetTop}


  let thisH = parentTop + parentH
  thisH/=1.2


  console.log((currentY+parentH)/thisH)

  let trialOpac =  1
   

  return(  
          <p         
            style={{opacity:trialOpac}}
            ref={paraRef}
            className=' 
            text-center
            max-w-[80vmin]
            text-white
            font-semibold
            inline-flex 
            text-[clamp(1rem,1rem+5vmin,5rem)] 
              '
            >
          <span
            className={`
            transition-all ease-in-Expo duration-1000
            `}
            >
          {content}
          </span>
        </p>
  )
}


export default ParallaxChild
