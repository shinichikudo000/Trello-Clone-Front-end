import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Sign up",
    description: "trello.com",
    icons: {
      icon: './trello_logo.png',
    }
}
export default function SignUpPageLayout({
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