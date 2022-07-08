import { NextPage } from "next";
import React,{useEffect} from "react";
import WordWrap from "./components/WordWrap";


const InfiniteCarousel: NextPage = () =>{


  const wordBank:string[] = ['Infinite Carousel' , 'made using','Intersection observer']

  const currentWord:string[] = []

  if(!currentWord.length){
      currentWord.push(...wordBank)
      console.log( 'this' , currentWord)
  }

 
  useEffect(()=>{
    console.log('this')
  },[currentWord.length])

  const handleInfinite = () => {
      currentWord.push(...wordBank)
      console.log('GOT THIS ' , currentWord)
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
            len={wordBank.length}
            handleInfinite={handleInfinite}
            key={index.toString()}
            index={index}
            word={currentWord[index]}/>  
        ))} 

      </div>

    </section>
  )
}


export default InfiniteCarousel
