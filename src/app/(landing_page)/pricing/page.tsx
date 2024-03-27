import FrequentlyAsked from "@/components/FrequentlyAsked";
import Pricing from "@/components/Pricing";
import Link from "next/link";

export default function PricingPage() {
    return (
        <>
            <section className="w-full">
                <div className="px-4 mx-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
                    <div className="flex justify-center">
                        <div className="pt-[5rem] px-4 pb-[3rem] w-full md:w-[67%] text-center">
                            <h1 className="text-5xl mb-2">Trello your way.</h1>
                            <p className="text-xl">Trusted by millions, Trello powers teams all around the world. Explore which option is right for you.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Pricing />
            <FrequentlyAsked />
            <section className="w-full bg-gradient-to-b from-[#E6FCFF] to-white">
                <div className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto px-4">
                    <div className="md:flex">
                        <div className="w-full md:grow-0 md:basis-1/3 p-4 flex justify-center items-center">
                            <img src="https://images.ctfassets.net/rz1oowkt5gyp/3oImeBPuXSABEX9sc9qyQ6/2f8a0d5d3231aa4831387726995028f2/TREL-210_Trello_Access_Spot_Illo.svg" alt="img" className="max-w-full h-auto" ></img>
                        </div>
                        <div className="w-full md:grow-[2] md:basis-2/3 px-4 py-[3rem]">
                            <div className="text-xl w-full text-wrap mb-6">
                                <h2 className="text-xl md:text-2xl font-medium mb-2">Best-in-class security and centralized administration with Atlassian Access</h2>
                                <ul className="list-disc pl-8 mb-4">
                                    <li>SAML single sign-on</li>
                                    <li>Enforced 2FA</li>
                                </ul>
                                <p>Atlassian Access is a seperate subscription that your company can enable across all your Atlassian products and starts at $4/month/user. Trello is an Atlassian product.</p>
                            </div>
                            <div>
                                <Link href={''} className="inline-block pt-[0.7rem] px-4 pb-[0.8rem] text-[#172B4D] border-[#00B8D9] border rounded-md">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="h-[4rem]">

            </section>
        </>
    )
}