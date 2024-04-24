import Link from "next/link";

export default function ResourcesContent() {
    return (
        <div className="flex w-full">
            <div className="pt-8 pb-[4.75rem] w-whiteContent">
                <div className="w-[640px] mr-[40px] lg:w-[760px] ml-auto pr-4 pl-2 flex flex-col items-start gap-4">
                    <h3 className="w-full border-b-[1px] border-borderWhiteContent pb-4 text-base">Learn & connect</h3>
                    <ul className="flex flex-wrap w-full text-[#505F79] w-[calc(100% + 2rem)] mx-[-1rem]">
                        <li className="w-1/3">
                            <Link href={'/guide'} className="w-full inline-block p-4">
                                <h3 className="mb-2">Trello Guide</h3>
                                <p className="text-xs">Our easy to follow workflow guide will take you from project set-up to Trello expert in no time.</p>
                            </Link>
                        </li>
                        <li className="w-1/3">
                            <Link href={'/guide/remote-work'} className="w-full inline-block p-4">
                                <h3>Remote work guide</h3>
                                <p className="text-xs">The complete guide to setting up your team for remote work success.</p>
                            </Link>
                        </li>
                        <li className="w-1/3">
                            <Link href={'/webinars'} className="w-full inline-block p-4">
                                <h3>Webinars</h3>
                                <p className="text-xs">Enjoy our free Trello webinars and become a productivity professional.</p>
                            </Link>
                        </li>
                        <li className="w-1/3">
                            <Link href={'/customers'} className="w-full inline-block p-4">
                                <h3>Customer stories</h3>
                                <p className="text-xs">See how businesses have adopted Trello as a vital part of their workflow.</p>
                            </Link>
                        </li>
                        <li className="w-1/3">
                            <Link href={'https://developer.atlassian.com/cloud/trello/'} className="w-full inline-block p-4">
                                <h3>Developers</h3>
                                <p className="text-xs">The sky's the limit in what you can deliver to Trello users in your Power-Up!</p>
                            </Link>
                        </li>
                        <li className="w-1/3">
                            <Link href={'https://support.atlassian.com/trello/'} className="w-full inline-block p-4">
                                <h3>Help resources</h3>
                                <p className="text-xs">Need help? Articles and FAQs to get you unstuck.</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="pt-8 pb-[4.75rem] w-purpleContent bg-accordionPurple">
                <div className="w-[240px] lg:w-[285px] flex flex-col gap-4 mr-auto ml-leftPurpleContent items-start">
                    <div className="w-full flex flex-wrap flex-col">
                        <h3 className="w-full border-b-[1px] border-borderPurpleContent pb-4 text-base mb-4">Helping teams work better, together</h3>
                        <p className="text-xs mb-2">Discover Trello use cases, productivity tips, best practices for team collaboration, and expert remote work advice.</p>
                    </div>
                    <Link href={''} className="pt-[0.7rem] px-4 pb-[0.8rem] rounded-md bg-white border-buttonPurpleBorder border-[1px] text-base text-[#172b4d] hover:bg-[#eae6ff]">Check out the Trello blog</Link>
                </div>
            </div>
        </div>
    )
}