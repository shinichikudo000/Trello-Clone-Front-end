'use client'

import Link from "next/link"
import { PricingItemsType } from "./Pricing"
import { FaCheck, FaPlus, FaMinus} from "react-icons/fa6"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function PricingItemCard({
    index,
    item
}: {
    index: number,
    item: PricingItemsType
}) {

    const [openInclusion, setOpenInclusion] = useState(false)
    const pathname = usePathname()
    
    return (
        <>
            <div className={`price-order-${(index + 1).toString()} 
                    px-4 
                    pt-6 
                    text-base 
                    font-medium 
                    border-x 
                    border-t 
                    ${item.name === 'premium' ? 'border-[#00B8D9]' : 'border-[#DFE1E6]'}
                `} 
                key={index + 1}
                >
                    {item.name.toUpperCase()}
            </div>
            <div className={`price-order-${(index + 5).toString()} 
                    px-4 
                    pt-6 
                    border-x 
                    ${item.name === 'premium' ? 'border-[#00B8D9]' : 'border-[#DFE1E6]'}
                `} 
                key={index + 5} 
                >
                <h1 className="text-base mb-2">$<span className="text-5xl font-medium">{item.price}</span>USD</h1>
                <p className="text-xs text-[#505F79]">{item.priceDescription}</p>
            </div>
            <div className={`price-order-${(index + 9).toString()} 
                    px-4 
                    pt-6 
                    border-x
                    text-base
                    ${item.name === 'premium' ? 'border-[#00B8D9]' : 'border-[#DFE1E6]'}
                `} 
                key={index + 9}
                >
                {item.description}
            </div>
            <div className={`price-order-${(index + 13).toString()} 
                    px-4 
                    pt-6 
                    border-x
                    flex
                    items-start
                    text-base
                    ${item.name === 'premium' ? 'border-[#00B8D9]' : 'border-[#DFE1E6]'}
                `} 
                key={index + 13}
                >
                <Link href={''}>
                    <div className={`pt-[0.7rem] px-4 pb-[0.8rem] text-[#172B4D] border-[#00B8D9] border rounded-md 
                        ${item.name === 'premium' ? 'hover:bg-white bg-[#E6FCFF]' : 'hover:bg-[#E6FCFF]'}
                        `}
                    >
                        {item.button}
                    </div>
                </Link>
            </div>
            {
                pathname === '/pricing' ? (
                    <>
                        <div className={`
                            px-4 
                            pt-6 
                            border-x
                            lg:hidden
                            ${item.name === 'premium' ? 'border-[#00B8D9]' : 'border-[#DFE1E6]'}
                            `}
                            onClick={() => setOpenInclusion(!openInclusion)}
                        >
                            <h2 className="flex gap-2 pr-4 pb-4 text-xl font-medium">
                                <span className="flex justify-center items-center">
                                    {openInclusion === false ? <FaPlus /> : <FaMinus />}
                                </span>
                                    See what&apos;s included
                            </h2>
                        </div>
                        <div className={`price-order-${(index + 17).toString()}
                                ${openInclusion === false ? 'hidden' : 'block'}
                                lg:block
                                px-4 
                                pt-6 
                                border-x
                                ${item.name === 'premium' ? 'border-[#00B8D9]' : 'border-[#DFE1E6]'}
                            `} 
                            key={index + 17}
                            >
                            <div className="
                                w-full
                                lg:border-t
                                lg:pt-5
                                lg:border-t-[#DFE1E6]">
                                <h1 className="
                                    text-base
                                    font-medium
                                    mb-2">{item.inclusionTitle.toUpperCase()}</h1>
                                <div>
                                    {
                                        item.inclusions.map((value) => {
                                            return <div key={value} className="flex gap-2 mb-2">
                                                    <span className="flex justify-center items-center"><FaCheck className="min-w-[30px]" color="#36B37E"/></span>
                                                    {value}
                                                </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </>
                ) : (<></>)
            }
            <div className={`price-order-${(index + 21).toString()} 
                    px-4 
                    pt-6
                    pb-8
                    mb-4 
                    border-x 
                    border-b
                    lg:text-center
                    underline
                    text-[#0052CC]
                    font-base
                    ${item.name === 'premium' ? 'border-[#00B8D9]' : 'border-[#DFE1E6]'}
                `} 
                key={index + 21}
                >
                {
                    item.name === 'free' ? '' : (
                        <Link href=''>Learn more about {item.name}</Link>
                    )
                }
            </div>
        </>
    )
}