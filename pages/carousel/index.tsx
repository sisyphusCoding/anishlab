import React , {FC, useState} from "react";

import {BsCaretLeftFill , BsCaretRightFill} from 'react-icons/bs'
import {motion , AnimatePresence, Variant, Variants, animate} from 'framer-motion'

import Image from "next/image";

import{usePrevious,useFirstMountState} from 'react-use'

import cat0 from "/cat/cat0.jpeg";
import cat1 from "/cat/cat1.jpeg";
import cat2 from "/cat/cat2.jpeg";
import cat3 from "/cat/cat3.jpeg";
import cat4 from "/cat/cat4.jpeg";
import cat5 from "/cat/cat5.jpeg";
import cat6 from "/cat/cat6.jpeg";
import { exit } from "process";
import { setConfig } from "next/config";


const Carousel : FC = () => {


  const catList = [cat0,cat1,cat2,cat3,cat4,cat5,cat6]
  const [whichCat,setWhichCat] = useState<number>(0)
 
  
  let prevCat:any = 0

   prevCat= usePrevious(whichCat)
  

  
 
  let dec = whichCat > prevCat? 'inc' :'dec'   
  




  const slide :Variants = {
    hidden: (dec:any)=>({x:dec === 'inc'? '120%':'-120%' }),
    animate:{x:0},
    exit: (dec:any)=>({x:dec === 'inc'? '-120%':'120%' }),
    
  }



  const setMotion = (direction:string) => {
   

    if(direction === 'right'  ){
      if(whichCat === catList.length) return
      setWhichCat(whichCat+1)
    }else if(direction=== 'left') {
      if(whichCat === 0) return
      setWhichCat(whichCat-1)
    }

  }


    const keyMotion = (e:any)=>{

    
    if(e.keyCode ===37){
      {whichCat !== 0? 
      setMotion('left')   :null}
    }else if (e.keyCode === 39){
      {whichCat !== catList.length-1?
      setMotion('right')
      : null}
    }else return

    }


  return (
    <main
      style={{aspectRatio:'1.5'}}

     className="
      bg-zinc-200
      dark:bg-zinc-800
      p-4
      rounded-lg shadow-2xl
      flex w-[95vmin] flex-col
      items-center justify-between"
      >
        <h4>
          {prevCat}
          Carousel made with framer-motion
        </h4>


        <section
            onKeyDown={(e)=>keyMotion(e)}
           className="
            relative
            flex 
            items-center justify-between
            w-full h-full grow" 
          >
        
        <button
          disabled={whichCat === 0}
          onClick={()=>setMotion('left')} 
          >
          <BsCaretLeftFill  
            className={`
            ${whichCat===0? 'opacity-20 cursor-not-allowed':''}
            transition-all ease duration-300
            hover:text-zinc-700
            text-zinc-500
            dark:text-zinc-400
            dark:hover:text-zinc-600
            cursor-pointer`}
            size='5vmin' />
        </button>
        <div
          onPointerLeave={()=>console.log('yes noe')}
         className="            
          w-[80vmin] h-[50vmin]
          relative
          filter  
          drop-shadow-[0_5px_20px_rgba(0,0,0,.4)]
          dark:drop-shadow-[0_5px_30px_black]
          p-5 grid place-items-center 
          overflow-hidden
           "
         >
          <AnimatePresence 
            custom={dec}
            >
          <motion.div  
            key={whichCat}
            variants={slide}
            initial='hidden'
            animate='animate'
            exit='exit'  
            custom={dec}   
            transition={{duration:1,easings:'circOut'}}
            className=" 
              absolute w-[75vmin] h-[45vmin]
              rounded-xl overflow-hidden
              "
            >
            <Image 
              alt={`${catList[whichCat]}`}
              objectFit="cover"
              height={.7} width={1}
             src={catList[whichCat]}
             layout='responsive'/>
          </motion.div>
      </AnimatePresence>
        </div>

          <button
          disabled={whichCat === catList.length-1}
            
          onClick={()=>setMotion('right')} 
            >
          <BsCaretRightFill  
            className={`
            ${whichCat===catList.length-1? 'opacity-20 cursor-not-allowed':''}
            transition-all ease duration-300
            hover:text-zinc-700
            text-zinc-500
            dark:text-zinc-400
            dark:hover:text-zinc-600
            cursor-pointer`}
            size='5vmin' />   
      </button>
        </section>


    </main>
  )
}


export default Carousel
