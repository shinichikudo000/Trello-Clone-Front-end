import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function SignUpPage() {
    return (
        <div className="w-[400px] p-8  flex flex-col">
            <h3 className="text-base font-normal">Sign up to continue</h3>
            <Input placeholder="Enter your email" type="email" />
            <button className="text-white bg-blueButton rounded-sm py-2">Continue</button>
            <Link href={''} className="inline-block text-blueButton">Already have an account? Log in</Link>
        </div>
    )
}