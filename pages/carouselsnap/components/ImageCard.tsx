import React, { FC, RefObject, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { useIntersection } from "react-use";

interface imageCardProps {
  imageURL: StaticImageData
  index: number;
  lastChild: number;
  parentRef: RefObject<Element>;
}

const ImageCard: FC<imageCardProps> = ({
  imageURL,
  index,
  lastChild,
  parentRef,
}) => {
  const imgRef = useRef<HTMLDivElement>(null);

  const intersect = useIntersection(imgRef, {
    root: parentRef.current,
    rootMargin: "80px",
    threshold: 1,
  });

  const outOfView = intersect && intersect.intersectionRatio < 1;

  return (
    <div
      ref={imgRef}
      style={{ transformStyle: "preserve-3d" }}
      className={`
      ${index === 0 ? "ml-[100%]" : ""}
      ${index === lastChild - 1 ? "mr-[100%]" : ""} 
      relative
      snap-always snap-center
      rounded-xl overflow-hidden
      h-auto
      min-w-[65vmin]
      max-w-[65vmin]`}
    >
      <Image
        style={{
          transform: `perspective(400rem) translate3d(0,0,${
            outOfView ? "-200" : "30"
          }rem) `,
        }}
        className={`
        rounded-xl
        filter transition-all ease-in-Expo duration-500
        ${outOfView ? "blur-sm opacity-80" : "blur-0 opacity-100"}
        `}
        layout="responsive"
        priority
        objectFit="cover"
        height={500}
        width={800}
        src={imageURL}
        alt={index.toString()}
      />
    </div>
  );
};

export default ImageCard;
