
import React, { FC, useRef } from "react";
import VidList from "./VidList";
interface videoProps {
  currentY:number
}

const VideoII : FC<videoProps> = ({currentY}) => {
  

 const vidRef = useRef<HTMLElement>(null) 

 const{current:elVid} = vidRef 
 
 let sT:number = 0
 let h:number = 0 
 let opac = 0 // for video

  if(elVid){
     h = elVid.clientHeight
    h
    sT = elVid.offsetTop
    opac = ((sT/2)*1.2)/h 
  }


if(elVid){

  }  



  return(
    <section
      ref={vidRef}
      className="
      flex flex-col items-center justify-center
      bg-black
      sticky bottom-0
      min-h-screen w-screen"
      >
      <ul
        className="
        min-w-full max-w-full
        gap-10
        flex flex-col items-center justify-end
        z-[90] min-h-screen"
        > 
        {listContent.map((item,index)=>(
            <VidList 
              parentH={h}
              currentY={currentY}
              key={index}
              id={index}
              content={item} />
        ))} 
      </ul>
      <video 
        style={{opacity:opac}}
        className="
        z-0
        absolute top-0 left-0
         min-h-screen min-w-full
          max-h-screen max-w-full
        object-cover"
        autoPlay loop
        playsInline muted>
        <source src={videoURL}/>
        </video>
   
    </section>
  )
}

const videoURL:string = 'https://www.apple.com/105/media/us/airpods-max/2020/996b980b-3131-44f1-af6c-fe72f9b3bfb5/anim/supercut/large_2x.mp4'

const listContent:string[] = [
'High-fidelity audio.',
'Active noise Cancellation with Transparency mode.',
'Spatial audio for theater-like sound that surrounds you.',
'Stunning design with an exceptional fit.'
]

export default VideoII
