'use client'
import { getNonConsecutiveColor } from "@/helpers/color";
import { navBarLinksType } from "@/helpers/types";
import Link from "next/link";
import { useState } from "react";

export default function NavbarLinksContainer({links}: {
    links: navBarLinksType[]
}) {
    const [color, setColor] = useState<string>('')
    const handleHover = () => {
        const newColor = getNonConsecutiveColor(color)
        setColor(newColor)
        console.log(newColor)
    }
    return (
        <ul className="flex flex-wrap w-full text-[#505F79] w-[calc(100% + 2rem)] mx-[-1rem]">
            {
                links.map((link, index) => (
                    <li key={ index } className={`w-1/3 ${color}`} onMouseEnter={handleHover}>
                        <Link href={ link.link } className="w-full inline-block p-4">
                            <div className="flex gap-2 mb-2">
                                { link.svg && link.svg }
                                <h3 className="text-[#172B4D]">{ link.name }</h3>
                            </div>
                            <p className="text-xs">{ link.description }</p>
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}