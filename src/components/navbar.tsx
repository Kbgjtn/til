import Link from "next/link";
import { Logo } from "./icons";

export function NavBar() {
  return (
    <nav className="flex-no-wrap dark:bg-black/60 fixed z-50 top-0 bg-transparent flex flex-col w-full items-center justify-between py-2 dark:shadow-lg backdrop-blur-md shadow-none dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
      <div className="flex flex-col items-center">
        <Logo className="max-md:w-9" size={44} />
        <Link className="max-md:text-xs" href="/">
          <p>coocobolo</p>
        </Link>
      </div>
    </nav>
  );
}
