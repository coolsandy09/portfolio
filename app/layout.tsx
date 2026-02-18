import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains",
    weight: ["400", "700"]
});

export const metadata: Metadata = {
    title: "Sandeep Sah | Data Engineer – Azure, Snowflake, Power BI",
    description:
        "Data Engineer with 3+ years building enterprise data platforms processing 5TB+ daily. Specialized in Azure Data Factory, Snowflake, Power BI, SSAS Tabular, and Python. Currently at LTIMindtree serving Scania CV AB Sweden.",
    keywords: [
        "Data Engineer",
        "Azure Data Factory",
        "Snowflake",
        "Power BI",
        "ETL",
        "SSAS Tabular",
        "Python",
        "Sandeep Sah",
    ],
    robots: { index: true, follow: true },
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://sandeep-sah.com",
        siteName: "Sandeep Sah Portfolio",
        title: "Sandeep Sah | Data Engineer – Azure, Snowflake, Power BI",
        description:
            "Architecting enterprise data platforms that process 5TB+ daily with 99.8% pipeline reliability for Fortune 500 clients.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Sandeep Sah - Data Engineer Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Sandeep Sah | Data Engineer",
        description:
            "Building scalable data architectures for global enterprises. Azure · Snowflake · Power BI · Python.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} ${jetbrains.variable} bg-background text-slate-200 antialiased`}>
                {children}
            </body>
        </html>
    );
}
