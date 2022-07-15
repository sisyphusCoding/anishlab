import React, { FC } from "react";

interface scrollTextProps{
  scrollY:number
}


const ScrollText:FC<scrollTextProps> = ({scrollY})=>{

  return(

  <section
      className="
      relative 
      font-space
      text-zinc-400
      flex flex-col items-center justify-center
      min-h-screen h-screen w-screen bg-black"
      > 
      <h1
        className="text-4xl top-0 absolute left-0"
        >
      {scrollY}
      </h1> 
      <div
       className="
        outline outline-2 outline-white
        flex flex-col items-start justify-center
        min-w-full"
        >
        {quotes.map((item,index)=>(
          <p
           key={index}
           className=' 
            first-letter:text-[clamp(1.3rem,0.5rem+7vmin,7rem)]
            first-letter:text-zinc-300
            text-justify
            -tracking-wider
            text-[clamp(0.75rem,0.5rem+3.5vmin,3rem)]
            font-semibol
            px-12
            py-3' 
            > 
            &ldquo;{item}&rdquo;
          </p>
        ))}
      </div>


    </section>

)}

const quotes:string[] = [
  "One is never afraid of the unknown; one is afraid of the known coming to an end.",
  "You can only be afraid of what you think you know.",
  "The plain fact is that if you don't have a problem, you create one. If you don't have a problem you don't feel that you are living.",
  "Sometimes we are so involved with our activity that we lose ourselves in it, and in that sense we are living in the moment." 
]

export default ScrollText
