import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Trello Automation: Automate Your Workflow with Butler | Trello",
    description: "trello.com",
    icons: {
      icon: './trello_logo.png',
    }
}
export default function PricingPageLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <section className="w-full scroll-mt-[72px]">
            {children}
        </section>
    )
}