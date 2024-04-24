import Link from "next/link";

export default function FeaturesContent() {
    return (
        <div className="flex w-full">
            <div className="pt-8 pb-[4.75rem] w-whiteContent">
                <div className="w-[640px] mr-[40px] lg:w-[760px] ml-auto pr-4 pl-2 flex flex-col items-start gap-4">
                    <h3 className="w-full border-b-[1px] border-borderWhiteContent pb-4 text-base">Explore the Features that help your team succeed</h3>
                    <ul className="flex flex-wrap w-full text-[#505F79] w-[calc(100% + 2rem)] mx-[-1rem]">
                        <li className="w-1/3">
                            <Link href={'/views'} className="w-full inline-block p-4">
                                <div className="flex gap-2 mb-2">
                                    <svg className="w-5 h-auto object-contain" fill="currentColor" aria-hidden="true" viewBox="0 0 64 64"><path d="M31.811 38.092c-.418-1.086-1.956-1.086-2.374 0l-1.605 4.168-4.168 1.606c-1.087.418-1.087 1.956 0 2.374l4.168 1.605 1.605 4.169c.418 1.086 1.956 1.086 2.374 0l1.606-4.169 4.168-1.605c1.087-.418 1.087-1.956 0-2.374l-4.168-1.606-1.606-4.168Z" opacity=".5"></path><path fill-rule="evenodd" d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm14.633 24.45c-.419-1.087-1.956-1.087-2.375 0l-1.605 4.168-4.168 1.605c-1.087.419-1.087 1.956 0 2.375l4.168 1.605 1.605 4.168c.419 1.087 1.956 1.087 2.375 0l1.605-4.168 4.168-1.605c1.087-.419 1.087-1.956 0-2.375l-4.168-1.605-1.605-4.168ZM31.812 38.092c-.419-1.087-1.956-1.087-2.375 0l-1.605 4.168-4.168 1.605c-1.087.419-1.087 1.956 0 2.375l4.168 1.605 1.605 4.168c.419 1.087 1.956 1.087 2.375 0l1.605-4.168 4.168-1.605c1.087-.419 1.087-1.956 0-2.375l-4.168-1.605-1.605-4.168Zm-9.097-24.725c.503-1.304 2.348-1.304 2.85 0l1.975 5.128 5.127 1.975c1.305.502 1.305 2.347 0 2.85l-5.127 1.974-1.975 5.128c-.502 1.304-2.347 1.304-2.85 0l-1.974-5.128-5.128-1.975c-1.304-.502-1.304-2.347 0-2.85l5.128-1.974 1.974-5.128Z"></path></svg>
                                    <h3>Views</h3>
                                </div>
                                <p className="text-xs">View your team's projects from every angle</p>
                            </Link>
                        </li>
                        <li className="w-1/3">
                            <Link href={'/butler-automation'} className="w-full inline-block p-4">
                                <div className="flex gap-2 mb-2">
                                    <svg className="w-5 h-auto object-contain" fill="currentColor" fill-rule="evenodd" aria-hidden="true" viewBox="0 0 14 15"><path d="M14 12.66a1.925 1.925 0 0 1-1.925 1.925H1.925A1.925 1.925 0 0 1 0 12.659V6.848c0-1.063.862-1.925 1.925-1.925h10.15c1.063 0 1.925.862 1.925 1.925v5.811ZM5.931 9.768a1.308 1.308 0 1 1-2.615 0 1.308 1.308 0 0 1 2.615 0Zm3.462 1.307a1.308 1.308 0 1 0 0-2.615 1.308 1.308 0 0 0 0 2.615Z"></path><path d="M7 0a1.884 1.884 0 0 0-.692 3.637V4.955a.692.692 0 0 0 1.384-.033V3.637A1.885 1.885 0 0 0 7 0Zm.01 2.384a.5.5 0 1 0-.02-1 .5.5 0 0 0 .02 1Z" opacity=".5"></path></svg>
                                    <h3>Automation</h3>
                                </div>
                                <p className="text-xs">Automate tasks and workflows with Butler automation</p>
                            </Link>
                        </li>
                        <li className="w-1/3">
                            <Link href={'/power-ups'} className="w-full inline-block p-4">
                                <div className="flex gap-2 mb-2">
                                    <svg className="w-5 h-auto object-contain" fill="currentColor" aria-hidden="true" viewBox="0 0 91 91"><path d="M25.06 81.71c-.312 1.371-2.011 1.861-3.006.867L8.09 68.615c-.994-.994-.504-2.694.867-3.006l8.853-2.02 9.27 9.268-2.02 8.853ZM69.42 47.785l7.4-29.61c.654-2.618-1.718-4.99-4.336-4.335l-29.61 7.405 26.545 26.54Z"></path><path fill-rule="evenodd" d="m69.42 47.786-26.546-26.54-28.646 28.65a7.15 7.15 0 0 0 0 10.112l16.433 16.43a7.15 7.15 0 0 0 10.111 0L69.42 47.785ZM34.661 61.962a5.958 5.958 0 1 0 0-11.916 5.958 5.958 0 0 0 0 11.916Zm18.175-18.177a5.958 5.958 0 1 1-11.916 0 5.958 5.958 0 0 1 11.916 0Z" opacity=".5"></path></svg>
                                    <h3>Power-Ups</h3>
                                </div>
                                <p className="text-xs">Power up your teams by linking their favorite tools with Trello plugins</p>
                            </Link>
                        </li>
                        <li className="w-1/3">
                            <Link href={'/templates'} className="w-full inline-block p-4">
                                <div className="flex gap-2 mb-2">
                                    <svg className="w-5 h-auto object-contain" fill="currentColor" aria-hidden="true" viewBox="0 0 64 64"><g fill-rule="evenodd"><path d="M64 47.003a6.073 6.073 0 0 1-6.072 6.073H52.34v-5.061H17.946a6.074 6.074 0 0 1-6.052-5.567H45.55V17.649H11.873V7.021A6.073 6.073 0 0 1 17.946.948h39.982A6.073 6.073 0 0 1 64 7.021v39.982Z" opacity=".5"></path><path d="M52.339 17.143a6.073 6.073 0 0 0-6.074-6.073H6.073A6.073 6.073 0 0 0 0 17.143v31.884h52.339V17.143Zm-6.791.506H6.578v24.8h38.97v-24.8Z"></path></g><path d="M46.266 63.198a6.073 6.073 0 0 0 6.073-6.073v-8.098H0v8.098a6.073 6.073 0 0 0 6.073 6.073h40.193Zm-20.202-9.363a2.277 2.277 0 0 1 .107 4.553l-.107.002H8.604a2.277 2.277 0 0 1-.108-4.552l.108-.003h17.46Zm15.689-1.265a3.543 3.543 0 1 1 0 7.085 3.543 3.543 0 0 1 0-7.085Z" opacity=".5"></path></svg>
                                    <h3>Templates</h3>
                                </div>
                                <p className="text-xs">Give your team a blueprint for success eith easy-to-use templates from industry leaders and the Trello community</p>
                            </Link>
                        </li>
                        <li className="w-1/3">
                            <Link href={'/integrations'} className="w-full inline-block p-4">
                                <div className="flex gap-2 mb-2">
                                    <svg className="w-5 h-auto object-contain" fill="currentColor" aria-hidden="true" viewBox="0 0 65 65"><path d="M55.805 34.719a2.54 2.54 0 0 0-.12-5.079H35.078V18.348l-.002-.182a9.316 9.316 0 0 0-9.314-9.135H9.386l-.12.003a2.54 2.54 0 0 0 .12 5.079h16.375l.137.002a4.235 4.235 0 0 1 4.097 4.233v27.666l-.002.137a4.235 4.235 0 0 1-4.232 4.098H9.386l-.12.003a2.54 2.54 0 0 0 .12 5.079h16.375l.18-.002a9.316 9.316 0 0 0 9.136-9.315V34.722h20.609l.12-.003Z" opacity=".5"></path><path d="M11.928.563c6.08 0 11.01 4.929 11.01 11.01 0 6.08-4.93 11.01-11.01 11.01S.918 17.653.918 11.573c0-6.081 4.93-11.01 11.01-11.01ZM11.928 41.78c6.08 0 11.01 4.929 11.01 11.01 0 6.08-4.93 11.01-11.01 11.01S.918 58.87.918 52.79c0-6.081 4.93-11.01 11.01-11.01ZM53.147 21.172c6.08 0 11.01 4.93 11.01 11.01s-4.93 11.01-11.01 11.01-11.01-4.93-11.01-11.01 4.93-11.01 11.01-11.01Z"></path></svg>
                                    <h3>Integrations</h3>
                                </div>
                                <p className="text-xs">Find the apps your team is already using or discover new ways to get work done in Trello.</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="pt-8 pb-[4.75rem] w-purpleContent bg-accordionPurple">
                <div className="w-[240px] lg:w-[285px] flex flex-col gap-4 mr-auto ml-leftPurpleContent items-start">
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