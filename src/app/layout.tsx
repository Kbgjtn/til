import "@/styles/globals.css";
import "@/styles/prism.css";

import { Ubuntu } from "next/font/google";
import type { Metadata } from "next";
import { NavBar } from "@/components/navbar";

const sans = Ubuntu({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
  preload: true,
});

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" prefers-color-scheme="dark" className="scroll-smooth">
      <body
        className={
          sans.className +
          " bg-gray-100 text-gray-900 leading-normal dark:bg-black dark:text-white font-current"
        }
      >
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}

/**@function  {function} generateMetadata @param params */
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "me",
  };
}
