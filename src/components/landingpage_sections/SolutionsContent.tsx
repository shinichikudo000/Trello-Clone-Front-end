import Link from "next/link";

export default function SolutionsContent() {
    return (
        <div className="flex w-full">
            <div className="pt-8 pb-[4.75rem] w-whiteContent">
                <div className="w-[640px] mr-[40px] lg:w-[760px] ml-auto pr-4 pl-2 flex flex-col items-start gap-4">
                    <h3 className="w-full border-b-[1px] border-borderWhiteContent pb-4 text-base">Take a page out of these pre-built Trello playbooks designed for all teams</h3>
                    <ul className="flex flex-wrap w-full text-[#505F79]">
                        <li className="p-4 w-1/3">
                            <div className="flex gap-2 mb-2">
                                <svg className="w-5 h-auto object-contain" fill="currentColor" aria-hidden="true" viewBox="0 0 63 65"><path d="M36.027 36.587h-6.415a8.456 8.456 0 0 0-8.457 8.456v7.874c0 6.441 5.223 11.664 11.664 11.664 6.442 0 11.664-5.223 11.664-11.664v-7.874a8.456 8.456 0 0 0-8.456-8.456Zm-6.415 5.25h6.415a3.208 3.208 0 0 1 3.208 3.207v7.873a6.415 6.415 0 0 1-12.83 0v-7.873a3.208 3.208 0 0 1 3.207-3.208ZM2.785 18.508a2.625 2.625 0 0 1 2.621 2.5l.003.124v19.246a2.624 2.624 0 0 1-5.246.123l-.003-.123V21.132a2.624 2.624 0 0 1 2.625-2.624Z" opacity=".5"></path><path d="m2.784 39.212 55.592 16.192a3.5 3.5 0 0 0 4.478-3.36V4.084c0-2.46-2.472-4.153-4.766-3.262L2.784 22.299v16.913Z"></path></svg>
                                <h3>Marketing teams</h3>
                            </div>
                            <p className="text-xs">Whether launching a new product, campaign, or creating content, Trello helps marketing teams succeed.</p>
                        </li>
                        <li className="p-4 w-1/3">
                            <div className="flex gap-2 mb-2">
                                <svg className="w-5 h-auto object-contain" fill="currentColor" aria-hidden="true" viewBox="0 0 65 65"><path d="M16.462 33.807h32.932v21.747H16.462V33.807Z" opacity=".5"></path><path d="M8.384.875h20.815v13.98h7.457V.876H57.47a7.456 7.456 0 0 1 7.457 7.456V57.42a7.456 7.456 0 0 1-7.457 7.456H8.384a7.456 7.456 0 0 1-7.456-7.456V8.33A7.456 7.456 0 0 1 8.384.875Zm40.277 33.554H17.083v20.505h31.578V34.429Z"></path></svg>
                                <h3>Product Management</h3>
                            </div>
                            <p className="text-xs">Use Trello's management boards and roadmap features to simplify complex projects and processes.</p>
                        </li>
                        <li className="p-4 w-1/3">
                            <div className="flex gap-2 mb-2">
                                <svg className="w-5 h-auto object-contain" fill="currentColor" aria-hidden="true" viewBox="0 0 65 65"><path d="M10.002 25.73h45.359v27.34H10.002z" opacity=".5"></path><g fill-rule="evenodd"><path d="M56.63.877H7.491h49.137Zm7.43 17.398h-64v39.146a7.456 7.456 0 0 0 7.457 7.456h49.087a7.456 7.456 0 0 0 7.457-7.456V18.275ZM27.514 31.211a2.796 2.796 0 0 0-3.954 0l-6.835 6.834-.099.105a2.796 2.796 0 0 0 .1 3.85l6.834 6.835.104.099a2.796 2.796 0 0 0 3.85-.1l.1-.104a2.796 2.796 0 0 0-.1-3.85l-4.858-4.857 4.858-4.858.1-.104a2.796 2.796 0 0 0-.1-3.85Zm13.67 0a2.796 2.796 0 0 0-4.053 3.85l.1.104 4.858 4.858-4.859 4.857a2.796 2.796 0 0 0-.1 3.85l.1.105a2.796 2.796 0 0 0 3.85.099l.104-.1L48.018 42a2.796 2.796 0 0 0 .1-3.85l-.1-.105-6.835-6.835Z"></path><path d="M64.06 18.275h-64V8.333A7.456 7.456 0 0 1 7.518.877h49.087a7.456 7.456 0 0 1 7.457 7.456v9.942Zm-55.3-4.35a3.728 3.728 0 1 0 0-7.456 3.728 3.728 0 0 0 0 7.456Zm13.67-3.728a3.728 3.728 0 1 1-7.457 0 3.728 3.728 0 0 1 7.456 0Zm6.213 3.729a3.728 3.728 0 1 0 0-7.457 3.728 3.728 0 0 0 0 7.456Z" opacity=".5"></path></g></svg>
                                <h3>Engineering teams</h3>
                            </div>
                            <p className="text-xs">Ship more code, faster, and give your developers the freedom to be more agile with Trello.</p>
                        </li>
                        <li className="p-4 w-1/3">
                            <div className="flex gap-2 mb-2">
                                <svg className="w-5 h-auto object-contain" fill="currentColor" aria-hidden="true" viewBox="0 0 64 65"><path d="M32.68 8.957 4.863 36.775l4.402 4.647L36.895 13.79c.105-.105.217-.2.334-.285L32.68 8.957ZM18.89 51.582l-5.798-6.12 27.737-27.738.099-.103c.067-.074.129-.151.186-.23l6.006 6.005c-.117.085-.228.18-.334.285L18.968 51.5l-.078.083Zm3.817 4.03 4.41 4.654L55.553 31.83l-4.548-4.548c-.057.079-.12.156-.186.23l-.099.104-27.818 27.818a2.824 2.824 0 0 1-.195.177Z" opacity=".5"></path><path d="M32.68 8.957 55.554 31.83l6.191-6.19a7.418 7.418 0 0 0 0-10.492L49.362 2.766a7.418 7.418 0 0 0-10.49 0L32.68 8.957ZM4.862 36.775l-3.24 3.241A3.71 3.71 0 0 0 .535 42.64v18.245a3.71 3.71 0 0 0 3.71 3.71h17.008c.984 0 1.927-.391 2.623-1.087l3.24-3.24L4.863 36.774Z"></path></svg>
                                <h3>Design teams</h3>
                            </div>
                            <p className="text-xs">Empower your design teams by using Trello to streamline creative requests and promote more fluid cross-team collaboration.</p>
                        </li>
                        <li className="p-4 w-1/3">
                            <div className="flex gap-2 mb-2">
                                <svg className="w-5 h-auto object-contain" fill="currentColor" aria-hidden="true" viewBox="0 0 65 63"><path d="M13.354 3.761A3.728 3.728 0 0 1 17.084.033h6.835a3.728 3.728 0 0 1 3.728 3.728v6.835a3.728 3.728 0 0 1-3.728 3.729h-6.835a3.728 3.728 0 0 1-3.728-3.729V3.761ZM38.209 3.761A3.728 3.728 0 0 1 41.937.033h6.835A3.728 3.728 0 0 1 52.5 3.761v6.835a3.728 3.728 0 0 1-3.728 3.729h-6.835a3.728 3.728 0 0 1-3.728-3.729V3.761Z" opacity=".5"></path><path d="M57.471 10.596a7.456 7.456 0 0 1 7.457 7.456v36.66a7.456 7.456 0 0 1-7.457 7.456H8.384a7.456 7.456 0 0 1-7.456-7.456v-36.66a7.456 7.456 0 0 1 7.456-7.456h49.087Z"></path></svg>
                                <h3>Startups</h3>
                            </div>
                            <p className="text-xs">From hitting revenue goals to managing workflows, small businesses thrive with Trello.</p>
                        </li>
                        <li className="p-4 w-1/3">
                            <div className="flex gap-2 mb-2">
                                <svg className="w-5 h-auto object-contain" fill="currentColor" aria-hidden="true" viewBox="0 0 65 65"><mask id="globe" width="64" height="63" x="0" y="0"><rect width="62.129" height="62.129" x="63.02" y="62.691" fill="#fff" rx="31.064" transform="rotate(-180 63.02 62.691)"></rect></mask><g mask="url(#globe)"><path fill-rule="evenodd" d="M59.749 80.947c26.938 0 48.776-21.838 48.776-48.776 0-26.939-21.838-48.776-48.776-48.776a48.553 48.553 0 0 0-28.067 8.879 48.553 48.553 0 0 0-28.067-8.88c-26.938 0-48.776 21.838-48.776 48.777 0 26.938 21.838 48.776 48.776 48.776a48.553 48.553 0 0 0 28.067-8.879 48.553 48.553 0 0 0 28.067 8.88Zm0-92.648a43.667 43.667 0 0 0-24.023 7.156c6.846 5.992 12.002 13.868 14.657 22.819H67.38a2.452 2.452 0 0 1 .115 4.902l-.115.003H51.564c.213 1.139.385 2.291.517 3.456a6.253 6.253 0 0 0-2.142 4.718c0 1.951.891 3.694 2.289 4.843a48.841 48.841 0 0 1-.473 3.877h15.624a2.452 2.452 0 0 1 .115 4.902l-.115.003H50.693c-2.552 9.401-7.844 17.675-14.966 23.909a43.666 43.666 0 0 0 24.022 7.155c24.23 0 43.872-19.642 43.872-43.871 0-24.23-19.642-43.872-43.872-43.872Zm-56.134 0a43.666 43.666 0 0 1 24.023 7.156C20.792 1.447 15.637 9.323 12.981 18.274H-1.29l-.116.002a2.453 2.453 0 0 0 .115 4.903H11.8a49.045 49.045 0 0 0-.828 8.992c0 2.69.218 5.33.637 7.902H-1.29l-.115.003a2.453 2.453 0 0 0 .115 4.902h13.961c2.552 9.401 7.844 17.675 14.967 23.909a43.667 43.667 0 0 1-24.023 7.155c-24.23 0-43.871-19.642-43.871-43.871 0-24.23 19.642-43.872 43.871-43.872Zm29.346 76.484a44.18 44.18 0 0 1-1.279 1.108c-.433-.36-.859-.73-1.278-1.107.372.227.81.359 1.278.359.469 0 .907-.132 1.279-.36Zm12.627-19.805A43.877 43.877 0 0 1 33.661 64.14c.298-.406.474-.907.474-1.449V44.978h11.453Zm1.899-12.807c0 2.698-.244 5.339-.71 7.902H34.135V24.66a6.253 6.253 0 0 1-2.18-4.751c0-1.9.845-3.602 2.18-4.751V.654a43.887 43.887 0 0 1 11.105 17.62h-.966c.14.521.215 1.07.215 1.635a6.238 6.238 0 0 1-.92 3.27h2.996c.604 2.902.922 5.91.922 8.992ZM18.33 46.669a43.909 43.909 0 0 0 11.373 17.47 2.44 2.44 0 0 1-.47-1.333l-.003-.116V44.978H26.3a6.24 6.24 0 0 0 1.295-3.815c0-.371-.033-.736-.095-1.09h1.73V23.18H16.8a44.315 44.315 0 0 0-.596 14.373 6.266 6.266 0 0 0 2.125 9.116ZM29.23.654a43.887 43.887 0 0 0-11.106 17.62H29.23V.654Z" opacity=".5"></path></g><path d="m29.23.68-.028.002a43.887 43.887 0 0 0-11.077 17.592H29.23V.679Zm-1.237 61.76c.41.052.822.096 1.237.132V44.978H26.3a6.257 6.257 0 0 1-4.972 2.453 6.24 6.24 0 0 1-2.998-.762 43.87 43.87 0 0 0 9.663 15.77ZM16.205 37.552a44.305 44.305 0 0 1-.327-5.381c0-3.082.318-6.09.923-8.992h12.43v16.894H27.5a6.27 6.27 0 0 0-11.296-2.521Zm17.93 25.063c.392-.027.782-.062 1.17-.103a43.835 43.835 0 0 0 10.284-17.534H34.135v17.637Zm25.877-17.637A31.175 31.175 0 0 1 43.285 60.56a48.573 48.573 0 0 0 7.409-15.58h9.318Zm3.008-13.352a31.09 31.09 0 0 1-1.163 8.447H51.755c.208-1.276.367-2.57.474-3.877a6.267 6.267 0 1 0-.147-9.561 48.712 48.712 0 0 0-.517-3.456h10.292a31.089 31.089 0 0 1 1.163 8.447ZM50.383 18.274h9.628A31.163 31.163 0 0 0 42.16 2.277a48.628 48.628 0 0 1 8.223 15.997ZM3.899 44.978a31.181 31.181 0 0 0 15.96 15.269 48.565 48.565 0 0 1-7.187-15.269H3.899Zm7.711-4.905H2.053a31.088 31.088 0 0 1-1.162-8.447c0-2.928.405-5.762 1.162-8.447h9.748a49.047 49.047 0 0 0-.828 8.992c0 2.69.218 5.33.637 7.902Zm9.384-37.522A31.17 31.17 0 0 0 3.899 18.274h9.083A48.622 48.622 0 0 1 20.994 2.55Zm25.784 37.522c.466-2.563.71-5.204.71-7.902 0-3.082-.318-6.09-.923-8.992H43.57a6.264 6.264 0 0 1-5.347 2.997 6.243 6.243 0 0 1-4.088-1.516v15.413h12.643Zm-8.555-26.432c-1.562 0-2.99.572-4.088 1.516V.654a43.887 43.887 0 0 1 11.106 17.62h-.966a6.27 6.27 0 0 0-6.052-4.633Z"></path></svg>
                                <h3>Remote Teams</h3>
                            </div>
                            <p className="text-xs">Keep your remote team connected and motivated, no matter where they're located around the world.</p>
                        </li>
                    </ul>
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