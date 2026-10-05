import type { ReactNode } from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

interface RootLayoutProps
{
    children: ReactNode
}

function RootLayout({children} : RootLayoutProps)
{
    return(
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default RootLayout