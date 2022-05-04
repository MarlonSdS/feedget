import { ArrowArcLeft, ArrowLeft, Camera } from "phosphor-react"
import { FormEvent, useState } from "react"
import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"
import { ScreenshotButton } from "../ScreenshotButton"

interface FeedbackContentStepProps{
    feedbackType: FeedbackType,
    onFeedbackRestart: () => void,
    onFeedbackSent: () => void
}
export function FeedbackContentStep({feedbackType, onFeedbackRestart, onFeedbackSent} : FeedbackContentStepProps){
    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [coment, setComent] = useState('')

    const feedbackTypeInfo = feedbackTypes[feedbackType]

    function handleSubmitFeedback(event : FormEvent){
        event.preventDefault()
        console.log(
            screenshot,
            coment
        )

        onFeedbackSent()
    }
    return (
        <>
        <header>

        <button type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        onClick={onFeedbackRestart}>
            <ArrowLeft weight="bold" className="w-4 h-4"/>
        </button>    

        <span className="text-xl leading-6 flex items-center gap-2">
            <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className='w-6 h-6'/>
            {feedbackTypeInfo.title}</span>
        <CloseButton />
        </header>
        
        <form className="mt-4 w-full" onSubmit={handleSubmitFeedback}>
            <textarea 
                onChange={event => setComent(event.target.value)}
                placeholder="Conte com detalhes o que está acontecendo..."
                className="min-w-[384px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 rounded-md bg-transparent focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
            />

            <footer className="flex gap-2 mt-2">
                
                <ScreenshotButton
                screenshot={screenshot}
                onScreenshotTook={setScreenshot}/>
                <button
                    disabled={coment.length === 0}
                    type="submit"
                    className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none disabled:opacity-50 disabled:hover:bg-brand-500"
                >
                    Enviar
                </button>
            </footer>
        </form>
    </>
    )
}