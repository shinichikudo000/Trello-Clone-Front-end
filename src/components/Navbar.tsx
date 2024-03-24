'use client'
import Link from "next/link";
import trelloImage from "../img/trello.png";
import { useState } from "react";
import FeaturesContent from "./FeaturesContent";

export default function Navbar() {
    const [accordion, setAccordion] = useState(null)

    const onClickAccordion = (event: any) => {
        const body = document.body
        const id = event.target.id
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
    //if the window witdh is less than 990 the  body data-accordion will be close
    return (
        <header className="fixed w-full z-50">
            <div className={`w-full hover:shadow-navShadow h-[70px] lg:gih-[60px] bg-white ${accordion !== null ? 'shadow-navShadow' : ''}`}>
                <div className="max-w-[1320px] mx-auto flex items-stretch h-full">
                    <Link href={''}>
                        <img src={trelloImage.src} alt="trello" className="h-full"/>
                    </Link>
                    <div className="hidden lg:flex h-full items-center justify-center">
                        <div className="flex items-stretch">
                            <div id="features" onClick={onClickAccordion} className="cursor-pointer pt-5 px-4 pb-4">Features</div>
                            <div id="solutions" onClick={onClickAccordion} className="cursor-pointer pt-5 px-4 pb-4">Solutions</div>
                            <div id="plans" onClick={onClickAccordion} className="cursor-pointer pt-5 px-4 pb-4">Plan</div>
                            <div id="pricing" onClick={onClickAccordion} className="cursor-pointer pt-5 px-4 pb-4">Pricing</div>
                            <div id="resources" onClick={onClickAccordion} className="cursor-pointer pt-5 px-4 pb-4">Resources</div>
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
            <div className="w-full bg-white shadow-navContentShadow hidden lg:block">
                { accordion === 'features' && <FeaturesContent />}
            </div>
        </header>
    )
}