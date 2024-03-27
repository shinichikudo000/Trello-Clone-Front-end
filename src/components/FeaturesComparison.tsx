import { FaCheck } from "react-icons/fa";
import { Input } from "./ui/input";
import Link from "next/link";
import { featuresComparisonItems } from "@/helpers/data";

export default function FeaturesComparison() {
    return (
        <section className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto px-4">
            <div className="w-full p-4">
                <div className="w-full flex justify-center items-center">
                    <h2 className="md:text-4xl text-2xl font-medium">Compare our Plans</h2>
                </div>
                <div className="grid md:gap-10 gap-6">
                    <div className="w-full flex justify-center items-center">
                        <Input type='text' placeholder='search' className="bg-[#FAFBFC] border-[#DFE1E6] rounded-md text-base max-w-[22rem] p-2 w-full focus:border-[#091E42] focus:border-2"/>
                    </div>
                    <table className="w-full">
                        <thead>
                            <tr className="font-normal text-base hidden md:table-row border-b border-[#DFE1E6]">
                                <th className="text-start md:pb-3 py-5 pr-4">FEATURES</th>
                                <th className="text-center md:pb-3 py-5 px-4">FREE</th>
                                <th className="text-center md:pb-3 py-5 px-4">STANDARD</th>
                                <th className="text-center md:pb-3 py-5 px-4">PREMIUM</th>
                                <th className="text-center md:pb-3 py-5 px-4">ENTERPRISE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                featuresComparisonItems.map((item) => {
                                    return <tr className="border-b border-[#DFE1E6]">
                                                <td className="pr-4 py-5 border-r border-[#DFE1E6]">
                                                    <p className="text-base font-bold">{item.feature.toUpperCase()}</p>
                                                    {item.description && <p>{item.description}</p>}
                                                    {item.linkTag && <Link href={''} className="text-[#0052CC] underline">{item.linkTag}</Link>}
                                                </td>
                                                <td className="py-5 px-4 border-r border-[#DFE1E6]">
                                                    <div className="flex justify-center items-center">
                                                        {item.includedPlans.includes('free') && <FaCheck className="min-w-[30px]" color="#36B37E"/>}
                                                    </div>
                                                </td>
                                                <td className="py-5 px-4 border-r border-[#DFE1E6]">
                                                    <div className="flex justify-center items-center">
                                                        {item.includedPlans.includes('standard') && <FaCheck className="min-w-[30px]" color="#36B37E"/>}
                                                    </div>
                                                </td>
                                                <td className="py-5 px-4 border-r border-[#DFE1E6]">
                                                    <div className="flex justify-center items-center">
                                                        {item.includedPlans.includes('premium') && <FaCheck className="min-w-[30px]" color="#36B37E"/>}
                                                    </div>
                                                </td>
                                                <td className="py-5 px-4 border-r border-[#DFE1E6]">
                                                    <div className="flex justify-center items-center">
                                                        {item.includedPlans.includes('enterprise') && <FaCheck className="min-w-[30px]" color="#36B37E"/>}
                                                    </div>
                                                </td>
                                            </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}