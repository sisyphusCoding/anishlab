import React, {
  FC,
  ReactNode,
  Ref,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import { NextPage } from "next";
import { useScroll } from "react-use";

import { BsMouseFill } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { fail } from "assert";
const OppScroll: NextPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { y } = useScroll(scrollRef);

  let parallax = 0;
  let progressW = 0;

  const { current: elContainer } = scrollRef;
  let scrollH 
  let numOfChild = 0
  let thisScroll = 0
  if (elContainer) {
     thisScroll = elContainer.scrollTop
    scrollH = elContainer.scrollHeight
    parallax = y / elContainer?.clientHeight;
    progressW = elContainer.scrollTop / (elContainer.offsetHeight * 6);
    console.log('this is scrollHeight' ,scrollH);
    console.log(thisScroll)
  }

  return (
    <div
      ref={scrollRef}
      className="
      parallaxScroll
      scroll-smooth  
      overflow-x-hidden overflow-y-scroll
      snap-y snap-mandatory 
      flex flex-col items-start justify-start
      max-h-screen  w-screen relative
      "
    >
      <p
        className="
        flex items-center justify-start
        z-50
        bg-white bg-opacity-50
        backdrop-blur-sm backdrop-filter
        h-2 w-full
        absolute top-0 "
      >
        <span
          style={{
            transform: `scale(${progressW},1)`,
            transformOrigin: "left",
          }}
          className="
          w-full absolute top-0 left-0
          h-full bg-zinc-900 bg-opacity-90 transition-all ease duration-[0s]"
        />
      </p>

      <div
        className="         
        snap-start snap-always
        dark:text-zinc-500
        flex items-center justify-center  
        min-h-screen h-screen w-screen max-h-screen
        "
      >
        <div
          style={{
            transform: `translate3d(0,${parallax * 35}vh,0)`,
            opacity: `${parallax < 0.5 ? 1 : 0}`,
          }}
          className=" 
          mix-blend-color-dodge
          rounded-2xl 
          md:text-5xl text-4xl
          flex flex-col items-center justify-center
          absolute py-2 bottom-0 z-10"
        >
          <BsMouseFill />
          <span className="text-xl md:text-2xl animate-bounce mt-2">
            <FiChevronDown />
          </span>
        </div>
        <h1
          style={{
            transform: `translate3d(0,${parallax * 100}vh,0)`,
            opacity: `${parallax < 0.8 ? 1 : 0}`,
          }}
          className=" 
          mix-blend-color-dodge
          transition-all ease-in-Expo duration-[0s]
          w-full 
          z-10
          text-center
          lg:tracking-tight
          -tracking-widest
          uppercase
          absolute"
        >
          Aphorism
        </h1>

        <video
          muted
          playsInline
          autoPlay
          loop
          className="
      vid   
      object-cover 
      h-full min-w-full absolute top-0"
        >
          <source src="/phil/phil.mp4" />
        </video>
      </div>

        <Wrapper
          currentScroll={thisScroll}
          index={0}
          whichParent={scrollRef}
          quote="Do stuff. be clenched, curious. Not waiting for inspiration's shove or society's kiss on your forehead. Pay attention. It's all about paying attention. attention is vitality. It connects you with others. It makes you eager. stay eager."
          author="susan sontang"
        />

        <Wrapper

          currentScroll={thisScroll}
          index={1}
          whichParent={scrollRef}
          quote="I am going to outlive myself. Eat, sleep, sleep, eat. Exist slowly, softly, like these trees, like a puddle of water, like the red bench in the streetcar"
          author="Jean-Paul Sartre"
        />

        <Wrapper

          currentScroll={thisScroll}
          index={2}
          whichParent={scrollRef}
          quote="The world would be happier if men had the same capacity to be silent that they have to speak."
          author="Spinoza"
        />

        <Wrapper

          currentScroll={thisScroll}
          whichParent={scrollRef}
          index={3}
          quote="Suppose we were able to share meanings freely without a compulsive urge to impose our view or conform to those of others and without distortion and self-deception. Would this not constitute a real revolution in culture?"
          author="david bohm"
        />

        <Wrapper 

          currentScroll={thisScroll}
        whichParent={scrollRef} index={4} quote="" author="Buddha" />

        <Wrapper

          currentScroll={thisScroll}
          whichParent={scrollRef}
          index={5}
          quote="Empty words and phrases , just MEOW."
          author="Feline"
        /> 
    </div>
  );
};

interface wrapperProps {
  index: number;
  quote: string;
  author: string;
  whichParent: RefObject<Element>;
  currentScroll:number
}

const Wrapper = ({ index, quote, author, whichParent,currentScroll }: wrapperProps) => {
  const [enter, setEnter] = useState<boolean>(false);
 
  const childRef = useRef<HTMLDivElement>(null)  

  const {current: elChild} = childRef
  
  let topScroll = 0

  if(elChild){
    topScroll = elChild.clientHeight
  }

  const childScrollTop =  topScroll * (index+1)

  const scrolling =  Math.abs(currentScroll - childScrollTop )


  const checkCrossed = scrolling / topScroll


  let opacity  = 1 - checkCrossed

  return (
    <motion.div
      style={{opacity:opacity}}
      ref={childRef}
      className={`
      sticky top-0
      z-30
      lg:relative 
      snap-start snap-always
      transition-all ease 
      bg-white dark:bg-black 
      lg:flex-row flex-col 
      h-screen min-w-full flex items-center justify-between`}
    >
      <motion.div
        className={`        
        transition-all ease-in-Expo duration-700
        z-50
        w-full h-[70vh]
        lg:w-1/2 lg:min-h-screen 
        overflow-hidden dark:bg-black`}
      >
        <Image
          layout="responsive"
          width={500}
          height={800}
          src={`/phil/phil-${index}.webp`}
          alt="author"
        />
      </motion.div>
      <div
        className=" 
        sticky bottom-0 
        dark:bg-black bg-white
        lg:h-screen h-[30vh]
        w-full lg:w-1/2
        flex items-center justify-center flex-col
     "
      >
        <motion.p
          className="   
          text-justify
          leading-snug
          -tracking-wide
          px-10 py-5
           w-5/6
          md:text-xl lg:text-4xl
          "
        >
          {quote}
        </motion.p>
        <h5
          className="
          lg:px-32
          px-10 md:px-20
          self-end
          uppercase 
          text-xs font-bold
          md:text-lg lg:text-xl
          -tracking-wide"
        >
          - {author}
        </h5>
      </div>
    </motion.div>
  );
};

export default OppScroll;
