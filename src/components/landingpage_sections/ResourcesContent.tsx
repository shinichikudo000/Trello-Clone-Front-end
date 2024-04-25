import { navBarLinksType } from "@/helpers/types";
import Link from "next/link";
import NavbarLinksContainer from "./NavbarLinksContainer";

export default function ResourcesContent() {
    const resourcesLink: navBarLinksType[] = [
        {
            name: 'Trello Guide',
            description: 'Our easy to follow workflow guide will take you from project set-up to Trello expert in no time.',
            link: '/guide'
        },
        {
            name: 'Remote work guide',
            description: 'The complete guide to setting up your team for remote work success.',
            link: '/guide/remote-work'
        },
        {
            name: 'Webinars',
            description: 'Enjoy our free Trello webinars and become a productivity professional.',
            link: '/webinars'
        },
        {
            name: 'Customer stories',
            description: 'See how businesses have adopted Trello as a vital part of their workflow.',
            link: '/customers'
        },
        {
            name: 'Developers',
            description: 'The sky\'s the limit in what you can deliver to Trello users in your Power-Up!',
            link: 'https://developer.atlassian.com/cloud/trello/'
        },
        {
            name: 'Help resources',
            description: 'Need help? Articles and FAQs to get you unstuck.',
            link: 'https://support.atlassian.com/trello/'
        }
    ]
    return (
        <div className="flex w-full">
            <div className="pt-8 pb-[4.75rem] w-whiteContent">
                <div className="w-[640px] mr-[40px] lg:w-[760px] ml-auto pr-4 pl-2 flex flex-col items-start gap-4">
                    <h3 className="w-full border-b-[1px] border-borderWhiteContent pb-4 text-base">Learn & connect</h3>
                    <NavbarLinksContainer links={resourcesLink} />
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