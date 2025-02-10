"use client";

import {
  Briefcase,
  Hammer,
  House,
  Laptop,
  LibraryBig,
  Newspaper,
  NotebookPen,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
  "/": {
    name: "Home",
    icon: <House className="md:size-5" />,
  },
  "/thoughts": {
    name: "Thoughts",
    icon: <NotebookPen className="md:size-5" />,
  },
  "/work": {
    name: "Work",
    icon: <Briefcase className="md:size-5" />,
  },
  "/projects": {
    name: "Projects",
    icon: <Hammer className="md:size-5" />,
  },
  "/books": {
    name: "Books",
    icon: <LibraryBig className="md:size-5" />,
  },
  "/blogroll": {
    name: "Blogroll",
    icon: <Newspaper className="md:size-5" />,
  },
  "/uses": {
    name: "Uses",
    icon: <Laptop className="md:size-5" />,
  },
  "/about": {
    name: "About",
    icon: <User className="md:size-5" />,
  },
};

export function Navbar() {
  const pathname = usePathname();
  const basePathname = `/${pathname?.split("/")[1] || ""}`;

  return (
    <aside className="tracking-tight bg-white">
      <nav className="flex flex-col space-y-0.5 md:space-y-1">
        {Object.entries(navItems).map(([path, { name, icon }]) => {
          const isActive = basePathname === path;
          return (
            <Link
              key={path}
              href={path}
              className={`group border-2 border-transparent w-12 md:w-32 text-center rounded-sm hover:border-black flex items-center relative py-0.5 md:py-1 px-1.5 md:px-2 text-xs md:text-base ${
                isActive ? "font-bold" : "font-normal"
              }`}
            >
              {isActive && (
                <span className="size-1 md:size-1.5 mr-1 md:mr-1.5 rounded-full bg-black" />
              )}
              <div className="flex flex-row items-center gap-1">
                <span>{icon}</span>
                <span className="hidden md:inline">{name}</span>
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export { navItems };
