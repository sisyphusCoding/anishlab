import { FC, useState } from "react";

import { motion, MotionConfig, AnimatePresence } from "framer-motion";

import { useMeasure } from "react-use";
let duration: number = 1;
const Resize: FC = () => {
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <MotionConfig transition={{ duration }}>
      <section
        className="
      gap-5
      items-center justify-center
      bg-zinc-200 
      dark:bg-zinc-800
      rounded-lg
      shadow-2xl
      flex flex-col p-10
      w-[65vmin] md:w-[50vmin]"
      >
        <h3>Socrates</h3>

        <button
          onClick={() => setExpand(!expand)}
          className="
        outline-none  
        self-start
        transition-all ease duration-300
        hover:grayscale filter 
        focus:grayscale 
        rounded-lg 
        shadow-xl
        cursor-pointer px-6 py-2 bg-cyan-500 dark:bg-cyan-900 w-fit"
        >
          Death
        </button>

        <ResizePanel id={expand.toString()}>
          {expand ? (
            <p
              className="
            leading-tight
            text-justify
            min-w-full"
            >
              {desciption}
            </p>
          ) : (
            <p
              className="
            tracking-wide
            text-justify
            min-w-full"
            >
              He was arguably guilty...
            </p>
          )}
        </ResizePanel>
      </section>
    </MotionConfig>
  );
};

interface Props {
  children?: React.ReactNode;
  id: string;
}

const ResizePanel = ({ children, id }: Props) => {
  const [ref, { height }] = useMeasure<HTMLDivElement>();

  return (
    <motion.div
      className="overflow-hidden min-w-full relative"
      animate={{ height }}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={id}
          initial={{ opacity: 0, x: "50%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-50%", transition: { duration: duration / 2 } }}
        >
          <div ref={ref} className={`${height ? "absolute" : "relative"}`}>
            {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

let desciption =
  "He was arguably guilty of the crimes with which he was charged, impiety and corrupting the youth, because he did reject the city’s gods and he did inspire disrespect for authority among his youthful followers (though that was not his intention).He was accordingly convicted and sentenced to death by poison. ";
export default Resize;
