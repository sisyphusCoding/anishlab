import React, {
    FC,
    useContext,
    useRef,
    useState,
    useSyncExternalStore
} from 'react'
import Image from 'next/image'
import { ScrollY } from '..'

const HeaderA: FC = () => {
    const [headerLoaded, setHeaderLoaded] = useState<boolean>(false)

    let currentY = useContext(ScrollY)


    const headRef = useRef<HTMLElement>(null)

    const { current: elHeader } = headRef

    let h = 0

    let scaleFactor = 0

    let toggleTrans: boolean = false

    if (elHeader) {
        h = elHeader.clientHeight
        currentY += h
        scaleFactor = currentY / 1.5 / (h / 1.5)

        if (scaleFactor > 1.3) {
            scaleFactor = 1.3
        }

        toggleTrans = scaleFactor > 1
    }

    let textScale = h / currentY

    return (
        <section
            ref={headRef}
            onLoad={() => setHeaderLoaded(true)}
            className="
      dark:text-zinc-300
      bg-zinc-300 dark:bg-black
      z-10
      min-h-screen 
      min-w-full
      max-w-full
      flex flex-col items-center justify-center"
        >
            <h1
                style={{ transform: `scale(${toggleTrans ? textScale : ''})` }}
                className={`
        ${headerLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-xl'} 

       ${
           toggleTrans
               ? 'transition-none delay-[0s]'
               : 'transition-[filter,opacity]  ease-in-Expo duration-[2s] delay-700'
       }
       
        px-10
        
        -tracking-wider
        text-[16vw]
        font-semibold whitespace-nowrap`}
            >
                AirPods Max
            </h1>

            <div
                style={{
                    transform: `scale(${toggleTrans ? scaleFactor : ''})`
                }}
                className={`
       ${
           headerLoaded
               ? 'blur-0 opacity-100 scale-100'
               : 'blur-sm opacity-0 scale-[3]'
       } 
       ${
           toggleTrans
               ? 'transition-none'
               : 'transition-all ease-in-Expo duration-[2s]'
       }
        z-[2]
        dark:brightness-75
        absolute 
        min-w-[70vmin] h-auto`}
            >
                <Image
                    src={airpodsURL}
                    layout="responsive"
                    height={100}
                    width={100}
                    alt="airpods-max"
                />
            </div>
        </section>
    )
}
const airpodsURL: string =
    'https://www.apple.com/v/airpods-max/e/images/overview/hero__gnfk5g59t0qe_large_2x.png'

export default HeaderA
