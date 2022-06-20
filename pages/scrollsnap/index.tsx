import React, { FC, useEffect, useRef } from "react";
import Image from "next/image";
const ScrollSnap: FC = () => {
  if (typeof window !== "undefined") {
    document.querySelector(".scrollSnapWrapper")?.scrollIntoView({
      inline: "start",
      behavior: "smooth",
    });

    const scrollWrap = document.querySelector(".scrollSnapWrapper");

    const cardSnap = document.querySelectorAll(".cardSnap");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("revealSnap", entry.isIntersecting);
        });
      },
      {
        threshold: [0.99, 1],
        root: scrollWrap,
        rootMargin: "50%",
      }
    );

    cardSnap.forEach((card) => {
      observer.observe(card);
      console.log(card);
    });
  }

  const scrollRef = useRef<HTMLDivElement>(null);
  const progRef = useRef<HTMLParagraphElement>(null);

  const scrolling = () => {
    const { current: elScroll } = scrollRef;
    const { current: elProg } = progRef;

    if (elScroll! && elProg!) {
      let offset = elScroll.clientWidth / elScroll.scrollWidth;
      let progress = elScroll.scrollLeft / elScroll.scrollWidth;
      progress = Math.round((progress + offset) * 100);
      elProg.style.width = `${progress}%`;
      elProg.style.left = `${elScroll.scrollLeft}px`;
    }
  };

  useEffect(() => {
    scrolling();
  }, []);

  return (
    <main
      className="
      flex flex-col items-center justify-center
      min-h-screen min-w-full"
    >
      <div
        style={{
          transformStyle: "preserve-3d",
        }}
        ref={scrollRef}
        onScrollCapture={() => scrolling()}
        className=" 
        scrollSnapWrapper
        scroll-smooth
        relative
        filter drop-shadow-[0_5px_10px_rgba(0,0,0,.7)]
        lg:max-w-[100vmin]
        max-w-[95vmin]
        overflow-x-auto
        snap-x snap-mandatory
        flex items-end justify-start
        h-fit w-fit "
      >
        <p
          ref={progRef}
          className="  
          left-5 
          border-t-4 border-white
          bg-opacity-40
          z-40
          rounded-md
          absolute
          transition-all ease-linear duration-200
          bottom-0 bg-black h-2"
        />

        {[0, 1, 2, 3, 4, 5, 6].map((item, index) => (
          <div
            key={index}
            className="  
             rounded-xl
            scroll-px-9
            cardSnap opacity-0 duration-1000 
            transition-all ease-in-Expo
            snap-start snap-always
            inline-block h-auto 
            min-w-[95vmin] 
            lg:min-w-[100vmin]"
          >
            <Image
              className="rounded-xl"
              layout="responsive"
              alt={`art-${index}`}
              objectFit="cover"
              height={600}
              width={1000}
              src={`/art/art-${item}.jpg`}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default ScrollSnap;
