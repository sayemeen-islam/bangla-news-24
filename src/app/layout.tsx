import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
  title: "Bangla News 24",
  description:
    "A news portal concept inspired by modern journalism platforms, built to demonstrate responsive layouts, dynamic routing, and secure user authentication.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme='light'
      className={`${notoSerifBengali.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-50">
        <Header></Header>
        <Marquee></Marquee>
        <main className="max-w-7xl mx-auto min-h-[80vh]">{children}</main>
      <Footer></Footer>
      </body>
    </html>
  );
}
