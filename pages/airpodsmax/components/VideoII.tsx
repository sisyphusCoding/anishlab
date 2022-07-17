import React, { FC, useContext, useRef } from 'react'
import { ScrollY } from '..'


const VideoII: FC = () => {
  const vidRef = useRef<HTMLElement>(null)

  let currentY = useContext(ScrollY)

  const { current: elVid } = vidRef

  let sT: number = 0
  let h: number = 0
  let opac = 0 // for video

  if (elVid) {
    h = elVid.clientHeight
    h
    sT = elVid.offsetTop
    opac = currentY/ h
    opac/=2
  }

  const listParenRef = useRef<HTMLUListElement>(null)

  return (
    <section
      ref={vidRef}
      className="
      flex flex-col items-center justify-end
      bg-black
      -mt-[100vh]
      sticky top-0
      overflow-y-scroll
      max-h-screen 
      min-h-screen w-screen"
    >
      <video
        style={{ opacity: opac }}
        preload='none'
        
        className="
        z-0
        absolute top-0 left-0
         min-h-screen min-w-full
          max-h-screen max-w-full
        object-cover"
        autoPlay

        loop
        playsInline
        muted
      >
        <source src={videoURL} />
      </video>
    </section>
  )
}

const videoURL: string =
  'https://www.apple.com/105/media/us/airpods-max/2020/996b980b-3131-44f1-af6c-fe72f9b3bfb5/anim/supercut/large_2x.mp4'

export default VideoII
