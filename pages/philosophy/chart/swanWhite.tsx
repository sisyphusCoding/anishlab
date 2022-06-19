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
        lg:flex-row
        flex-col
        flex items-stretch justify-between"
       >
        <div
         className="
          lg:px-10
          px-[14vw]
          lg:py-40 
          py-[5vmin]
          grow
          bg-[rgba(0,0,0,.1)] 
          flex
          flex-row items-center flex-wrap 
          justify-between 
          text-zinc-300"
         >

        <GiSwan size={swanSize} />
        <GiSwan size={swanSize} />
        <GiSwan size={swanSize} />
        <GiSwan size={swanSize} />
        <GiSwan size={swanSize} />

        <p
           className="
            text-[clamp(.5rem,1vmin,1rem)]
            max-w-md 

            p-4"

           >
Based on observation, scientists may theorize that all swans are white.
          </p>  
        </div>


      <div 
         className="
          lg:px-10 
          px-[14vw]
          lg:py-40 
          py-[5vmin]
          min-h-full
          lg:max-w-[30%]

          flex flex-col items-center justify-between
          "
         >

        <GiSwan className="text-zinc-900" size={swanSize} />

        <p
           className="

            text-[clamp(.5rem,1vmin,1rem)]
            
            lg:max-w-sm max-w-xs px-2"
           >
            The theory “All swans are white” is scientific, because the discovery of
a black swan would show it to be false.
          </p>  
      </div>

      </div> 

        

    </div>

)}


export default SwanWhite
