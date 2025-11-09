// import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
// import { motion } from "framer-motion";
// import { motion } from "../app/providers/motion-wrapper"; 

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});


export const metadata = {
  title: "TheEventCleaners | Toronto Event & Plaza Cleaning",
  description:
    "TheEventCleaners offers professional event and parking lot cleaning in Toronto, trusted by Caribana and Pride for over 10 years.",
  keywords: "event cleaning Toronto, parking lot cleaning, festival cleaning, pressure washing, snow removal",
  openGraph: {
    title: "TheEventCleaners - Toronto Event & Plaza Cleaning",
    description: "Spotless cleaning for festivals, concerts, and commercial plazas in Toronto.",
    // images: ["/images/hero.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="flex flex-col min-h-screen">
          {children}
      </body>
    </html>
  );
}
