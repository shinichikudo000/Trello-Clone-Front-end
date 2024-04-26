import Link from "next/link";

export default function ViewsPage() {
    return (
        <> 
            <section className="w-full bg-gradient-to-t from-[#FFF2FB] to-[#FFFFFF]">
                <div className="px-4 mx-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] flex flex-col lg:flex-row lg:overflow-x-visible lg:relative">
                    <div className="w-full lg:w-1/2 px-4 pt-4 pb-[6rem] lg:pt-[5rem] order-2 lg:order-1 text-center lg:text-start">
                        <div className="w-full text-center lg:text-start">
                            <h1 className="text-[32px] md:text-[44px] lg:text-[48px] text-[#091E42] font-bold mb-2">Give work a new look with Trello views.</h1>
                            <p className="text-xl text-[#091E42] mb-6">See your projects from every angle with Board, Timeline, Table, Calendar, Dashboard, Map, and Workspace views that will bring a fresh perspective to the task at hand.</p>
                            <p className="text-xl text-[#091E42] mb-6">Board are available to all users. Additional views require a Premium or Enterprise account.</p>
                        </div>
                        <div className="w-full text-center lg:text-start mb-3">
                            <Link href={''} className="inline-block p-3 border border-[#D62688] bg-white text-[#172B4D] text-base rounded-md">Try for views for free!</Link>
                        </div>
                        <div className="w-full text-center lg:text-start">
                            <Link href={'/pricing'} className="underline text-blueButton text-base">Learn more about Trello's plans and pricing.</Link>
                        </div>
                    </div>
                    <div className="w-full h-full lg:w-[60vw] order-1 lg:order-2 pt-[8rem] lg:pt-[10rem] px-4 lg:pr-0 lg:pb-[5rem] lg:absolute left-[50%] top-0">
                        <img src="//images.ctfassets.net/rz1oowkt5gyp/2eQ2q8S2ekzMgbFZvg4oU0/5f2c889b0e0ff8f5ecb3984ad209c9d6/All_Views_Illo.svg" alt="" className="w-full lg:w-[1020px] object-contain lg:object-scale-down h-full lg:ml-[-5rem]"/>
                    </div>  
                </div>
            </section>
            <section className="w-full">
                <div className="px-4 mx-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
                    <div className="px-4 pt-[5rem] pb-[3rem] w-full text-center">
                        <h1 className="text-2xl md:text-4xl font-bold">See what views can do for you</h1>
                    </div>
                    <div className="w-full md:flex">
                        <div className="px-4 pt-[5rem] pb-4 md:pb-[3rem] w-full md:w-1/2">
                            <img src="//images.ctfassets.net/rz1oowkt5gyp/2VMobYBznJ6iYVv9N3mnsA/4577db5007dcff235d05f6a463db532d/Board_View_Illo_4.svg" alt="" className="w-full h-auto object-contain" />
                        </div>
                        <div className="w-full md:w-1/2 lg:w-[44%] lg:ml-auto px-4 pt-4 pb-[3rem] md:pt-[5rem]  ">
                            <h2 className="text-2xl md:text-4xl mb-2 font-medium">Success starts with a Trello board</h2>
                            <img src="//images.ctfassets.net/rz1oowkt5gyp/5Ub9YCKx371qMXE7jomyBJ/3d701450a4b9a98379c67b1ca3b19b2d/gradient_bar.svg" alt="divider" className="my-8"/>
                            <p className="text-lg mb-6">Similar to a Kanban board, a Trello board is the easiest way to go from idea to action. Plan projects and break down each step of the way to getting things done. Instantly see the status of every task and celebrate each accomplishment. Project management has never been so powerful, yet so fun.</p>
                        </div>
                    </div>
                    <div className="w-full md:flex">
                        <div className="px-4 pt-[5rem] pb-4 md:pb-[3rem] w-full md:w-1/2 md:order-2">
                            <img src="//images.ctfassets.net/rz1oowkt5gyp/2VMobYBznJ6iYVv9N3mnsA/4577db5007dcff235d05f6a463db532d/Board_View_Illo_4.svg" alt="" className="w-full h-auto object-contain" />
                        </div>
                        <div className="md:order-1 w-full md:w-1/2 lg:w-[44%] lg:mr-auto px-4 pt-4 pb-[3rem] md:pt-[5rem]">
                            <h2 className="text-2xl md:text-4xl mb-2 font-medium">Hit deadlines every time with Timeline</h2>
                            <img src="//images.ctfassets.net/rz1oowkt5gyp/5Ub9YCKx371qMXE7jomyBJ/3d701450a4b9a98379c67b1ca3b19b2d/gradient_bar.svg" alt="divider" className="my-8"/>
                            <p className="text-lg mb-6">Stay on top of every sprint and stay on track of every goal with Timeline. Use Timeline to see how all of the moving parts piece together over time. Drag and drop to make start and due date adjustments on the fly as priorities shift and needs change. Quickly get a glimpse of what’s coming down the pipeline and identify any gaps that might impede your team’s progress.</p>
                            <Link href={''} className="underline text-blueButton text-lg">Learn more about Timeline view</Link>
                        </div>
                    </div>
                    <div className="w-full md:flex">
                        <div className="px-4 pt-[5rem] pb-4 md:pb-[3rem] w-full md:w-1/2">
                            <img src="//images.ctfassets.net/rz1oowkt5gyp/5TCPbikbixthhEiPqdmxMg/57c19b203ce7f79e1fdb183e40b554f6/Calendar_View_Illo_7.svg" alt="" className="w-full h-auto object-contain" />
                        </div>
                        <div className="w-full md:w-1/2 lg:w-[44%] lg:ml-auto px-4 pt-4 pb-[3rem] md:pt-[5rem]">
                            <h2 className="text-2xl md:text-4xl mb-2 font-medium">Use Calendar to stay on top of tasks</h2>
                            <img src="//images.ctfassets.net/rz1oowkt5gyp/5Ub9YCKx371qMXE7jomyBJ/3d701450a4b9a98379c67b1ca3b19b2d/gradient_bar.svg" alt="divider" className="my-8"/>
                            <p className="text-lg mb-6">Start each day without any surprises. Whether scheduling a quarterly editorial calendar or staying on top of your to-dos, Calendar is like a crystal ball giving you a clear vision of what work lies ahead. Sync any third party calendars to maintain the perfect work-life balance.</p>
                            <Link href={''} className="underline text-blueButton text-lg">Learn more about Calendar view</Link>
                        </div>
                    </div>
                    <div className="w-full md:flex">
                        <div className="px-4 pt-[5rem] pb-4 md:pb-[3rem] w-full md:w-1/2 md:order-2">
                            <img src="//images.ctfassets.net/rz1oowkt5gyp/5fGmbGQU0lwsIbauhq9DQ2/f6936ca0d10668e1503f1cd863aca0da/Dashboard_View_Illo_5.svg" alt="" className="w-full h-auto object-contain" />
                        </div>
                        <div className="md:order-1 w-full md:w-1/2 lg:w-[44%] lg:mr-auto px-4 pt-4 pb-[3rem] md:pt-[5rem]">
                            <h2 className="text-2xl md:text-4xl mb-2 font-medium">Get actionable insigths with Dashboard</h2>
                            <img src="//images.ctfassets.net/rz1oowkt5gyp/5Ub9YCKx371qMXE7jomyBJ/3d701450a4b9a98379c67b1ca3b19b2d/gradient_bar.svg" alt="divider" className="my-8"/>
                            <p className="text-lg mb-6">Bring a bird’s-eye view to projects and processes with Dashboard so that you can manage workloads and prevent bottlenecks before they begin. Visualize key metrics like due dates, assigned cards, and cards per list to keep stakeholders aligned and confidence running high.</p>
                            <Link href={''} className="underline text-blueButton text-lg">Learn more about Dashboard view</Link>
                        </div>
                    </div>
                    <div className="w-full md:flex">
                        <div className="px-4 pt-[5rem] pb-4 md:pb-[3rem] w-full md:w-1/2">
                            <img src="//images.ctfassets.net/rz1oowkt5gyp/2siptXBVrLC3hmtvpxxURN/92393ce358eec43b1f7a1049a60f7fe5/Table_View_Illo_8.svg" alt="" className="w-full h-auto object-contain" />
                        </div>
                        <div className="w-full md:w-1/2 lg:w-[44%] lg:ml-auto px-4 pt-4 pb-[3rem] md:pt-[5rem]">
                            <h2 className="text-2xl md:text-4xl mb-2 font-medium">See it like a spreadsheet with Table</h2>
                            <img src="//images.ctfassets.net/rz1oowkt5gyp/5Ub9YCKx371qMXE7jomyBJ/3d701450a4b9a98379c67b1ca3b19b2d/gradient_bar.svg" alt="divider" className="my-8"/>
                            <p className="text-lg mb-6">Dial in on all of the work that is happening across a board with the Table view. View your work in a convenient spreadsheet-styled list that can be sorted and filtered to drill down to exactly the cards you need to see.</p>
                            <Link href={''} className="underline text-blueButton text-lg">Learn more about Table view</Link>
                        </div>
                    </div>
                    <div className="w-full md:flex">
                        <div className="px-4 pt-[5rem] pb-4 md:pb-[3rem] w-full md:w-1/2 md:order-2">
                            <img src="//images.ctfassets.net/rz1oowkt5gyp/7GsCpQQCUgMDWhWNZBCKkM/304325abf1d2f0af44ea6686660734ab/Map_View_Illo_2.svg" alt="" className="w-full h-auto object-contain" />
                        </div>
                        <div className="md:order-1 w-full md:w-1/2 lg:w-[44%] lg:mr-auto px-4 pt-4 pb-[3rem] md:pt-[5rem]">
                            <h2 className="text-2xl md:text-4xl mb-2 font-medium">Find a new sense of direction with Map</h2>
                            <img src="//images.ctfassets.net/rz1oowkt5gyp/5Ub9YCKx371qMXE7jomyBJ/3d701450a4b9a98379c67b1ca3b19b2d/gradient_bar.svg" alt="divider" className="my-8"/>
                            <p className="text-lg mb-6">Wherever you are in the world, use Trello’s Map view to display location-based data in context on an interactive map. Whether tracking real estate properties, planning an event, or organizing work in the field, Map will make sure your team doesn’t lose their way.</p>
                            <Link href={''} className="underline text-blueButton text-lg">Learn more about Map view</Link>
                        </div>
                    </div>
                    <div className="w-full md:flex">
                        <div className="px-4 pt-[5rem] pb-4 md:pb-[3rem] w-full md:w-1/2">
                            <img src="//images.ctfassets.net/rz1oowkt5gyp/IzP5x6h6ah349q3zW89n8/0b0cc5b8660b2b36bd7324e5d5f9e780/UI_Illo__Workspace_Views_2x.png?w=540" alt="" className="w-full h-auto object-contain" />
                        </div>
                        <div className="w-full md:w-1/2 lg:w-[44%] lg:ml-auto px-4 pt-4 pb-[3rem] md:pt-[5rem]">
                            <h2 className="text-2xl md:text-4xl mb-2 font-medium">Manage work across multiple boards</h2>
                            <img src="//images.ctfassets.net/rz1oowkt5gyp/5Ub9YCKx371qMXE7jomyBJ/3d701450a4b9a98379c67b1ca3b19b2d/gradient_bar.svg" alt="divider" className="my-8"/>
                            <p className="text-lg mb-6">Create as many custom overviews as you need across Workspace boards. Use the Workspace Table and Calendar views to keep track of minor details or large projects.</p>
                            <Link href={''} className="underline text-blueButton text-lg">Learn more about Workspace views</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-gradient-to-b from-[#DEEBFF] to-[#FFFFFF]">
                <div className="px-4 mx-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
                    <div className="py-[5rem] px-4 text-center">
                        <h2 className="text-2xl md:text-4xl mb-2 font-medium">Bring powerful new views to your team’s work</h2>
                        <p className="text-xl mb-6">Start a free trial today</p>
                        <div>
                            <Link href={''} className="inline-block bg-white border border-blueButton p-3 text-basse text-[#172B4D] hover:bg-[#DEEBFF] rounded-md">I'm ready</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}