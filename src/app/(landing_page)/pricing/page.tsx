import Pricing from "@/components/Pricing";

export default function PricingPage() {
    return (
        <>
            <section className="w-full">
                <div className="px-4 mx-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
                    <div className="flex justify-center">
                        <div className="pt-[5rem] px-4 pb-[3rem] w-full md:w-[67%] text-center">
                            <h1 className="text-5xl mb-2">Trello your way.</h1>
                            <p className="text-xl">Trusted by millions, Trello powers teams all around the world. Explore which option is right for you.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full">
                    <Pricing />
            </section>
        </>
    )
}