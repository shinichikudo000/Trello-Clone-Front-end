import Link from "next/link";

export default function DifferentVision() {
    return (
        <section className="bg-gradient-to-l from-[#00B8D9] to-[#0065FF]">
            <div className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto px-[1rem]">
                <div className="w-full">
                    <div className="w-full mx-auto lg:w-2/3 text-center text-white px-4 pt-12 pb-4 md:pb-12">
                        <h1 className="text-2xl md:text-4xl font-medium mb-2">See work in a whole new way</h1>
                        <p className="text-xl mb-6">View your team's project from every angle and bring a fresh perspective to the task at hand</p>
                        <Link href={''} className="inline-block text-black p-4 bg-white hover:bg-[#DEEBFF] border-[#0065FF] border rounded-md">Discover all Trello views</Link>
                    </div>
                    <div className="p-4 md:pb-12 w-full">
                        <div className="bg-white rounded-md p-6 lg:p-8 md:pb-12 shadow-cardShadow flex flex-col lg:flex-row gap-8">
                            <div className="w-full lg:w-[55%]">
                                <img src="https://images.ctfassets.net/rz1oowkt5gyp/5Hb09iiMrK6mSpThW5HS89/f5683a167ad3f74bed4dc7592ae5a002/TrelloBoard_Timeline_2x.png?w=1212&fm=webp" className="object-contain w-full h-auto"/>
                            </div>
                            <div className="w-full lg:w-[45%] lg:px-8">
                                <h3 className="text-base font-bold mb-6">HIT DEADLINES EVERY TIME</h3>
                                <p className="text-xl mb-6">From weekly sprints to annual planning, Timeline view keeps all tasks ontrack. Quickly get a glimpse of what's coming down the pipeline and identify any gaps that might impede your team's progress</p>
                                <Link href={''} className="text-[#0052CC] underline text-xl">Learn more about Timeline View</Link>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 w-full">
                        <div className="bg-white rounded-md p-6 lg:p-8 md:pb-12 shadow-cardShadow flex flex-col lg:flex-row-reverse gap-8 mb-[-8rem]">
                            <div className="w-full lg:w-[55%]">
                                <img src="https://images.ctfassets.net/rz1oowkt5gyp/7sxChS4x6XAcUgDpp4VAZk/25377d162e964f4243e329c447bfd7dc/TrelloBoard_Calendar_2x.png?w=1212&fm=webp" className="object-contain w-full h-auto"/>
                            </div>
                            <div className="w-full lg:w-[45%] lg:px-8">
                                <h3 className="text-base font-bold mb-6">STAY ON TOP OF TASKS</h3>
                                <p className="text-xl mb-6">Start each day without any surprises. Whether scheduling an editorial calendar or staying on top of to-dos, Calendar view is like a crystal ball giving you a clear vision of what work lies ahead</p>
                                <Link href={''} className="text-[#0052CC] underline text-xl">Learn more about Calendar View</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white h-[8rem]">
            </div>
        </section>
    )
}