import React , {FC, ReactNode} from "react";

interface Props{
  title:string
  author:string
  children:ReactNode
}


const PhilCard:FC<Props> = ({title,author,children}) => {
 return(
  <div 
    className="
      min-h-screen min-w-full 
      flex flex-col lg:flex-row"
     >

    <div 
    className="
        bg-zinc-50 text-zinc-700
        dark:bg-zinc-900 dark:text-zinc-300
        w-full lg:grow lg:w-fit
        h-[30vh] lg:min-h-screen
        flex flex-col
        px-11
        lg:gap-6
        lg:justify-center
        items-center justify-evenly">
        <h4
         className="
          max-w-[50vmin]
          items-end
          flex-col  flex
          font-semibold uppercase"
         >
         <span className="text-2xl lg:text-5xl" >{title}</span>
         <span className="text-xs lg:text-lg">-{author}</span>
         </h4>
      </div>

    <div 
    className="
    dark:bg-black
    grid place-items-center
    w-full
    h-[70vh] lg:min-h-screen ">
        {children}
      </div>

  </div>)
}


export default PhilCard
