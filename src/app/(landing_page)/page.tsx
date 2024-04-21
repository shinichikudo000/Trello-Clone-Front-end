import DifferentVision from "@/components/landingpage_sections/DifferentVision";
import GetStarted from "@/components/landingpage_sections/GetStarted";
import Pricing from "@/components/landingpage_sections/Pricing";
import Trello101 from "@/components/landingpage_sections/Trello101";
import TrelloInAction from "@/components/landingpage_sections/TrelloInAction";
import WaysToGrow from "@/components/landingpage_sections/WaysToGrow";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaRegPlayCircle } from "react-icons/fa";

export default function LandingPage() {
    return (
        <>  
            <section className="w-full">
                <div className="bg-[#DEEBFF] w-full pt-[5rem] px-4 pb-4 scroll-mt-[72px] flex justify-center">
                    Accelerate your team's work with Atlassian Intelligence {'\uD83E\uDD16'} (AI) features now in beta!&nbsp;<Link href={''} className="underline text-blueButton">Learn more</Link>.
                </div>
            </section>
            <section className="w-full bg-gradient-to-r from-[#5243AA] to-[#ED50B4] relative">
                <div className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto px-[1rem] z-20">
                    <div className="w-full lg:flex relative">
                        <div className="py-[8rem] px-4 w-full lg:w-1/2 text-center lg:text-start text-wrap text-white">
                            <h1 className="text-[32px] lg:text-[48px] md:text-[44px] mb-2 md:leading-normal lg:leading-tight">Trello brings all your tasks, teammates, and tools together</h1>
                            <p className="mb-6 text-xl">Keep everything in the same place-even if your team isn't.</p>
                            <div className="flex gap-4 lg:flex lg:justify-start justify-center lg:flex-wrap">
                                <Input placeholder="Email" type="email" className="p-6 w-[300px] text-base border-[#DFE1E6] focus:border-white hidden md:flex"/>
                                <button className="p-3 bg-blueButton hover:bg-blueButtonHover rounded-md text-base grow md:grow-0 mb-6">Sign up - it's free</button>
                            </div>
                            <div className="group flex gap-2 justify-center lg:justify-start">
                                    <Link href={''} className="underline">Watch video</Link>
                                    <FaRegPlayCircle className="group-hover:ml-2"/>
                            </div>
                        </div>
                        <div className="pt-[8rem] pl-4 w-full lg:max-w-[58%] lg:absolute lg:top-0 lg:left-[50%] z-50">
                            <img src="https://images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=1140&fm=webp" alt="img" className="w-full h-auto"/>
                        </div>
                    </div>
                </div>
                <img src="https://images.ctfassets.net/rz1oowkt5gyp/7lTGeXbBRNRLaVk2MdBjtJ/99c266ed4cb8cc63bd0c388071f01ff6/white-wave-bg.svg" alt="" className="object-contain w-full h-auto absolute bottom-0 left-0 z-10" />
            </section>
            <Trello101 />
            <TrelloInAction />
            <section className="w-full">
                <div className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto px-4">
                    <div className="lg:flex">
                        <div className="p-4 lg:pb-[5rem] lg:w-3/4">
                            <p className="text-xl">No need to start from scratch. Jump-start your workflow with proven playbook designed for different teams. Customize it to make it yours.</p>
                        </div>
                        <div className="w-full lg:w-1/4 p-4 pb-[5rem]">
                            <Link href={""} className="text-base border border-[#0065FF] p-4 rounded-md inline-block hover:bg-[#DEEBFF]">Explore all Use cases</Link>
                        </div>
                    </div>
                </div>
            </section>
            <DifferentVision />
            <WaysToGrow />
            <section className="w-full">
                <div className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto px-4">
                    <div className="w-full pt-[5rem] pb-[3rem] px-4 flex justify-center">
                        <div className="w-[83.333%] flex flex-col items-center">
                            <h1 className="text-2xl md:text-4xl mb-2">Trello priced your way</h1>
                            <p className="text-xl mb-6">Trusted by millions, Trello powers teams all around the world.</p>
                            <Link href={""} className="text-base bg-blueButton p-4 rounded-md inline-block text-white hover:bg-blueButtonHover">Compare Plans</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Pricing />
            <section className="w-full mt-12">
                <div className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto px-4 flex justify-center">
                    <div className="w-full px-4 pt-4 pb-12 md:pb-[5rem] lg:mx-auto lg:w-[83.33%]">
                        <div className="text-center mb-6">
                            <h3 className="text-xl">Join over 2,000,000 teams worlwide that are using Trello to get more done.</h3>
                        </div>
                        <img src='https://images.ctfassets.net/rz1oowkt5gyp/19rAABnbk8KNNuh3zJzsmr/210fb8ee51dea14595462f844b7c9beb/logos-horizontal-visa-coinbase-john-deere-zoom-grand-hyatt-fender.svg' alt="brand-logos" className="object-contain w-full h-auto hidden md:block"/>
                        <img src='https://images.ctfassets.net/rz1oowkt5gyp/35UfB6LGcl6cd3y8K7VB3b/0748eb81ae166a7fb35288e6c413dabc/logos-3x3-visa-coinbase-john-deere-zoom-grand-hyatt-fender.svg' alt="brand-logos" className="object-contain max-w-full h-auto md:hidden mx-auto"/>
                    </div>
                </div>
            </section>
            <GetStarted />
        </>
    )
}