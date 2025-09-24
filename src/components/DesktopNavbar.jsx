"use client";
import { BellIcon, HomeIcon, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./ModeToggle";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { ChevronDownIcon } from "lucide-react";

function DesktopNavbar({ user }) {
  // const user = await currentUser();
  const [open, setOpen] = useState(false);
  const username = user?.username ?? user?.email?.split("@")[0] ?? "unknown";

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="hidden md:flex items-center space-x-4">
      <ModeToggle />

      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="/">
          <HomeIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Home</span>
        </Link>
      </Button>

      {user ? (
        <>
          <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link href="/notifications">
              <BellIcon className="w-4 h-4" />
              <span className="hidden lg:inline">Notifications</span>
            </Link>
          </Button>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative" ref={menuRef}>
              <Button
                variant={"ghost"}
                onClick={() => setOpen(!open)}
                className="flex items-center gap-1"
              >
                Manage Athletes
                <ChevronDownIcon
                  className={`w-4 h-4 transition-transform ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                />
              </Button>
              {open && (
                <div className="absolute top-full left-0 flex flex-col mt-4 min-w-[180px] rounded-md shadow-xl bg-gradient-to-b from-indigo-500 to-purple-600 text-white z-50 border border-indigo-400 animate-slideFadeIn">
                  {" "}
                  <a
                    href="/athletes/"
                    className="px-4 py-2 hover:bg-purple-700 hover:text-yellow-300 transition-colors rounded-md"
                  >
                    {" "}
                    View All Athletes{" "}
                  </a>{" "}
                  <a
                    href="/athletes/add"
                    className="px-4 py-2 hover:bg-purple-700 hover:text-yellow-300 transition-colors rounded-md"
                  >
                    {" "}
                    Add Athlete{" "}
                  </a>{" "}
                  <a
                    href="/athletes/search"
                    className="px-4 py-2 hover:bg-purple-700 hover:text-yellow-300 transition-colors rounded-md"
                  >
                    {" "}
                    Search Athlete{" "}
                  </a>{" "}
                  <a
                    href="/athletes/stats"
                    className="px-4 py-2 hover:bg-purple-700 hover:text-yellow-300 transition-colors rounded-md"
                  >
                    {" "}
                    Stats{" "}
                  </a>{" "}
                </div>
              )}
            </div>
          </div>

          <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link href={`/profile/${username}`}>
              <UserIcon className="w-4 h-4" />
              <span className="hidden lg:inline">Profile</span>
            </Link>
          </Button>
          <UserButton />
        </>
      ) : (
        <SignInButton mode="modal">
          <Button
            variant="default"
            className={"hover:cursor-pointer hover:bg-indigo-600"}
          >
            Sign In
          </Button>
        </SignInButton>
      )}
    </div>
  );
}
export default DesktopNavbar;
