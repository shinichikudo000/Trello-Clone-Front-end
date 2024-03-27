import { Input } from "./ui/input";

export default function FeaturesComparison() {
    return (
        <section className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto px-4">
            <div className="w-full p-4">
                <div>
                    <h2 className="">Compare our Plans</h2>
                </div>
                <div>
                    <div>
                        <Input type='text' placeholder='search' className="bg-[#FAFBFC] border-[#DFE1E6] rounded-md text-base max-w-[22rem] p-2 w-full focus:border-[#091E42] focus:border-2"/>
                    </div>
                    <table>
                    </table>
                </div>
            </div>
        </section>
    )
}