import React, { FC, useEffect, useRef } from "react";
import Image from "next/image";
const ScrollSnap: FC = () => {
  if (typeof window !== "undefined") {
    document.querySelector(".scrollSnapWrapper")?.scrollIntoView({
      inline: "center",
      behavior: "smooth",
    });

    const scrollWrap = document.querySelector(".scrollSnapWrapper");

    const cardSnap = document.querySelectorAll(".cardSnap");
    const imageSnap = document.querySelectorAll("imageSnap");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("revealSnap", entry.isIntersecting);
        });
      },
      {
        threshold: [0.99, 1],
        root: scrollWrap,
        rootMargin: "0%",
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
      //elProg.style.left = `${elScroll.scrollLeft}px`;
    }
  };

  useEffect(() => {
    scrolling();
  }, []);

  return (
    <main
      className="
      font-space
      flex flex-col items-center justify-center
      min-h-screen min-w-full"
    >
      <section
        className="
        gap-5 
        flex flex-col justify-center items-center"
      >
        <h4 className="text-xl lg:text-2xl w-full text-left">
          <span>Carousel made using scroll-snap</span>
        </h4>
        <div
          ref={scrollRef}
          onScrollCapture={() => scrolling()}
          className="  
        scrollSnapWrapper
          will-change-scroll
        scroll-smooth
        relative
        filter drop-shadow-[0_5px_10px_rgba(0,0,0,.7)]
        md:max-w-[95vw]
        max-w-[95vmin]
        overflow-x-auto
        snap-x snap-mandatory
        flex items-center justify-start
        h-fit w-fit "
        >
          {[0, 1, 2, 3, 4, 5, 6].map((item, index) => (
            <div
              style={{
                transformStyle: "preserve-3d",
              }}
              key={index}
              className={`
            ${index === 0 ? "ml-[50%]" : null}
            ${index === 6 ? "mr-[50%]" : null}
            filter blur-sm grayscale
            cardSnap opacity-50 duration-1000 
            transition-all ease-in-Expo
            snap-center snap-always
            inline-block h-auto 
            min-w-[95vmin] 
            md:min-w-[80vmin]`}
            >
              <Image
                className=""
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

        <div
          className="bg-white dark:bg-black
          relative
          bg-opacity-50
           backdrop-blur-sm backdrop-filter h-1 w-full "
        >
          <p
            ref={progRef}
            className="  
     
          absolute
          left-0
           
          z-40
          transition-all ease-linear duration-200
          bottom-0 bg-black dark:bg-zinc-400 h-1"
          />
        </div>
      </section>
    </main>
  );
};

export default ScrollSnap;
