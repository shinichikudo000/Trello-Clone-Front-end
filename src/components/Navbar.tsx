'use client'
import Link from "next/link";
import trelloImage from "../img/trello.png";
import { useState } from "react";
import FeaturesContent from "./FeaturesContent";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [accordion, setAccordion] = useState(null)
    const pathname = usePathname()

    const onClickAccordion = (event: any) => {
        const body = document.body
        const id = event.target.id
        if(id !== 'Pricing') {
            if(accordion === null && body.getAttribute("data-accordion") === 'close') {
                body.setAttribute("data-accordion", 'open')
                setAccordion(id)
            } else if (accordion === id && body.getAttribute("data-accordion") === 'open') {
                body.setAttribute("data-accordion", 'close')
                setAccordion(null)
            } else if (accordion != id && body.getAttribute("data-accordion") === 'open') {
                setAccordion(id)
            }
        }
    }
    //if the window witdh is less than 990 the  body data-accordion will be close
    const navBarItems = [
        {
            name: "Features"
        },
        {
            name: "Solutions"
        },
        {
            name: "Plan"
        },
        {
            name: "Pricing"
        },
        {
            name: "Resources"
        },
    ]
    return (
        <header className="fixed w-full z-50">
            <div className={`w-full lg:hover:shadow-navShadow lg:hover:bg-white h-[70px] lg:h-[60px] 
                ${accordion !== null ? 'shadow-navShadow bg-white' : ''} 
                ${pathname === '/pricing' ? 'bg-transparent' : 'bg-white'}
                `}>
                <div className="max-w-[1320px] mx-auto flex items-stretch h-full">
                    <Link href={''}>
                        <img src={trelloImage.src} alt="trello" className="h-full"/>
                    </Link>
                    <div className="hidden lg:flex h-full items-center justify-center">
                        <div className="flex items-stretch h-full">
                            {
                                navBarItems.map((items) => {
                                    return <Link href={items.name === 'Pricing' ? '/pricing' : ''}
                                    id={items.name} 
                                    key={items.name} 
                                    onClick={onClickAccordion} 
                                    className={`relative cursor-pointer pt-5 px-4 pb-4 hover:text-[#0066FF] h-full ${items.name === accordion ? 'text-[#0066FF]' : ''}`}>
                                        {items.name}
                                        {
                                            items.name === accordion ? (
                                                <motion.div className="navUnderline" layoutId="navUnderline"/>
                                            ) : null
                                        }
                                    </Link>
                                })
                            }
                        </div>
                    </div>
                    <div className="hidden ml-auto lg:flex items-stretch">
                        <Link href={''} className="flex h-full px-6 py-2 text-[1.2rem] items-center self-stretch">
                            Log in
                        </Link>
                        <Link href={''} className="flex h-full px-6 py-2 text-[1.2rem] items-center self-stretch bg-blueButton hover:bg-blueButtonHover text-white">
                            Get Trello for free
                        </Link>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                <div className="w-full bg-white shadow-navContentShadow hidden lg:block">
                        { accordion === 'Features' && <FeaturesContent />}
                </div>
            </AnimatePresence>
        </header>
    )
}