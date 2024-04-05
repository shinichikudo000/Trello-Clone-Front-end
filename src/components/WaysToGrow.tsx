import Link from "next/link";

export default function WaysToGrow() {
    return (
        <section className="w-full">
            <div className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto px-[1rem]">
                <div className="w-full text-start md:w-[58%] p-4">
                    <h3 className="text-base font-medium mb-2">POWERFUL WAYS TO GROW</h3>
                    <h1 className="text-2xl md:text-4xl font-bold file:mb-6">Do more with Trello</h1>
                    <p className="text-xl">Trello's intuitive features give any team the ability to quickly set up and customize workflows for just about anything</p>
                </div>
                <div className="w-full md:flex flex-wrap justify-around">
                    <div className="p-4 w-full md:w-1/2 lg:w-1/3">
                        <div className="w-full bg-[#FAFBFC] p-6 rounded-md flex flex-col gap-4">
                            <div>
                                <img src="https://images.ctfassets.net/rz1oowkt5gyp/gMfkjoA3yWYG3kat3qjpW/3902bfdfccf08869e33d63bbc9d1969b/Integrations_Puzzle.svg" className="object-containt h-auto"/>
                            </div>
                            <div>
                                <h3 className="mb-2 text-xl md:text-2xl font-bold">Integrations</h3>
                                <p className="text-base">Connect the apps your team already uses into your Trello workflow or add a Power-Up to fin-tune your specific needs.</p>
                            </div>
                            <div className="pt-4">
                                <Link href={''} className="inline-block p-4 border border-[#0065FF] rounded-md text-base hover:bg-[#DEE8FF]">Browse Integrations</Link>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 w-full md:w-1/2 lg:w-1/3">
                        <div className="w-full bg-[#FAFBFC] p-6 rounded-md flex flex-col gap-4">
                            <div>
                                <img src="https://images.ctfassets.net/rz1oowkt5gyp/7wxRW93hvb7858bMsK4LSs/f6fc44fb23dbc6ee9bc6a7f6e2af0fb7/Gears.svg" className="object-containt h-auto"/>
                            </div>
                            <div>
                                <h3 className="mb-2 text-xl md:text-2xl font-bold">Butler Automation</h3>
                                <p className="text-base">No-code automation is built into every Trello board. Focus on the work that matters most and let the robots do the rest.</p>
                            </div>
                            <div className="pt-4">
                                <Link href={''} className="inline-block p-4 border border-[#0065FF] rounded-md text-base hover:bg-[#DEE8FF]">GEt to know Automation</Link>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 w-full md:w-1/2 lg:w-1/3">
                        <div className="w-full bg-[#FAFBFC] p-6 rounded-md flex flex-col gap-4">
                            <div>
                                <img src="https://images.ctfassets.net/rz1oowkt5gyp/gMfkjoA3yWYG3kat3qjpW/3902bfdfccf08869e33d63bbc9d1969b/Integrations_Puzzle.svg" className="object-containt h-auto"/>
                            </div>
                            <div>
                                <h3 className="mb-2 text-xl md:text-2xl font-bold">Trello Enterprise</h3>
                                <p className="text-base">The productivity tool teams love, paired with the features and security needed for scale.</p>
                            </div>
                            <div className="pt-4">
                                <Link href={''} className="inline-block p-4 border border-[#0065FF] rounded-md text-base hover:bg-[#DEE8FF]">Explore Enterprise</Link>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </section>
    )
}