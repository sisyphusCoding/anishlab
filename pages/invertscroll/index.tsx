import { NextPage } from "next";
import React, { useEffect, useRef } from "react";
import { BsMouse } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import{useEffectOnce, useScroll} from 'react-use'



const InvertScroll: NextPage = () => {


  const snapRef = useRef<HTMLDivElement>(null)

  const{current:elSnap } = snapRef

  let h:number

  let child:number

  let{y} = useScroll(snapRef)
  

  if(elSnap){
    h= elSnap.clientHeight
    y+=h
    child = elSnap.childElementCount
    child --
  }

 
  const dummyArr = [0,1,2,3,4,5]
 
  const handleScroll = (i:number) => {
    const{current:elSnap } = snapRef
    if(elSnap){
      elSnap.scrollTo(0,i*h)
    }
  }

  const handleScale = (i:number) => {
    
    


   let zD = Math.max(0,2.5-Math.abs(((y- ((i+1)*h))/h)))

    return zD
  }

  return (
    
    <section
      ref={snapRef}
      className="
      scroll-smooth
      text-zinc-900 
      snapWrap
      font-manrope
      flex-col
      snap-y snap-mandatory
      overflow-y-scroll
      flex items-center justify-start
      max-h-screen
      min-h-screen min-w-full
      relative
      "
    >
    <div
      style={{
          transformStyle:'preserve-3d'
        }}
    className="
        p-3
        rounded-xl
        !shadow-none 
        top-1/2
        bg-black bg-opacity-20
        backdrop-blur-2xl
        transform-cpu
        -translate-y-1/2
        left-2
        fixed
      z-50  
        gap-[.5vmin]
    flex flex-col justify-center items-center    
        "
      >
    {dummyArr.map((item,index)=>(
      <p
        onClick={()=>handleScroll(index)}    
        key={index}
        style={{
            opacity: Math.max(.2,1-Math.abs(((y-  ((index+1)*h))/h))),     
            transform: `perspective(9vmin) translate3d(0,0,${handleScale(index)}vmin)`
          }}  
        className={`
          ${index===0? 'md:rounded-t-md rounded-t-sm':''} 
          ${index===child-1? 'md:rounded-b-md rounded-b-sm':''} 
          text-[clamp(.5rem,.4rem+.7vmin,.7rem)] md:text-base
          font-bold
          cursor-pointer 
          hover:bg-black hover:text-white
          transition-all ease-in-Expo
          backdrop-blur-sm backdrop-filter
          bg-white 
          flex items-center justify-center
          md:w-[2.45vmin] md:h-[3vmin]
          w-[4vmin] h-[4vmin]`}
          >
            <span
             >{
            index
            }</span>
          </p>
    ))}
      </div>  
      <div
        className="
        
        sticky top-0
        snap-start snap-always
        bg-amber-500
         flex-col
        flex items-center justify-center
        min-h-screen
        h-screen w-full"
      >
        <h3
          className="
          uppercase"
        >
          scroll-snap
        </h3>
        <div
          className="
          text-5xl lg:text-6xl
        flex flex-col items-center justify-center  
        -bottom-2  absolute
        "
        >
          <BsMouse />
          <span
            className="
            text-4xl lg:text-5xl
            motion-safe:animate-bounce"
          >
            <BiChevronDown />
          </span>
        </div>
      </div>
      <div
        className="
        flex-col flex items-center justify-center
        sticky top-0
        
        bg-zinc-300
        snap-start snap-always
        min-h-screen w-full"
      >
        <h1>1</h1>
      </div>

      <div
        className="

        flex-col flex items-center justify-center
        sticky top-0
       
        bg-red-700
        snap-start snap-always
        min-h-screen w-full"
      >
        <h1>2</h1>
      </div>

      <div
        className="
        flex-col flex items-center justify-center
        sticky top-0 
        bg-green-500
        snap-start snap-always
        min-h-screen w-full"
      >
        <h1>3</h1>
      </div>

      <div
        className="
        bg-indigo-800
        flex-col flex items-center justify-center
        sticky top-0
        snap-start snap-always
        min-h-screen w-full"
      >
        <h1>4</h1>
      </div>

      <div
        className="
        flex-col flex items-center justify-center
        sticky top-0 
        bg-sky-600
        snap-start snap-always
        min-h-screen w-full"
      >
        <h1>5</h1>
      </div>

    </section>
  );
};

export default InvertScroll;
