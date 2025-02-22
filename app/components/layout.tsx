"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import Frame from "./frame";
import { Navbar, navItems } from "./nav";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const splitPathname = pathname?.split("/");
  const basePathname = `/${splitPathname[1] || ""}`;
  const currentPage = navItems[basePathname]?.name || "Not Found";

  return (
    <div className=" min-h-screen  px-2.5 py-8 md:py-12 md:px-4  flex  justify-center overflow-x-hidden overflow-y-auto">
      <div className="relative w-full max-w-5xl">
        <div className="grid grid-cols-[0.2fr_minmax(auto,_90%)_0.5fr] md:grid-cols-[1fr_minmax(auto,_85%)_1fr] items-start">
          {/* Future Rabbit hole list */}
          <div className="pt-8">
            <div className="h-full" />
          </div>

          {/* Main Content Frame */}
          <div
            className={`relative ${
              pathname === "/" ? "h-[75vh]" : "h-full min-h-[75vh]"
            }`}
          >
            <Frame
              title={
                <Link
                  style={{ textDecoration: "none" }}
                  href={splitPathname[2] ? basePathname : "/"}
                >
                  {currentPage}
                </Link>
              }
              titleSize="lg"
              minHeight="min-h-[75vh]"
            >
              <div
                className={`py-8 px-2 md:p-8 ${pathname === "/" ? "h-full overflow-hidden" : "min-h-full overflow-auto"}`}
              >
                {children}
              </div>
            </Frame>
          </div>

          {/* Right Navigation */}
          <div className="pt-4 md:pt-6 flex justify-end relative">
            <div className="absolute -left-2 md:-left-4">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
