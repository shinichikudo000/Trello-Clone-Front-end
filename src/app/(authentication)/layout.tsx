export default function AuthenticationPageLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <section className="w-full min-h-full bg-[#FAFBFD] flex">
            <div className="grow-1 items-end">
                <img src="https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/trello-left.4f52d13c.svg" alt="left-bg-img" className="w-full object-contain"/>
            </div>
            <div className="w-[400px] bg-white shadow-cardShadow grow-0">
                {children}
            </div>
            <div className="grow-1 items-end">
                <img src="https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/trello-right.3ee60d6f.svg" alt="right-bg-img" className="w-full object-contain"/>
            </div>
        </section>
    )
}