import Footer from "@/components/landingpage_sections/Footer";
import Navbar from "../../components/landingpage_sections/Navbar";

export default function LandingPageLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}