import React, {FC} from "react";


import {GiSwan} from 'react-icons/gi'


const SwanWhite: FC = () => {

  let swanSize ='12vmin'

  return( 
    <div
     className="
      font-semibold
      font-space
      grid place-items-center 
      h-full w-full"
     > 
     <div 
       className="
        overflow-hidden
        rounded-2xl
        shadow-2xl
        bg-blue-500
        bg-opacity-80
        h-fit
        max-w-[80%]
        w-fit
        flex items-stretch justify-between"
       >
        <div
         className="
          px-10
          py-40 
          grow
          bg-[rgba(0,0,0,.1)] 
          place-items-center
          grid grid-cols-3
          text-zinc-300"
         >

        <GiSwan size={swanSize} />
        <GiSwan size={swanSize} />
        <GiSwan size={swanSize} />
        <GiSwan size={swanSize} />
        <GiSwan size={swanSize} />
        <p
           className="
            lg:text-md
            lg:max-w-sm max-w-xs px-2 text-xs"
           >
Based on observation, scientists may theorize that all swans are white.
          </p>  
        </div>


      <div 
         className="
          px-10 
          py-40
          min-h-full
          max-w-[30%]
          flex flex-col items-center justify-between
          "
         >

        <GiSwan className="text-zinc-900" size={swanSize} />

        <p
           className="
            lg:text-md
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
