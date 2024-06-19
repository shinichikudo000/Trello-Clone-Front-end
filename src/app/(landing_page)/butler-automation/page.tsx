import AlternateContent from "@/components/landingpage_sections/AlternateContent";
import { alternateContentPage } from "@/helpers/types";
import Image from "next/image";
import Link from "next/link";

export default function ButlerAutomationPage() {
    const butlerAutomationContent: alternateContentPage[] = [
        {
            name: 'Rule your boards',
            description: 'Setting rules means important tasks won&apos;t fall through the cracks. Just set a trigger and the actions to be performed, and let Butler run the show. Doesn&apos;t that rule?',
            image: '//images.ctfassets.net/rz1oowkt5gyp/gDxATy5dGJHEh4w2fiBBL/094d1af9ee7825a3f1e5ea7a1b90678d/Spot-Illo_Rules.svg',
            accordionName: 'How to try it',
            accordionList: [
                'When a card is created in a "To Do" list, add the "Steps" checklist so that you don&apos;t miss a beat.',
                'When you enter a card name ending with a date, set the card to be due on that date. Perfect for when emailing cards to your board.',
                'When a card is marked as “Done,” automatically mark the due date as complete, cross off checklist items, and remove members.'
            ]
        },
        {
            name: 'Move work forward',
            description: 'Get to the next step faster with custom card and board buttons. Card buttons appear on the back of every card, and board buttons are in the top right corner. They both perform a series of actions in a single click!',
            image: '//images.ctfassets.net/rz1oowkt5gyp/5lmKFfNOwTKgmL2RXmzcRB/8e34e3a16c802982d93b26aa2460f1ba/spot-illo-butler-button.svg',
            accordionName: 'How to try it',
            accordionList: [
                'Create a card button named “Done!” that moves the card to the “Done” list, and marks the date complete.',
                'Add a “Start” card button that when pressed moves the card to list "In Progress,” and adds you to the card with a due date.',
                'Create a board button that sorts cards by Custom Field story points, due date, and votes, so you know what to prioritize next sprint.'
            ]
        },
        {
            name: 'Integrate your favorite apps',
            description: 'The power of Butler can be extended beyond the boundary of your boards with integrations for Slack, Jira, and email. Butler can post messages to Slack channels, create new Jira tickets, post comments to existing tickets, and send automated emails right from your boards.',
            image: '//images.ctfassets.net/rz1oowkt5gyp/6hNbA7zgdet54M6sOSili1/93976b007213362ef309f61ff00f484a/spot-illo-favorite_apps.svg',
            accordionName: 'Learn more',
            accordionDescription: 'Add integrations to a “Ready for development” card button to:',
            accordionList: [
                'Notify the #development Slack channel',
                'Create a new ticket for the task in Jira',
                'And send an email to any project stakeholders with an update.'
            ]
        },
        {
            name: 'Intelligent automation tips',
            description: 'As you use a Trello board, Butler will recognize repetitive actions being performed and suggest automations based on those actions that can be enabled in a single click.',
            image: '//images.ctfassets.net/rz1oowkt5gyp/3Qa4OBwfuwrEjd6ttoAppH/80379008c3c22a374f74292df2261b1c/Spot-illo_Automation.svg'
        }
    ]
    return (
        <>
            <section className="w-full bg-gradient-to-r from-[#403294] to-[#4C9AFF]">
                <div className="px-4 mx-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] md:flex">
                    <div className="w-full md:w-1/2 md:order-2 px-4 pt-[8rem] pb-4 md:pb-[5rem]">
                        <Image src="//images.ctfassets.net/rz1oowkt5gyp/5VdMUyyLbdnF4kqGM5aORJ/646505ec4e9d9f91b9dc2b88198d5866/butler-header.svg" alt="automation-butler-header-img" className="w-full h-auto object-contain" />
                    </div>
                    <div className="w-full md:w-1/2 px-4 pb-[5rem] pt-[1rem] md:pt-[8rem] md:order-1 text-white text-center md:text-start">
                        <h1 className="text-4xl md:text-[44px] lg:text-[48px] mb-2">Automate your workflow with Butler</h1>
                        <p className="text-xl mb-6">Powerful no-code automation is built into every Trello board. With Butler, you can focus on the work that matters most and let the robots do the rest.</p>
                        <p className="text-xl mb-6">Start automating today - It's free!</p>
                        <div>
                            <Link href={''} className="p-3 bg-white rounded-md text-base border border-[#6554C0] text-black inline-block mb-4">Try Butler</Link>
                        </div>
                        <div>
                            <Link href={''} className="underline text-base inline-block">Learn more about Trello's plan and pricing.</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full">
                <div className="px-4 mx-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
                    <div className="w-full text-center">
                        <div className="md:w-[66.66%] w-full mx-auto">
                        <h2 className="text-2xl md:text-4xl text-[#091E42] px-4 pb-4 pt-[5rem] md:pb-[3rem] font-medium">Create rules, buttons, and commands to automate almost ay action in Trello.</h2>
                        </div>
                        <Image src="//images.ctfassets.net/rz1oowkt5gyp/Wn1UM6FwcYkNYZHPzFDkX/11e151e55b277e5690c5b1742cd486a0/Illo-Flowchart.svg" alt="" className="w-full object-contain p-4" />
                    </div>
                    <AlternateContent contents={butlerAutomationContent} />
                </div>
            </section>
            <section className="w-full">
                <div className="px-4 mx-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
                    <div className="w-full bg-gradient-to-t from-[#403294] to-[#172B4D] px-4 py-[5rem] text-white rounded-3xl text-center mb-[3rem]">
                        <ul className="w-full flex justify-center items-center flex-wrap p-4">
                            <li><Image src="//images.ctfassets.net/rz1oowkt5gyp/5R2Z2uNm0syrV3SRka6U2h/f29d41f1c3e2eb55dbde443f07b4552d/coinbase_2x.png?w=323" alt='coinbase-logo' className="p-4 object-scale-down h-[4rem]" /></li>
                            <li><Image src="//images.ctfassets.net/rz1oowkt5gyp/6siYQZNhk6oCQZSW7nDsZM/dd430f7c60496a4a4a86346ccdcc7f6a/JohnDeere.svg" alt='john-deere-logo' className="object-scale-down p-4"/></li>
                            <li><Image src="//images.ctfassets.net/rz1oowkt5gyp/xsZg04XyKQXvIIfkvoF9k/c1e13a857ab867754c652c5da3e87504/Grand_Hyatt.svg" alt='grand-hyatt-logo' className="object-scale-down p-4 h-[4rem]" /></li>
                            <li><Image src="//images.ctfassets.net/rz1oowkt5gyp/4mi0yTvx9p26OvEyGfpfqy/8148229f21c056ac0c381a6c1742842b/logo-google.svg" alt='google-logo' className="object-scale-down p-4" /></li> 
                        </ul>
                        <ul className="w-full flex justify-center items-center flex-wrap p-4">
                            <li><Image src="//images.ctfassets.net/rz1oowkt5gyp/3iSGcJCdi0Nr69BbPjAGPb/25bea8a14c6f7a23560f83af07a30473/Visa.svg" alt='visa-logo' className="object-scale-down p-4" /></li>
                            <li><Image src="//images.ctfassets.net/rz1oowkt5gyp/4MK9Mr07dtdg6iw0sF8bOs/2ed395aa78720d511c5893621c97f3c1/Zoom.png?w=249&fm=webp" alt='zoom-logo' className="object-scale-down p-4 h-[4rem]" /></li>
                        </ul>
                        <h2 className="text-2xl md:text-4xl font-medium mb-2">Companies of all shapes and sizes use Trello.</h2>
                        <p className="text-xl">Check out some our customer stories <Link href={''} className="underline text-[#FFFFFFCC]">here.</Link></p>
                    </div>
                </div>
            </section>
        </>
    )
}
