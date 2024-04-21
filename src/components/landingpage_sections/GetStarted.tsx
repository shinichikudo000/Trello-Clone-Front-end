import Link from "next/link";
import { Input } from "../ui/input";

export default function GetStarted() {
    return (
        <section className="w-full bg-gradient-to-r from-[#5243AA] to-[#ED50B4] relative">
            <div className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto px-4">
                <div className="mx-auto py-12 px-4 w-full md:w-[83.33%] lg:w-[2/3] lg:py-[5rem] text-white">
                    <div className="w-full text-center mb-6">
                        <h1 className="text-2xl md:text-4xl font-medium">Get Started with Trello Today</h1>
                    </div>
                    <div className="w-full flex gap-4 justify-center">
                        <Input placeholder="Email" type="email" className="p-6 w-[376px] text-base border-[#DFE1E6] focus:border-white hidden md:flex"/>
                        <Link href={""} className="grow md:grow-0 text-base bg-blueButton p-4 rounded-md hover:bg-blueButtonHover inline-block text-center md:text-nowrap">Sign up - it's free</Link>
                    </div>
                </div>
            </div>
            <img src='https://images.ctfassets.net/rz1oowkt5gyp/6Q4l8SJeMZGSu1m6W9vAjL/1021a10f6940ce44c50d0ffaefec223e/BigSwingFooterHeroGraphic__Left.svg' alt=""  className="absolute left-0 top-0 hidden lg:block object-contain h-full w-auto"/>
            <img src='https://images.ctfassets.net/rz1oowkt5gyp/7KsuX6srvRqJVzeAIdIzIb/da1a3319c278d251ecbd078fcffdcd23/BigSwingFooterHeroGraphic__Right.svg' alt="" className="absolute right-0 top-0 hidden lg:block object-contain h-full w-auto"/>
        </section>
    )
}