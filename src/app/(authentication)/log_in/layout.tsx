import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Log in to continue",
    description: "trello.com",
    icons: {
      icon: './trello_logo.png',
    }
}
export default function LogInPageLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}