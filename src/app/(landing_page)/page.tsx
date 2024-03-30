import Pricing from "@/components/Pricing";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FaRegPlayCircle } from "react-icons/fa";

export default function LandingPage() {
    return (
        <>  
            <section className="w-full">
                <div className="bg-[#DEEBFF] w-full pt-[5rem] px-4 pb-4 scroll-mt-[72px] flex justify-center">
                    Accelerate your team's work with Atlassian Intelligence {'\uD83E\uDD16'} (AI) features now in beta!&nbsp;<Link href={''} className="underline text-blueButton">Learn more</Link>.
                </div>
            </section>
            <section>
                <div className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto px-[1rem]">
                    <div className="w-full lg:flex relative">
                        <div className="py-[8rem] px-4 w-full lg:w-1/2 text-center lg:text-start text-wrap">
                            <h1 className="text-[32px] lg:text-[48px] md:text-[44px] mb-2 md:leading-normal lg:leading-tight">Trello brings all your tasks, teammates, and tools together</h1>
                            <p className="mb-6 text-xl">Keep everything in the same place-even if your team isn't.</p>
                            <div className="flex gap-4 lg:flex lg:justify-start justify-center lg:flex-wrap">
                                <Input placeholder="Email" type="email" className="p-6 w-[300px] text-base border-[#DFE1E6] focus:border-white hidden md:flex"/>
                                <button className="text-white p-3 bg-blueButton hover:bg-blueButtonHover rounded-md text-base grow md:grow-0 mb-6">Sign up - it's free</button>
                                <div className="group flex gap-2 items-center">
                                    <Link href={''} className="underline">Watch video</Link>
                                    <FaRegPlayCircle className="group-hover:ml-2"/>
                                </div>
                            </div>
                        </div>
                        <div className="pt-[8rem] pl-4 w-full lg:max-w-[58%] lg:absolute lg:top-0 lg:left-[50%]">
                            <img src="https://images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=1140&fm=webp" alt="img" className="w-full h-auto"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="">
                <div className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto px-[1rem]">
                    <div className="w-full flex justify-start items-start">
                        <div className="text-wrap w-full md:max-w-[60%] p-4">
                                <h3 className="text-base font-medium mb-2">Trello 101</h3>
                                <h1 className="text-2xl md:text-4xl pb-2 md:pb-4 mb-2">A productivity powerhouse</h1>
                                <p className="text-xl">Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who's doing what and what needs to get done. Learn more in our &nbsp;<Link href={''} className="underline text-blueButton">guide for getting started.</Link></p>
                        </div>
                    </div>
                </div>
            </section>
            <Pricing />
        </>
    )
}