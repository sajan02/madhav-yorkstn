import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { MenuProvider } from "@/components/MenuContext";
import { InquiryProvider } from "@/components/InquiryContext";
import { Analytics } from "@vercel/analytics/next"


const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400", "500"],
    style: ["normal", "italic"],
    variable: "--font-cormorant",
    display: "swap",
});

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["300", "400"],
    variable: "--font-dm",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Yorkstn | Japanese Brand Expansion into India",
    description:
        "Yorkstn helps Japanese premium brands enter the Indian retail market with structural discipline — feasibility, licensing, store setup and operations in Delhi NCR, Gurugram.",
    keywords:
        "Japanese brands India expansion, master franchise India, premium brand India market entry, Japan India retail, Delhi NCR brand launch",
    authors: [{ name: "Madhav Sharma" }, { name: "Vedika Bhardwaj" }],
    openGraph: {
        title: "Yorkstn | Bringing Japanese Craft to India — Thoughtfully",
        description:
            "A master franchise and distribution partner for Japanese premium brands entering India. Community before commerce.",
        url: "https://www.yorkstn.com",
        siteName: "Yorkstn",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
            <header>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400&display=swap"
                    rel="stylesheet"></link>
            </header>
            <body>
                <MenuProvider>
                    <InquiryProvider>
                        {children}
                    </InquiryProvider>
                </MenuProvider>
                <Analytics />
            </body>
        </html>
    );
}
