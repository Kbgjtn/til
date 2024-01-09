import "@/styles/globals.css";
import "@/styles/prism.css";

import { Ubuntu } from "next/font/google";
import type { Metadata } from "next";
import { Logo } from "@/components/icons";
import Link from "next/link";

const sans = Ubuntu({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
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
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

const Navbar = () => (
  <nav className="container mx-auto w-full flex flex-col items-center">
    <div className="h-8"></div>
    <Logo className="max-md:w-9" size={64} />
    <Link className="max-md:text-xs" href="/">
      <p>coocobolo</p>
    </Link>
  </nav>
);

/**@function  {function} generateMetadata @param params */
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "me",
  };
}
