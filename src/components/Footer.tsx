import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import trelloImage from "../img/trello.png";

export default function Footer() {
    return (
        <footer className="bg-[#172B4D] w-full text-white">
            <section className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto px-4">
                <div className="lg:flex w-full">
                    <div className="px-4 w-full pt-4 lg:w-[15%]">
                        <div className="mx-4 mt-6 lg:ml-0 lg:mt-0 flex justify-between lg:flex-col w-full">
                            <img src={trelloImage.src} alt="trello" className="h-auto"/>
                            <Link href={''} className="text-base">Log in</Link>
                        </div>
                    </div>
                    <div className="p-4 w-full lg:w-[85%]">
                        <ul className="ml-4 lg:flex w-full Lg:flex-wrap">
                            <li className="border-t border-[#505F79] lg:border-0 my-4 py-4 lg:m-0 lg:p-4 lg:hover:bg-[#344563] hover:underline lg:hover:no-underline lg:grow lg:basis-0 lg:shrink-0 lg:text-wrap">
                                <h3 className="pb-2 text-base">About trello</h3>
                                <p className="text-xs">What's behind the boards.</p>
                            </li>
                            <li className="border-t border-[#505F79] lg:border-0 mb-4 pb-4 lg:m-0 lg:p-4 lg:hover:bg-[#344563] hover:underline lg:hover:no-underline lg:grow lg:basis-0 lg:shrink-0 lg:text-wrap">
                                <h3 className="pb-2 text-base">Jobs</h3>
                                <p className="text-xs">Lean about open roles on the Trello Team.</p>
                            </li>
                            <li className="border-t border-[#505F79] lg:border-0 mb-4 pb-4 lg:m-0 lg:p-4 lg:hover:bg-[#344563] hover:underline lg:hover:no-underline lg:grow lg:basis-0 lg:shrink-0 lg:text-wrap">
                                <h3 className="pb-2 text-base">Apps</h3>
                                <p className="text-xs">Download the Trello App for your Desktop or Mobile Devices.</p>
                            </li>
                            <li className="border-t border-[#505F79] lg:border-0 pb-4 lg:m-0 lg:p-4 lg:hover:bg-[#344563] hover:underline lg:hover:no-underline lg:grow lg:basis-0 lg:shrink-0 lg:text-wrap">
                                <h3 className="pb-2 text-base">Contact us</h3>
                                <p className="text-xs">Need anything? Get in touch and we can help.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className="hidden lg:block mx-auto w-[98%] border-t border-[#505F79]"></div>
            <section className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto px-4">
                <div className="lg:flex w-full">
                    <div className="px-4 lg:pt-4 pb-4 flex gap-4 lg:grow-0 ml-4 lg:ml-0">
                        <FiGlobe size={20} color="#FFFFFF"/>
                        <form>
                            <Select>
                                <SelectTrigger className="w-[180px] bg-transparent h-[20px] border-0">
                                    <SelectValue placeholder="English" />
                                </SelectTrigger>
                                <SelectContent className="">
                                    <SelectItem value="english">English</SelectItem>
                                    <SelectItem value="tagalog">Tagalog</SelectItem>
                                    <SelectItem value="nihongo">Nihongo</SelectItem>
                                </SelectContent>
                            </Select>
                        </form>
                    </div>
                    <div className="px-4 pb-4 lg:pt-4 lg:grow">
                        <ul className="lg:flex lg:flex-nowrap text-xs lg:items-center h-full">
                            <li className="ml-4 lg:ml-0 lg:mr-6 mb-3 lg:mb-0"><Link href={''}>Privacy Policy</Link></li>
                            <li className="ml-4 lg:ml-0 lg:mr-6 mb-3 lg:mb-0"><Link href={''}>Terms</Link></li>
                            <li className="ml-4 lg:ml-0 lg:mr-6 mb-3 lg:mb-0"><Link href={''}>Copyright © 2024 Atlassian</Link></li>
                        </ul>
                    </div>
                    <div className="p-4 lg:grow-0">
                        <div className="py-[3rem] px-4 lg:p-0 flex gap-8 lg:gap-4">
                            <Link href={''} className="h-6 w-6 flex items-center justify-center rounded-[50%] border-2 border-white"><FaInstagram size={12} color="#FFFFFF" /></Link>
                            <Link href={''} className="h-6 w-6 flex items-center justify-center rounded-[50%] border-2 border-white"><FaFacebookF size={12} color="#FFFFFF" /></Link>
                            <Link href={''} className="h-6 w-6 flex items-center justify-center rounded-[50%] border-2 border-white"><FaLinkedinIn size={12} color="#FFFFFF" /></Link>
                            <Link href={''} className="h-6 w-6 flex items-center justify-center rounded-[50%] border-2 border-white"><FaTwitter size={12} color="#FFFFFF" /></Link>
                            <Link href={''} className="h-6 w-6 flex items-center justify-center rounded-[50%] border-2 border-white"><FaYoutube size={12} color="#FFFFFF" /></Link>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}