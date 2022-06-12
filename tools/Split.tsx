import {FC} from 'react'


import {motion , Variants , HTMLMotionProps, AnimatePresence} from 'framer-motion'


interface Props extends HTMLMotionProps<"div"> {
  text:string,
  delay?:number
  duration?:number
  name:boolean
}


const Split: FC<Props> = ({
  text,
  delay = 0,
  duration = 0.05,
  name,
  ...props

}:Props) => {

  const letters = Array.from(text)

  const container: Variants = {
    exit:(i:number=1)=>({opacity:1 , 
      transition:{
        staggerDirection:-1,
        staggerChildren:duration,
        delayChildren:i/10,}
  
     }),
    hidden:{
      opacity:1
    },
    visible: (i:number = 1) => ({
      opacity:1,
      transition:{
        staggerDirection:1,
        staggerChildren:duration,
        delayChildren:i / 10,}
    }

    )
  }

  const child:Variants = {
    exit:{  
      opacity:1,y:'-100%', 
      transition:{
        type:'spring',
         damping: 27
      }
    },
    visible: { 
      opacity:1,y:0,
      transition:{
        type:'spring',
         damping: 27
      }
    },
      hidden:{ 
      opacity:1,y:'100%', 
      transition:{
        type:'spring',
         damping: 20
      }
    }
  }

  return (
 <AnimatePresence exitBeforeEnter>  
   {name?    
  <motion.span
      variants={container}
      initial='hidden'
      animate='visible'
      exit='exit'
      style={{
          display:'flex',
          overflow:'hidden', 
      }}
    {...props}
     >
    {letters.map((letter,index)=>(
          <motion.span
              style={{
              willChange:'transform', 
          }} 
              key={index}
              variants={child}
            >
         {letter === " " ? "\u00A0" : letter}
        </motion.span>
    ))}

    </motion.span> 
  :null}
  </AnimatePresence>   
  )

}  



export default Split
