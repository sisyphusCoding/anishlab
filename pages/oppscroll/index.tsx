import React,{FC , ReactNode,useEffect,useRef, useState} from 'react'

import{motion} from 'framer-motion'
import Image from 'next/image'
import { NextPage } from 'next'
import {useScroll} from 'react-use'
import { WrappedBuildError } from 'next/dist/server/base-server'

const OppScroll:NextPage = ( ) =>{
  const scrollRef = useRef<HTMLDivElement>(null)
  const{y} = useScroll(scrollRef)
  
 let parallax = 0
  const {current:elContainer} = scrollRef

  if(elContainer){
    parallax = y / elContainer?.clientHeight
    console.log(parallax) 
  }

  return(
    <div
      ref={scrollRef}
     className='
      scroll-smooth  
      snap-y snap-mandatory
      overflow-y-scroll 
      flex flex-col items-start justify-start
      h-screen max-h-screen
       w-full '
      >

    <div  
       className=' 
        snap-start snap-always
        overflow-hidden
        min-h-screen min-w-full 
        '>

        <h1
        style={{
            transform:`translate3d(0,${parallax}rem,0)`,
            zIndex:`${parallax<1? 10 :-10}`     
            }}
         className=' 
          mix-blend-color-dodge
          top-[40vh]
          transition-all ease-in-Expo duration-[0s]
          min-w-full 
          text-center
          lg:tracking-tight
          -tracking-widest
          uppercase
          absolute'
         >Aphorism
        </h1>

    <video    
      
      muted playsInline autoPlay loop
      className='
      vid   
      object-cover 
      vid 
      min-h-screen min-w-full'
       > 
            <source src='/phil/phil.mp4'/> 
        </video>  
      </div> 


    <Wrapper index={0} 
        quote="Do stuff. be clenched, curious. Not waiting for inspiration's shove or society's kiss on your forehead. Pay attention. It's all about paying attention. attention is vitality. It connects you with others. It makes you eager. stay eager."
        author='susan sontang'/>

   <Wrapper index={1}
      quote='Life has no meaning a priori… It is up to you to give it a meaning, and value is nothing but the meaning that you choose'  
      author='Jean-Paul Sartre'/>

    <Wrapper 
        index={2} 
        quote='The world would be happier if men had the same capacity to be silent that they have to speak.' 
        author='Spinoza'/>


    </div>
  )
}


interface wrapperProps {
  index:number
  quote:string
  author:string
}

const Wrapper = ({index,quote,author}:wrapperProps) => {
  const[enter,setEnter] = useState<boolean>(false)
  return(
    <motion.div
      style={{insetInlineStart:0}}
      onViewportEnter={()=>setEnter(true)}
      onViewportLeave={()=>setEnter(false)}
       
     className={`
      ${enter? 
      'duration-[2s] opacity-100 delay-100'
      :'duration-[0s] delay-[0s] opacity-0'
      }
      z-30
      transition-all ease 
      snap-start snap-always
      overflow-hidden 
      lg:flex-row flex-col
      max-h-screen h-screen 
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
          height={700} width={500} 
          src={`/phil/phil-${index}.webp`} alt='author'/>
      </div>
       <div 
        className=' 
        sticky bottom-0 lg:top-0 
        bg-white dark:bg-black 
        lg:h-screen h-[30vh]
        lg:w-1/2 w-full 
        flex items-center justify-center flex-col
          overflow-hidden'>
        <motion.p 
          className='   
          text-justify
          tracking-tight
          p-4 
          text-xl md:text-3xl lg:text-4xl
           w-3/4'
         >
          {quote}
        </motion.p>
         <h5
          className='
          uppercase
          md:text-lg lg:text-xl
          -tracking-wide
          self-end px-32'
          >
          -{author}
        </h5> 
      </div>
    </motion.div>
  )
}


export default OppScroll
