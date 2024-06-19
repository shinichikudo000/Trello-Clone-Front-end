'use client'
import Link from "next/link"
import { useState } from "react"

interface CardType {
    name: string,
    description: string
}

const card: CardType[] = [
    {
        name: "Board",
        description: "Trello boards keep tasks organized and work moving forward. In a glance, see everything from \"things to do\" to \"aww yeah, we did it!\""
    },
    {
        name: "Lists",
        description: "The different stages of a task. Start as simple as To do, Doing or Done-or build a workflow custom fit to your team's needs. There's no wrong way to Trello."
    },
    {
        name: "Cards",
        description: "Cards represent tasks and ideas and hold all the information to get the job done. As you make progress, move cards across lists to show their status."
    }
]

export default function Trello101() {
    const [contentIndex, setContentIndex] = useState(0)
    return (
        <section className="bg-gradient-to-t from-[#E6FCFF] to -white">
            <div className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto px-[1rem]">
                <div className="w-full flex justify-start items-start">
                    <div className="text-wrap w-full md:max-w-[60%] p-4">
                            <h3 className="text-base font-medium mb-2">TRELLO 101</h3>
                            <h1 className="text-2xl md:text-4xl pb-2 md:pb-4 mb-2">A productivity powerhouse</h1>
                            <p className="text-xl">Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who&apos;s doing what and what needs to get done. Learn more in our &nbsp;<Link href={''} className="underline text-blueButton">guide for getting started.</Link></p>
                    </div>
                </div>
                <div className="w-full px-4 pt-4 pb-[5rem] flex flex-col lg:flex-row">
                    <div className="w-full pr-4 py-4 lg:grow lg:basis-1/3 flex lg:flex-col gap-4 overflow-x-hidden order-2 lg:order-1">
                        {
                            card.map((item, index) => {
                                return  <div key={index} 
                                                onClick={() => setContentIndex(index)}
                                                className={`relative py-4 pl-6 pr-4 min-w-[100%]
                                                ${contentIndex === index ? 'bg-white rounded-md shadow-cardShadow after:content-[""] after:w-2 after:bg-[#00C7E5] after:rounded-l-md after:left-0 after:top-0 after:absolute after:h-full' : ''}`}>
                                            <h3 className="">{item.name}</h3>
                                            <p className="">{item.description}</p>
                                        </div>
                            })
                        }
                    </div>
                    <div className="w-full lg:px-4 py-4 lg:grow-[2] lg:basis-2/3 order-1 lg:order-2 flex gap-4 overflow-x-hidden items-start">
                        <img src="https://images.ctfassets.net/rz1oowkt5gyp/3N2U3C71rApm61cGFxnc2E/970b010002488a09a420282df5e7b43a/Carousel_Image_Boards_2x.png?w=1536&fm=webp" alt="img" className="w-full h-auto object-contain"/>
                        <img src="https://images.ctfassets.net/rz1oowkt5gyp/4U0VUZYX2tQmB5KVGxBabp/7321ac088fe8ec39dbe3069c47d7df99/Carousel_Image_Lists_2x.png?w=1536&fm=webp" alt="img" className="w-full h-auto object-contain"/>
                        <img src="https://images.ctfassets.net/rz1oowkt5gyp/26CA6JZeRgoOK4nuRHnIlY/060702a80cf7c3be3651d9297d196267/Carousel_Image_Cards_2x.png?w=1536&fm=webp" alt="img" className="w-full h-auto object-contain"/>
                    </div>
                    <div className="lg:hidden w-full flex justify-center gap-2 order-3 mt-6">
                        <div className="w-2 h-2 bg-[#091E42] rounded-full"></div>
                        <div className="w-2 h-2 bg-[#091E42] rounded-full"></div>
                        <div className="w-2 h-2 bg-[#091E42] rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}