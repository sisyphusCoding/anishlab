import { elementDragControls } from 'framer-motion/types/gestures/drag/VisualElementDragControls'
import { off } from 'process'
import React, { FC, useRef } from 'react'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript'

interface parallaxChildProps {
    parentTop: number
    content: string
    currentY: number
    parentH: number
    id: number
}

const ParallaxChild: FC<parallaxChildProps> = ({
    parentTop,
    content,
    currentY,
    parentH,
    id
}) => {
    const paraRef = useRef<HTMLParagraphElement>(null)

    const { current: elPara } = paraRef

    let offTop = 0
    let h = 0

    if (elPara) {
        h = elPara.clientHeight
        offTop = elPara.offsetTop
        let windowH = window.innerHeight
    }

    let customY = currentY * 1.5

    let startTrigger = customY > offTop

    let endTrigger = customY > offTop + h

    let start = (offTop - customY) / customY
    let end = (offTop + h - customY) / customY

    let trialOpac = 0

    let transY = 200

    if (startTrigger) {
        trialOpac = 1
        transY = 0
        if (endTrigger) {
            trialOpac = 0
            transY = -200
        }
    }


    return (
        <p
            style={{ opacity: trialOpac }}
            ref={paraRef}
            className=" 
            py-[8vh]
            transition-opacity ease-in-Expo duration-1000
            text-center
            max-w-[80vmin]
            text-white
            font-semibold
            inline-flex 
            text-[6vmin]
              "
        >
            <span
                style={{
                    transform: `translate3d(0,${transY}%,0)`
                }}
                className={`
            -tracking-wide
            transition-all ease-in-Expo duration-1000
            `}
            >
                {content}
            </span>
        </p>
    )
}

export default ParallaxChild
