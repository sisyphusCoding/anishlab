import {FC} from 'react'


import {motion , Variants , HTMLMotionProps} from 'framer-motion'


interface Props extends HTMLMotionProps<"div"> {
  text:string,
  delay?:number
  duration?:number
}


const Split: FC<Props> = ({
  text,
  delay = 0,
  duration = 0.07,
  ...props

}:Props) => {

  const letters = Array.from(text)

  const container: Variants = {
    hidden:{
      opacity:0
    },
    visible: (i:number = 1) => ({
      opacity:1,
      transition:{staggerChildren:duration,delayChildren:0.25}
    })
  }


  const child:Variants = {
    visible: { 
      opacity:1,y:0,
      transition:{
        type:'spring',
         damping: 20
      }
    },
      hidden:{ 
      opacity:1,y:'100%'
    }
  }

  return (
  <motion.span
      variants={container}
      initial='hidden'
      animate='visible'
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
  )

}  



export default Split
