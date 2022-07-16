import React, { FC, useRef } from 'react'
import ParallaxChild from './ParallaxChild'

interface parallaxListProps{
  currentY:number
}

const ParallaxList: FC<parallaxListProps> = ({currentY}) => {


  const parallaxRef = useRef<HTMLElement>(null)

  const {current:elParallax} = parallaxRef

  let thisParentH:number = 0
  let parentTop:number = 0
  if(elParallax){
    parentTop = elParallax.offsetTop
    thisParentH = elParallax.clientHeight}

return (
  <section
  ref={parallaxRef}
    className="
      min-h-[150vh]  min-w-full
      z-10
      py-[10vmin] 
      gap-[10vmin]
      flex flex-col justify-between items-center
      "
        >
        {listContent.map((item,index)=>(
        <ParallaxChild 
          id={index}
          parentTop={parentTop}
          parentH = {thisParentH}
          currentY={currentY}
          key={index}
          content={item}/>
        ))}
        </section>
    )
}

const listContent: string[] = [
    'High-fidelity audio.',
    'Active noise Cancellation with Transparency mode.',
    'Spatial audio for theater-like sound that surrounds you.',
    'Stunning design with an exceptional fit.'
]


export default ParallaxList
