import React, { FC, useRef } from "react";


const VideoII : FC = () => {
  

 const vidRef = useRef<HTMLElement>(null) 

 const{current:elVid} = vidRef 
 
 let sT

  if(elVid){
    sT = elVid.offsetTop 
  }



  return(
    <section
      ref={vidRef}
      className="
      sticky top-0
      min-h-screen w-screen"
      >
      <video 
        className="
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

export default VideoII
