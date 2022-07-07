import { NextPage } from "next";
import React from "react";
import WordWrap from "./components/WordWrap";


const InfiniteCarousel: NextPage = () =>{


  const wordBank:string[] = ['Infinite Carousel' , 'without framework']

  const currentWord:string[] = []

  if(!currentWord.length){
      currentWord.push(...wordBank)
      console.log( 'this' , currentWord)
  }


  const handleInfinite = () => {
    console.log('this')
  }

  return(
    <section
     className=" 
      overflow-hidden
      max-w-full
      flex flex-col items-center justify-center
      min-h-screen min-w-full
      dark:bg-black"
      > 
      <div
        className="
        min-h-40
        overflow-x-scroll 
        max-w-full
        min-w-full border-8 border-zinc-700
        p-10
        flex items-center justify-start gap-10" 
       >

        {currentWord.map((item,index)=>(
          <WordWrap   
            key={index.toString()}
            index={index}
            word={currentWord[index]}/>  
        ))} 

      </div>

    </section>
  )
}


export default InfiniteCarousel
