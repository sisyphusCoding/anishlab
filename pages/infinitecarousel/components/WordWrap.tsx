import React,{FC, useRef} from "react";
import{useIntersection} from 'react-use'

interface wordwrapProps{
  word:string
  index:number
}


const WordWrap: FC<wordwrapProps> = ({word,index}) => {
  
  const intRef = useRef<HTMLHeadingElement>(null)

  
  const intersection = useIntersection(intRef,{
    root:null,
    rootMargin:'0px',
    threshold:.5
  })
    

  if(intersection&&intersection.intersectionRatio<0.5){
    console.log(index,'is done')
  }else if(intersection&&intersection.intersectionRatio>0.5){
    console.log(index,'is wating')
  }



  return(
      <h3
        ref={intRef}
        className="
          flex-col flex items-end
          z-10
          rounded-3xl shadow-2xl
          bg-opacity-10 backdrop-blur-md
          bg-zinc-500
          py-5 px-7
         whitespace-nowrap"
        >
        <span> {word} </span>  

        <span
          className="text-xs"
          > 
        {intersection&& intersection.intersectionRatio<0.5?'Yes':'No'} 
        </span>
    </h3>
  )

}



export default WordWrap
