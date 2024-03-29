import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas'
import { useState } from "react";
import { Loading } from "./Loading";
import { backgroundPosition } from "html2canvas/dist/types/css/property-descriptors/background-position";

interface ScreenshotButtonProps {
    screenshot: string | null,
    onScreenshotTook: (screenshot : string | null) => void
}

export function ScreenshotButton({screenshot, onScreenshotTook}: ScreenshotButtonProps){

    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

    async function handleTakeScreenshot(){
        setIsTakingScreenshot(true)
        const canvas = await html2canvas(document.querySelector('html')!)
        const base64image = canvas.toDataURL('image/png')

        onScreenshotTook(base64image)

        setIsTakingScreenshot(false)
    }

    if(screenshot){
        return(
          <button
            type="button"
            className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
            style={{
                backgroundImage: `url(${screenshot})`,
                backgroundPosition: 'right bottom',
                backgroundSize: 180
            }}
            onClick={() =>{
                onScreenshotTook(null)
            }}
          >
              <Trash weight="fill" />

          </button>
          
        )
    }

    return(
        <button
            onClick={handleTakeScreenshot}
            type="button"
            className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors"
        >
            {isTakingScreenshot ? (
                <Loading />
            ) : (
                <Camera className="w-6 h-6 text-zinc-100"/> 
            )}

        </button>
    )
}