import { RiSunFill, RiMoonFill } from "react-icons/ri";

import { motion } from "framer-motion";
import { useEffect, useState, FC } from "react";
import{useEffectOnce} from 'react-use'
const ThemeButton: FC = () => {
  const [dark, setDark] = useState<boolean>(false);

  
  useEffectOnce(()=>{


    if(window.matchMedia('(prefers-color-scheme:dark)').matches){
      setDark(true)
    }

  })  


  useEffect(() => {


    {
      dark
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <section
      className="
     z-[999] fixed top-3 right-3"
    >
      <motion.div
        onClick={() => setDark(!dark)}
        animate={{ rotateY: dark ? 180 : 0 }}
        transition={{ duration: 1.5, type: "spring", damping: 10 }}
        className="page
          relative
          cursor-pointer
          grid place-items-center
          h-11 rounded-xl
          bg-zinc-700
          "
      >
        <div
          className="front absolute
     filter drop-shadow-[0_0px_5px_black]"
        >
          <RiSunFill color="rgba(255,255,255,.6)" size={"1.7rem"} />
        </div>

        <div
          className="back absolute
            filter drop-shadow-[0_0_5px_black] 
             "
        >
          <RiMoonFill color="rgba(255,255,255,.5)" size={"1.7rem"} />
        </div>
      </motion.div>
    </section>
  );
};

export default ThemeButton;
