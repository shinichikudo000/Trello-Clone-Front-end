import Link from "next/link";

export default function FeaturesContent() {
    return (
        <div className="flex w-full">
            <div className="pt-8 pb-[4.75rem] w-whiteContent">
                <div className="w-[640px] mr-[40px] ml-auto pr-4 pl-2 flex flex-col items-start gap-4">
                    <h3 className="w-full border-b-[1px] border-borderWhiteContent pb-4 text-base">Explore the Features that help your team succeed</h3>
                    <nav></nav>
                </div>
            </div>
            <div className="pt-8 pb-[4.75rem] w-purpleContent bg-accordionPurple">
                <div className="w-[240px] flex flex-col gap-4 mr-auto ml-leftPurpleContent items-start">
                    <div className="w-full flex flex-wrap flex-col">
                        <h3 className="w-full border-b-[1px] border-borderPurpleContent pb-4 text-base mb-4">Meet Trello</h3>
                        <p className="text-xs mb-2">Trello makes it Easy for your team to get work done. No matter the project, workflow, or type of team, trello can help keep things organized, It's simple-sign-up, create a board, and you're off! Productivity awaits</p>
                    </div>
                    <Link href={''} className="pt-[0.7rem] px-4 pb-[0.8rem] rounded-md bg-white border-buttonPurpleBorder border-[1px] text-base text-[#172b4d] hover:bg-[#eae6ff]">Check out Trello</Link>
                </div>
            </div>
        </div>
    )
}