import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function LogInPage() {
    return(
        <div className="w-[400px] p-8 flex flex-row">
            <h3 className="text-base font-normal">Log in to continue</h3>
            <Input placeholder="Enter your email" type="email" />
            <button className="text-white bg-blueButton rounded-sm py-2">Continue</button>
            <Link href={''} className="inline-block text-blueButton">Create an account</Link>
        </div>
    )
}