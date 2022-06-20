import React,{FC, useEffect, useRef} from "react";
import Image from "next/image";
const ScrollSnap: FC = () => {

  if(typeof window !== "undefined"){
  document.querySelector('.scrollSnapWrapper')?.scrollIntoView({
      inline:'end'
      ,behavior:'smooth'
    })
  }
  
  const scrollRef = useRef<HTMLDivElement>(null)
  const progRef = useRef<HTMLParagraphElement>(null)


  

  

const scrolling = () => {

  const{current:elScroll} = scrollRef
  const{current:elProg} = progRef


  if(elScroll!&&elProg!){  
    let offset = elScroll.clientWidth / elScroll.scrollWidth
   let progress =  elScroll.scrollLeft / (elScroll.scrollWidth)
    progress = Math.round((progress + offset) *100)
    elProg.style.width = `${progress}%`
    elProg.style.left = `${elScroll.scrollLeft}px`

    }
  }

useEffect(()=>{
    scrolling()
  },[])

  return(
    <main
     className="
      flex flex-col items-center justify-center
      min-h-screen min-w-full"
      >

     
    <div  
      ref={scrollRef}     
     onScrollCapture={()=>scrolling()} 
     className=" 
        scrollSnapWrapper
        scroll-smooth
        relative
        filter drop-shadow-[0_5px_10px_rgba(0,0,0,.7)]
        lg:max-w-[100vmin]
        max-w-[95vmin]
        overflow-x-scroll
        snap-x snap-mandatory
        flex items-end justify-start
        h-fit w-fit ">
    
      <p
        ref={progRef} 
        className="  
          mix-blend-exclusion
          z-40
          bg-opacity-80
          absolute
          transition-all ease-linear duration-200
          bottom-0  bg-white h-2"/>  
     

  {[0,1,2,3,4,5,6].map((item,index) =>(  
      <div 
      key={index}

        className="  
            snap-start snap-always
            inline-block h-auto 
            min-w-[95vmin] 
            lg:min-w-[100vmin]">   
      <Image  
        layout='responsive'
        alt={`art-${index}`}
        objectFit="cover"
        height={600}
        width={1000}
        src={`/art/art-${item}.jpg`} /> 
      </div>  

  ))}  
      </div>
    </main>
  )

}


export default ScrollSnap
