import React,{FC , ReactNode,Ref,RefObject,useEffect,useRef, useState} from 'react'

import{motion} from 'framer-motion'
import Image from 'next/image'
import { NextPage } from 'next'
import {useScroll} from 'react-use'

import{BsMouseFill} from 'react-icons/bs'
import{FiChevronDown} from 'react-icons/fi'
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
      overflow-x-hidden overflow-y-scroll
      snap-y snap-mandatory 
      flex flex-col items-start justify-start
      max-h-screen  w-screen
      '
      >

    <div  
       className=' 
        dark:text-zinc-500
        snap-start snap-always
        flex items-center justify-center  
        min-h-screen w-screen
        relative 
        '>
        <div 

        style={{
            transform:`translate3d(0,${parallax*40}vh,0)`,
            opacity:`${parallax<.5? 1:0}` 
            }}
          className='
          
          mix-blend-color-dodge
          rounded-2xl 
          md:text-5xl text-4xl
          flex flex-col items-center justify-center
          absolute py-2 bottom-0 z-10'>
          <BsMouseFill/>
          <span
            className='text-xl md:text-2xl animate-bounce mt-2'>
          <FiChevronDown/>
          </span>
        </div>
        <h1
        style={{
            transform:`translate3d(0,${parallax*100}rem,0)`,
            opacity:`${parallax<.5? 1:0}` 
            }}
         className=' 
          mix-blend-color-dodge
          transition-all ease-in-Expo duration-[0s]
          w-full 
          z-10
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
      h-full min-w-full absolute top-0'
       > 
            <source src='/phil/phil.mp4'/> 
        </video>  
      </div> 


    <Wrapper index={0} 
        whichParent={scrollRef}
        quote="Do stuff. be clenched, curious. Not waiting for inspiration's shove or society's kiss on your forehead. Pay attention. It's all about paying attention. attention is vitality. It connects you with others. It makes you eager. stay eager."
        author='susan sontang'/>

   <Wrapper index={1}

        whichParent={scrollRef}
       quote='I am going to outlive myself. Eat, sleep, sleep, eat. Exist slowly, softly, like these trees, like a puddle of water, like the red bench in the streetcar' 
      author='Jean-Paul Sartre'/>

    <Wrapper 
        index={2} 

        whichParent={scrollRef}
        quote='The world would be happier if men had the same capacity to be silent that they have to speak.' 
        author='Spinoza'/>


      <Wrapper
        whichParent={scrollRef}
        index={4}
        quote="Suppose we were able to share meanings freely without a compulsive urge to impose our view or conform to those of others and without distortion and self-deception. Would this not constitute a real revolution in culture?"
        author="david bohm"
      />

      <Wrapper whichParent={scrollRef} index={3} quote="" author="Buddha" />

      <Wrapper
        whichParent={scrollRef}
        index={99}
        quote="Empty words and phrases , just MEOW."
        author="Feline"
      />



</div>
  )
}


interface wrapperProps {
  index:number
  quote:string
  author:string
  whichParent:RefObject<Element>
}

const Wrapper = ({index,quote,author,whichParent}:wrapperProps) => {
  const[enter,setEnter] = useState<boolean>(false)
  return(
    <motion.div 
      viewport={{root:whichParent}}
      onViewportEnter={()=>setEnter(true)}
      onViewportLeave={()=>setEnter(false)} 
     className={`
      z-30
      sticky top-0
      snap-start snap-always
      transition-all ease 
      bg-white dark:bg-black 
      lg:flex-row flex-col
      max-h-screen
      min-h-screen min-w-full flex items-center justify-between`}
      >
      <div  
        className='
        z-50
        w-full h-[70vh]
        lg:w-1/2 lg:min-h-screen 
        overflow-hidden dark:bg-black'
        >
        <Image
          layout='responsive'
          width={500} height={800}
          src={`/phil/phil-${index}.webp`} alt='author'/>
      </div>
       <div 
        className=' 
        sticky bottom-0 lg:relative
        dark:bg-black bg-white
        lg:h-screen h-[30vh]
        w-full lg:w-1/2
        flex items-center justify-center flex-col
          overflow-hidden'>
        <motion.p 
          className='   
          text-justify
          tracking-tight
          p-4 
          lg:w-1/2 w-4/5 md:w-3/5
          md:text-xl lg:text-4xl
          '
         >
          {quote}
        </motion.p>
         <h5
          className='
          lg:px-32
          px-10 md:px-20
          self-end
          uppercase 
          text-xs font-bold
          md:text-lg lg:text-xl
          -tracking-wide'
          >
          - {author}
        </h5> 
      </div>
    </motion.div>
  )
}


export default OppScroll
