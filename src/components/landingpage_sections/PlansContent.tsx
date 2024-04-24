import Link from "next/link";

export default function PlansContent() {
    return (
        <div className="flex w-full">
            <div className="pt-8 pb-[4.75rem] w-whiteContent">
                <div className="w-[640px] mr-[40px] lg:w-[760px] ml-auto pr-4 pl-2 flex flex-col items-start gap-4">
                    <ul className="flex flex-wrap w-full text-[#505F79]">
                        <li className="w-1/3">
                            <Link href={'/standard'} className="p-4 w-full inline-block">
                                <div className="flex gap-2 mb-2">
                                    <svg className="w-3 h-auto object-contain" fill="currentColor" aria-hidden="true" viewBox="0 0 46 65"><path fill-rule="evenodd" d="M39.49 38c8.493-8.493 8.493-22.263 0-30.757-8.908-8.907-23.35-8.907-32.257 0-.244.244-.482.494-.715.75-8.08 8.887-7.424 22.642 1.463 30.722l3.995 3.632v7.384h22.77v-7.384l3.995-3.632c.255-.232.505-.47.749-.714ZM25.483 10.01a2.577 2.577 0 0 0-2.577-2.576c-8.38 0-15.173 6.793-15.173 15.173v.573l.003.12a2.577 2.577 0 0 0 5.15-.12v-.573l.002-.188c.1-5.447 4.547-9.832 10.018-9.832a2.577 2.577 0 0 0 2.577-2.577Z"></path><path d="M11.976 54.884v1.995a7.683 7.683 0 0 0 7.682 7.683h7.405a7.683 7.683 0 0 0 7.682-7.683v-1.995h-22.77Z" opacity=".5"></path></svg>
                                    <h3 className="text-[#172B4D]">Standard</h3>
                                </div>
                                <p className="text-xs">For teams that need to manage more work and scale collaboration.</p>
                            </Link>
                        </li>
                        <li className="w-1/3">
                            <Link href={'/premium'} className="p-4 w-full inline-block">
                                <div className="flex gap-2 mb-2">
                                    <svg className="w-4 h-auto object-contain" fill="currentColor" aria-hidden="true" viewBox="0 0 65 63"><path d="m26.998 4.473-6.401 12.992-14.313 2.083a6.435 6.435 0 0 0-3.685 1.881l-.14.149a6.458 6.458 0 0 0 .257 8.971l10.357 10.113-2.445 14.28a6.46 6.46 0 0 0 .647 4.092l.092.17a6.433 6.433 0 0 0 8.602 2.537L32.771 55l12.802 6.742a6.429 6.429 0 0 0 4.084.648l.187-.035a6.45 6.45 0 0 0 5.07-7.412l-2.445-14.28L62.826 30.55a6.453 6.453 0 0 0 1.878-3.69l.024-.186c.401-3.454-2.013-6.621-5.47-7.125l-14.313-2.083-6.4-12.992a6.433 6.433 0 0 0-11.547 0Z"></path></svg>
                                    <h3 className="text-[#172B4D]">Premium</h3>
                                </div>
                                <p className="text-xs">Best for teams up to 100 that need to track multiple projects and visualize work in a varitey of ways.</p>
                            </Link>
                        </li>
                        <li className="w-1/3">
                            <Link href={'/enterprise'} className="p-4 w-full inline-block">
                                <div className="flex gap-2 mb-2">
                                    <svg className="w-5 h-auto object-contain" fill="currentColor" aria-hidden="true" viewBox="0 0 65 42"><path d="M38.993 15.129a2.863 2.863 0 0 1 2.229 2.787 2.866 2.866 0 0 1-2.873 2.858 2.866 2.866 0 0 1-2.873-2.858c0-1.359.952-2.496 2.229-2.787h-10.61a2.865 2.865 0 0 1 2.636 2.849 2.866 2.866 0 0 1-2.873 2.859 2.866 2.866 0 0 1-2.873-2.859c0-1.5 1.16-2.73 2.636-2.85H10.243c-2.539 0-4.9 2.049-4.9 4.575V39.45H60.19V19.703c0-2.526-2.058-4.574-4.596-4.574H38.993Z" opacity=".5"></path><path fill-rule="evenodd" d="M16.707 37.138V4.765c0-2.526 2.058-4.574 4.597-4.574h22.599c2.538 0 4.596 2.048 4.596 4.574v32.373h14.173a1.932 1.932 0 0 1 0 3.864H2.535a1.932 1.932 0 1 1 0-3.864h14.172Zm12.258 0v-5.974c0-1.949 1.588-3.53 3.546-3.53a3.538 3.538 0 0 1 3.547 3.53v5.974h-7.093Zm.766-19.16a2.866 2.866 0 0 0-2.873-2.858 2.866 2.866 0 0 0-2.873 2.859 2.866 2.866 0 0 0 2.873 2.858 2.866 2.866 0 0 0 2.873-2.858Zm8.618-2.92a2.866 2.866 0 0 1 2.873 2.858 2.866 2.866 0 0 1-2.873 2.859 2.866 2.866 0 0 1-2.873-2.859 2.866 2.866 0 0 1 2.873-2.859Zm-8.618-6.29a2.866 2.866 0 0 0-2.873-2.858 2.866 2.866 0 0 0-2.873 2.859 2.866 2.866 0 0 0 2.873 2.858A2.866 2.866 0 0 0 29.73 8.77Zm8.618-2.858a2.866 2.866 0 0 1 2.873 2.859 2.866 2.866 0 0 1-2.873 2.858 2.866 2.866 0 0 1-2.873-2.858A2.866 2.866 0 0 1 38.35 5.91Z"></path></svg>
                                    <h3 className="text-[#172B4D]">Enterprise</h3>
                                </div>
                                <p className="text-xs">Everything your enterprise teams and admins need to manage projects.</p>
                            </Link>
                        </li>
                    </ul>
                    <div className="w-full p-6 bg-[#FFFAE566] flex justify-between flex-wrap gap-4">
                        <div>
                            <div className="flex gap-2 mb-2">
                                <svg className="w-3 h-auto object-contain" fill="currentColor" aria-hidden="true" viewBox="0 0 44 65"><path d="M26.866 1.129c1.15-1.562 3.624-.556 3.357 1.365l-5.216 37.56H1.91c-1.533 0-2.414-1.743-1.506-2.977L26.866 1.129Z"></path><path d="M41.456 24.668c1.533 0 2.414 1.743 1.506 2.977L16.5 63.594c-1.15 1.562-3.624.555-3.357-1.366l5.217-37.56h23.096Z"></path></svg>
                                <h3 className="text-[#172B4D]">Free Plan</h3>
                            </div>
                            <p className="text-xs">For Individuals or small teams looking to keep work organized</p>
                        </div>
                        <Link href={'/tour'} className="p-4 text-base text-[#172B4D] border border-[#FFAB00] bg-white">
                            Take a tour of Trello
                        </Link>
                    </div>
                </div>
            </div>
            <div className="pt-8 pb-[4.75rem] w-purpleContent bg-accordionPurple">
                <div className="w-[240px] lg:w-[285px] flex flex-col gap-4 mr-auto ml-leftPurpleContent items-start">
                    <div className="w-full flex flex-wrap flex-col">
                        <h3 className="w-full border-b-[1px] border-borderPurpleContent pb-4 text-base mb-4">Compare plans & pricing</h3>
                        <p className="text-xs mb-2">Whether you're a team of 2 or 2,000, Trello's flexible pricing model means you only pay for what you need</p>
                    </div>
                    <Link href={''} className="pt-[0.7rem] px-4 pb-[0.8rem] rounded-md bg-white border-buttonPurpleBorder border-[1px] text-base text-[#172b4d] hover:bg-[#eae6ff]">Check out the Trello blog</Link>
                </div>
            </div>
        </div>
    )
}