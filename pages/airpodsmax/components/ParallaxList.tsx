import React, { FC, useContext, useRef } from 'react'
import { ScrollY } from '..'
import ParallaxChild from './ParallaxChild'

const ParallaxList: FC = () => {
    let currentY: number = useContext(ScrollY)

    const parallaxRef = useRef<HTMLElement>(null)

    const { current: elParallax } = parallaxRef

    let thisParentH: number = 0
    let parentTop: number = 0
    if (elParallax) {
        parentTop = elParallax.offsetTop
        thisParentH = elParallax.clientHeight
    }

    return (
        <section
            ref={parallaxRef}
            className="
       min-w-full
      min-h-[150vh]
      py-[2vh]
      z-10
      flex flex-col items-center justify-evenly
      "
        >
            {listContent.map((item, index) => (
                <ParallaxChild
                    id={index}
                    parentTop={parentTop}
                    parentH={thisParentH}
                    currentY={currentY}
                    key={index}
                    content={item}
                />
            ))}
        </section>
    )
}

const listContent: string[] = [
    'High-fidelity audio.',
    'Active noise Cancellation with Transparency mode.',
    'Spatial audio for theater-like sound that surrounds you.',
    'Stunning design with an exceptional fit.'
]

export default ParallaxList
