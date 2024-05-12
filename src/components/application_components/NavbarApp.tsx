import { TbGridDots } from "react-icons/tb";

export default function NavbarApp() {
    return (
        <section className="dark">
            <header className="w-full h-[48px] bg-background border-b border-b-border">
                <nav className="flex h-full w-full p-2">
                    <div className="grow-0">
                        <div className="hover:bg-foreground h-full p-1 flex justify-center items-center rounded-sm">
                            <TbGridDots size={25}/>
                        </div>
                    </div>
                    <div className="grow shrink">
                        <ul>

                        </ul>
                    </div>
                    <div className="grow-0">
                        
                    </div>
                </nav>
            </header>
        </section>
    )
}