'use client'

import { alternateContentPage } from "@/helpers/types"
import Link from "next/link"
import { useState } from "react"

export default function AlternateContent({contents}: {
    contents: alternateContentPage[]
}) {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <>
            {
                contents.map((content, index) => (
                    <div key={index} className="w-full md:flex">
                        <div className={`px-4 pt-[5rem] pb-4 md:pb-[3rem] w-full md:w-1/2 ${index % 2 !== 0 ? 'md:order-2': ''}`}>
                            <img src={content.image} alt={content.name} className="w-full h-auto object-contain" />
                        </div>
                        <div className={`w-full md:w-1/2 lg:w-[44%] px-4 pt-4 pb-[3rem] md:pt-[5rem] ${index % 2 !== 0 ? 'md:order-1 lg:mr-auto': 'lg:ml-auto'}`}>
                            <h2 className="text-2xl md:text-4xl mb-2 font-medium">{content.name}</h2>
                            <img src="//images.ctfassets.net/rz1oowkt5gyp/5Ub9YCKx371qMXE7jomyBJ/3d701450a4b9a98379c67b1ca3b19b2d/gradient_bar.svg" alt="divider" className="my-8"/>
                            <p className="text-lg mb-6">{content.description}</p>
                            {
                                content.link && <Link href={content.link} className="underline text-blueButton text-lg">{content.linkTag}</Link>
                            }
                            {
                                content.accordionName && <div>
                                        <h3 className="text-xl md:text-2xl font-medium" onClick={() => setOpen(!open)}>
                                            <span className="text-xl md:text-2xl font-medium">{ open === true ? '-' : '+'}</span>
                                            {content.accordionName}
                                        </h3>
                                        {
                                            open && (
                                                <>
                                                    { content.accordionDescription && <p className="text-lg mb-6">{content.accordionDescription}</p>}
                                                    <ul className="w-full ml-6 p-4 list-disc">
                                                        {
                                                            content.accordionList?.map((list, index) => (
                                                                <li key={index} className="text-lg">{list}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                </>
                                            )
                                        }
                                    </div>
                            }
                        </div>
                    </div>
                ))
            }
        </>
    )
}