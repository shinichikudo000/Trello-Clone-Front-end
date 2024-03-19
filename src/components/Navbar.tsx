import Link from "next/link";
import trelloImage from "../img/trello.png";

export default function Navbar() {
    return (
        <header className="fixed w-full z-100 hover:shadow-navShadow h-[70px] lg:h-[60px]">
            <div className="max-w-[1320px] mx-auto flex items-stretch h-full">
                <Link href={''}>
                    <img src={trelloImage.src} alt="trello" className="h-full"/>
                </Link>
                <div className="hidden lg:flex h-full items-center justify-center">
                    <ul className="flex items-stretch">
                        <li>Features</li>
                        <li>Solutions</li>
                        <li>Plan</li>
                        <li>Pricing</li>
                        <li>Resources</li>
                    </ul>
                </div>
                <div className="hidden ml-auto lg:flex items-stretch">
                    <Link href={''} className="flex h-full px-6 py-2 text-[1.2rem] items-center self-stretch">
                        Log in
                    </Link>
                    <Link href={''} className="flex h-full px-6 py-2 text-[1.2rem] items-center self-stretch bg-blueButton hover:bg-blueButtonHover text-white">
                        Get Trello for free
                    </Link>
                </div>
            </div>
        </header>
    )
}