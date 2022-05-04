import { CloseButton } from "../CloseButton"
import bugImage from '../../assets/bug.svg'
import ideaImage from '../../assets/idea.svg'
import thoughtImage from '../../assets/thought.svg'
import { useState } from "react"
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep"
import { FeedbackContentStep } from "./steps/FeedbackContentStep"
import { FeedbackSuccesStep } from "./steps/FeedbackSuccesStep"
export const feedbackTypes = {
    BUG:{
        title: 'Problema',
        image: {
            source: bugImage,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA:{
        title: 'Ideia',
        image: {
            source: ideaImage,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER:{
        title: 'Outro',
        image: {
            source: thoughtImage,
            alt: 'Imagem de um balão de pensamento'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm(){
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)

    function handleFeedbackRestart(){
        setFeedbackType(null)
    }

    return(
        <div className="bg-zinc-800 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

        {feedbackSent ?(
            <FeedbackSuccesStep />
        ): (
            <>
                {!feedbackType ? (
                    <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
                ) : (
                    <FeedbackContentStep 
                    feedbackType={feedbackType}
                    onFeedbackRestart={handleFeedbackRestart}
                    onFeedbackSent={() => setFeedbackSent(true)}
                    />
                )}

            </>
        )}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ na NLW
            </footer>
        </div>
    )
}