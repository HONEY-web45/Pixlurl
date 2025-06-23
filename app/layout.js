import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pixlurl",
  icons: {
    icon: "/FAV.png",

  },
  description: "Pixlurl help you to shorten your urls quickly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-purple-100`}
      ><Navbar/>
      <div className="min-h-screen ">
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
