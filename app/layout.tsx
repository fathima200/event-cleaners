


import { GeistSans } from 'geist/font/sans';
import "./globals.css";

export const metadata = {
  title: "TheEventCleaners | Toronto Event & Plaza Cleaning",
  description:
    "TheEventCleaners offers professional event and parking lot cleaning in Toronto, trusted by Caribana and Pride for over 10 years.",
  keywords: "event cleaning Toronto, parking lot cleaning, festival cleaning, pressure washing, snow removal",
  openGraph: {
    title: "TheEventCleaners - Toronto Event & Plaza Cleaning",
    description: "Spotless cleaning for festivals, concerts, and commercial plazas in Toronto.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className={`flex flex-col min-h-screen ${GeistSans.className}`}>
        {children}
      </body>
    </html>
  );
}