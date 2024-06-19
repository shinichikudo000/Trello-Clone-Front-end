'use client'
import { FaCheck } from "react-icons/fa";
import { Input } from "../ui/input";
import Link from "next/link";
import { featuresComparisonItems } from "@/helpers/data";
import { useEffect, useRef } from "react";
import { motion, useAnimate, useScroll, useTransform } from "framer-motion";
import { IoSearch } from "react-icons/io5";

export default function FeaturesComparison() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });
  
    const stickyStyle = useTransform(scrollYProgress, [1, 1], ['sticky', 'block']);

    return (
        <section ref={ref} className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto p-4">
            <div className="w-full p-4">
                <div className="w-full flex justify-center items-center mb-2">
                    <h2 className="md:text-4xl text-2xl font-medium">Compare our Plans</h2>
                </div>
                <div className="grid md:gap-10 gap-6">
                    <div className="w-full flex justify-center items-center">
                        <div className="relative w-[22rem]">
                            <Input type='text' placeholder='search' className="bg-[#FAFBFC] border-[#DFE1E6] rounded-md text-base py-2 pr- pl-10 w-full focus:border-[#091E42] focus:border-2" />
                            <IoSearch className="absolute top-3 left-4"/>
                        </div>
                    </div>
                    <table className="w-full">
                        <motion.thead style={{ position: stickyStyle }}>
                            <motion.tr className="font-normal text-base hidden md:table-row border-b border-[#DFE1E6]">
                                <motion.th className="text-start md:pb-3 py-5 pr-4">FEATURES</motion.th>
                                <motion.th className="text-center md:pb-3 py-5 px-4" style={{width: "15%"}}>FREE</motion.th>
                                <motion.th className="text-center md:pb-3 py-5 px-4" style={{width: "15%"}}>STANDARD</motion.th>
                                <motion.th className="text-center md:pb-3 py-5 px-4" style={{width: "15%"}}>PREMIUM</motion.th>
                                <motion.th className="text-center md:pb-3 py-5 px-4" style={{width: "15%"}}>ENTERPRISE</motion.th>
                            </motion.tr>
                        </motion.thead>
                        <tbody>
                            {
                                featuresComparisonItems.map((item, index) => {
                                    return <tr key={index} className="border-t md:border-b border-[#DFE1E6] grid gap-2 md:table-row py-5 md:py-0">
                                                <td className="md:pr-4 md:py-5 md:border-r border-[#DFE1E6] grid gap-1 md:block">
                                                    <p className="text-base font-bold">{item.feature.toUpperCase()}</p>
                                                    {item.description && <p>{item.description}</p>}
                                                    {item.linkTag && <Link href={''} className="text-[#0052CC] underline">{item.linkTag}</Link>}
                                                </td>
                                                <td className="md:py-5 md:px-4 md:border-r border-[#DFE1E6]">
                                                    <div className="flex justify-between md:justify-center md:items-center">
                                                        <p className="md:hidden text-sm">FREE</p>
                                                        <span>{item.includedPlans.includes('free') && <FaCheck className="min-w-[30px]" color="#36B37E"/>}</span>
                                                    </div>
                                                </td>
                                                <td className="md:py-5 md:px-4 md:border-r border-[#DFE1E6]">
                                                    <div className="flex justify-between md:justify-center md:items-center">
                                                        <p className="md:hidden text-sm">STANDARD</p>
                                                        <span>{item.includedPlans.includes('standard') && <FaCheck className="min-w-[30px]" color="#36B37E"/>}</span>
                                                    </div>
                                                </td>
                                                <td className="md:py-5 md:px-4 md:border-r border-[#DFE1E6]">
                                                    <div className="flex justify-between md:justify-center md:items-center">
                                                        <p className="md:hidden text-sm">PREMIUM</p>
                                                        <span>{item.includedPlans.includes('premium') && <FaCheck className="min-w-[30px]" color="#36B37E"/>}</span>
                                                    </div>
                                                </td>
                                                <td className="md:py-5 md:px-4 md:border-r border-[#DFE1E6]">
                                                    <div className="flex justify-between md:justify-center md:items-center">
                                                        <p className="md:hidden text-sm">ENTERPRISE</p>
                                                        <span>{item.includedPlans.includes('enterprise') && <FaCheck className="min-w-[30px]" color="#36B37E"/>}</span>
                                                    </div>
                                                </td>
                                            </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="w-full mt-16 flex flex-col items-center">
                <h3 className="text-2xl font-medium mb-2">Didn&apos;t find what you were looking for?</h3>
                <button className="text-base px-4 py-3 border-[#0065FF] border rounded-md hover:bg-[#DEEBFF]">Make a suggestion</button>
            </div>
        </section>
    )
}