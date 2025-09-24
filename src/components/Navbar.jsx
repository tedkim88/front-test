import Link from "next/link";
import DesktopNavbarServer from "./DesktopNavbarServer";

import { currentUser } from "@clerk/nextjs/server";
import MobileNavbarServer from "./MobileNavbarServer";

async function Navbar() {
//   const user = await currentUser();

  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold  text-primary font-mono tracking-wider hover:text-indigo-600">
              LLD Sports
            </Link>
          </div>

          <DesktopNavbarServer />
          <MobileNavbarServer />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
