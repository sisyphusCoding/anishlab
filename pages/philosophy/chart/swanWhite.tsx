import React, {FC} from "react";


import {GiSwan} from 'react-icons/gi'


const SwanWhite: FC = () => {

  let swanSize ='10vw'

  return( 
    <div
     className="px-10
      grid place-items-center 
      h-full w-full"
     >

  
     <div 
       className="
        text-justify
        -tracking-wider
        gap-[2vmin]
        rounded-xl
        p-10
        bg-cyan-600 dark:bg-cyan-800
        h-[60vmin]
        lg:max-w-[65vw]
        w-full flex items-center justify-between"
       >
        <div
         className="
          px-5
          grow
          h-full
          place-items-center
          grid grid-cols-3
          max-w-[70%]  text-zinc-300"
         >

        <GiSwan size={swanSize} />

        <GiSwan size={swanSize} />
        <GiSwan size={swanSize} />
        <GiSwan size={swanSize} />
        <GiSwan size={swanSize} />
        </div>


      <div 
         className="
          h-full
          max-w-[30%]
          border-l-4 border-[rgba(0,0,0,.4)]
          flex flex-col items-center justify-evenly
          text-zinc-900"
         >

        <GiSwan size={swanSize} />
       

        <p
           className="
            lg:text-lg 
            lg:max-w-sm max-w-xs px-2 text-xs"
           >
            The theory “All swans are white” is scientific, because the discovery of
a black swan would show it to be false.
          </p>  
      </div>

      </div> 

        

    </div>

)}


export default SwanWhite
