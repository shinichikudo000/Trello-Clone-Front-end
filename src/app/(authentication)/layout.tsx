export default function AuthenticationPageLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <section className="w-full h-[100vh] min-h-[100vh] bg-[#FAFBFD] flex overflow-y-auto">
            <div className="hidden grow-1 grow shrink md:flex h-full items-end">
                <img src="https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/trello-left.4f52d13c.svg" alt="left-bg-img" className="w-full object-contain max-w-[368px]"/>
            </div>
            <div className="min-w-[400px] bg-white shadow-cardShadow grow-0 shrink-0 mx-8 mt-[50px]">
                {children}
            </div>
            <div className="hidden md:flex grow-1 grow shrink h-full justify-end items-end">
                <img src="https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/trello-right.3ee60d6f.svg" alt="right-bg-img" className="w-full object-contain max-w-[368px]"/>
            </div>
        </section>
    )
}