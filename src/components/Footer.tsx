import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#172B4D] w-full text-white">
            <section>
                hello
            </section>
            <div className="hidden lg:block mx-auto w-[98%] border-t border-[#505F79]"></div>
            <section className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto px-4">
                <div className="lg:flex w-full">
                    <div>

                    </div>
                    <div className="lg:w-[60%] px-4 pb-4 lg:pt-4">
                        <ul className="lg:flex lg:flex-nowrap text-xs lg:items-center h-full">
                            <li className="ml-4 lg:ml-0 lg:mr-6 mb-3 lg:mb-0"><Link href={''}>Privacy Policy</Link></li>
                            <li className="ml-4 lg:ml-0 lg:mr-6 mb-3 lg:mb-0"><Link href={''}>Terms</Link></li>
                            <li className="ml-4 lg:ml-0 lg:mr-6 mb-3 lg:mb-0"><Link href={''}>Copyright © 2024 Atlassian</Link></li>
                        </ul>
                    </div>
                    <div className="lg:w-[25%] p-4">
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