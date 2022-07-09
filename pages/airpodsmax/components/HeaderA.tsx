import React,{FC, useRef, useState} from "react";
import Image from "next/image";

interface headerProps{
    currScroll:number
  }

const HeaderA : FC<headerProps> = ({currScroll}) =>{



  
  const[headerLoaded,setHeaderLoaded] = useState<boolean>(false)

  const headRef = useRef<HTMLElement>(null) 

  const{current:elHeader} = headRef

  let h = 0

  let scaleFactor = 0

  let toggleTrans:boolean = false
  
  if(elHeader){
    h = elHeader.clientHeight
    scaleFactor = currScroll /h

    if(scaleFactor>1.4){
        scaleFactor = 1.4
      }

    toggleTrans = scaleFactor>1

    }

  

  return(
    
    <section
    ref={headRef}
    onLoad={()=>setHeaderLoaded(true)}  
     className="
      min-h-screen max-h-screen
      w-screen
      flex flex-col items-center justify-center"
     >

      <h1 
        style={{transform:`scale(${h/currScroll})`}}
        className={`
        ${headerLoaded? 'opacity-100 blur-0':'opacity-0'}
        transition-opacity ease-in-Expo duration-1000 delay-700
        px-10
        
        -tracking-wider
        text-[16vw]
        font-semibold whitespace-nowrap`} >AirPods Max</h1>

     <div 
      style={{
        transform:`scale(${toggleTrans? scaleFactor:''})`, 
        }}
       className={`
       ${headerLoaded? 'blur-0 opacity-100 scale-100':'blur-sm opacity-0 scale-[3]'} 
       ${toggleTrans?'transition-none':'transition-all ease-in-Expo duration-1000'}
        z-[2]
        drop-shadow-[0_5px_10px_rgba(0,0,0,.2)]
        dark:brightness-75
        absolute 
        min-w-[70vmin] h-auto`}>
     <Image    
        src={airpodsURL}
        layout="responsive"
        height={100} width={100}
        alt='airpods-max'
          />   
      </div> 
    </section>
  )
}
  const airpodsURL :string = 'https://www.apple.com/v/airpods-max/e/images/overview/hero__gnfk5g59t0qe_large_2x.png'

export default HeaderA
