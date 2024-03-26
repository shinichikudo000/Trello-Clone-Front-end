'use client'

import { useState } from "react"
import { QuestionType } from "./FrequentlyAsked"
import { FaPlus, FaMinus} from "react-icons/fa6"

export default function QuestionItem({
    question
} : {
    question: QuestionType
}) {
    const [open, setOpen] = useState(false)
    return (
        <div className="py-4 border-b border-[#C1C7D0]" onClick={() => setOpen(!open)}>
            <div className="w-full pr-4 flex gap-4">
                <span className="flex justify-center items-center">
                    { open === false ? <FaPlus /> : <FaMinus />}
                </span>
                <h3 className="text-xl md:text-2xl font-medium">{question.question}</h3>
            </div>
            <div className="w-full px-5 py-4">
                {
                    open && (<p className="text-lg">{question.answer}</p>)
                }
            </div>
        </div>
    )
}