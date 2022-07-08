import React, { FC } from "react";


const VideoII : FC = () => {

  

  return(
    <section
      className="
      sticky top-0
      h-screen min-w-full"
      >
      <div
        >
      <video 
        className="
        min-h-screen w-screen
        object-cover"
        autoPlay loop
        playsInline muted>
        <source src={videoURL}/>
        </video>
      </div>
    </section>
  )
}

const videoURL:string = 'https://www.apple.com/105/media/us/airpods-max/2020/996b980b-3131-44f1-af6c-fe72f9b3bfb5/anim/supercut/large_2x.mp4'

export default VideoII
