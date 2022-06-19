import React, {FC} from "react";


import {GiSwan} from 'react-icons/gi'


const SwanWhite: FC = () => {

  let swanSize ='12vmin'

  return( 
    <div
     className="
      
      text-zinc-300
      font-semibold
      grid place-items-center 
      h-full w-full"
     > 
     <div 
       className="
        overflow-hidden

        rounded-2xl
        shadow-2xl
        bg-blue-500 
        max-h-[70vh]
        lg:h-fit lg:max-h-fit
        max-w-[80%]
        w-fit
        lg:flex-row
        flex-col
        flex items-stretch justify-between"
       >
        <div
         className="
          lg:px-10
          px-[4vh]
          lg:py-40 
          py-[5vh]
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
            text-[clamp(.65rem,.5rem+1vmin,.8rem)] 
            
            p-4"

           >
Based on observation, scientists may theorize that all swans are white.
          </p>  
        </div>


      <div 
         className="
          lg:px-10 
          px-[4vh]
          lg:py-40 
          py-[5vh]
          min-h-full
          lg:max-w-[30%]
          flex flex-col items-center justify-between
          "
         >

        <GiSwan className="text-zinc-900" size={swanSize} />

        <p
           className="
text-[clamp(.65rem,.5rem+1vmin,.8rem)] 
            lg:max-w-sm px-2"
           >
            The theory “All swans are white” is scientific, because the discovery of
a black swan would show it to be false.
          </p>  
      </div>

      </div> 

        

    </div>

)}


export default SwanWhite
