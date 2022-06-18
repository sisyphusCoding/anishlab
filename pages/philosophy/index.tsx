import React,{FC} from "react";
import SwanWhite from "./chart/swanWhite";
import PhilCard from "./subtree/philCard";




const Philosophy: FC = () => {
return(
    <section
     className="min-h-screen min-w-full"
      >
    <PhilCard
      title="are all swans white?" 
      author="Karl Popper"  
      
       >
        <SwanWhite />
      </PhilCard>
   </section>)
}



export default Philosophy
