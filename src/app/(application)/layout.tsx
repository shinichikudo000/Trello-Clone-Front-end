import NavbarApp from "@/components/application_components/NavbarApp"

export default function ApplicationPageLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <NavbarApp/>
            {children}
        </>
    )
}