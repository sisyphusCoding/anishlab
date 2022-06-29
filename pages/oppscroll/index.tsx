import React,{FC , ReactNode,useRef} from 'react'


import Image from 'next/image'
import { NextPage } from 'next'
import {useScroll} from 'react-use'

const OppScroll:NextPage = ( ) =>{
  const scrollRef = useRef<HTMLDivElement>(null)
  const{y} = useScroll(scrollRef)

  return(
    <div
      ref={scrollRef}
     className='
      relative
      scroll-smooth
      overflow-y-scroll
      snap-y snap-mandatory
      flex flex-col items-start justify-start
      max-h-[200vh]
      h-screen w-full '
      >
    <div 

       className='
        top-0
        overflow-hidden
        min-h-screen min-w-full 
        snap-start snap-always
        '>

        <h1
        style={{transform:`translateY(${y/20}vh)`}}
         className='
          z-10
          mix-blend-color-dodge
          top-[40vh]
          transform-cpu
          min-w-full 
          text-center
          lg:tracking-tight
          -tracking-widest
          uppercase
          absolute'
         >philosophy
        </h1>

    <video
        muted playsInline autoPlay loop
       className='
      object-cover
      
      min-h-screen min-w-full'
       >
        <h1>anish</h1>
        <source src='/phil/phil.mp4' /> 
      </video>  
      

      </div> 


    <Wrapper index={0} 
        quote='Everything transitory , the knower and the known' 
        author='Marcus Aurelius'/>


    <Wrapper 
        index={1} 
        quote='The world would be happier if men had the same capacity to be silent that they have to speak.' 
        author='Spinoza'/>

     

    <Wrapper index={2} quote='this one' author='marcus'/>
    </div>
  )
}


interface wrapperProps {
  index:number
  quote:string
  author:string
}

const Wrapper = ({index,quote,author}:wrapperProps) => {

  return(
    <div
     className={`
      sticky top-0
      snap-start snap-always
      overflow-hidden 
      lg:flex-row flex-col-reverse
      min-h-screen min-w-full flex items-center justify-between`}
      >
      <div  

        className='
        w-full h-[70vh]
        lg:w-1/2 lg:h-screen 
        overflow-hidden bg-black'
        >
        <Image 
          layout='responsive'
          objectFit='cover'
          height={700} width={700} 
          src={`/phil/phil-${index}.webp`} alt='author'/>
      </div>
       <div 

        className='
        bg-white dark:bg-black 
        lg:h-screen h-[30vh]
        lg:w-1/2 w-full 
        flex items-center justify-center flex-col
          overflow-hidden'>
        <p 
          className='
         
          p-4 
          text-4xl md:text-6xl
          -tracking-wider w-3/4'
         >
          {quote}
        </p>
         <h5
          className='
          uppercase
          tracking-tighter
          self-end px-32'
          >
          -{author}
        </h5> 
      </div>
    </div>
  )
}


export default OppScroll
