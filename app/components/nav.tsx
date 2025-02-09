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
    icon: <House />,
  },
  "/thoughts": {
    name: "Thoughts",
    icon: <NotebookPen />,
  },
  "/work": {
    name: "Work",
    icon: <Briefcase />,
  },
  "/projects": {
    name: "Projects",
    icon: <Hammer />,
  },
  "/books": {
    name: "Books",
    icon: <LibraryBig />,
  },
  "/blogroll": {
    name: "Blogroll",
    icon: <Newspaper />,
  },
  "/uses": {
    name: "Uses",
    icon: <Laptop />,
  },
  "/about": {
    name: "About",
    icon: <User />,
  },
};

export function Navbar() {
  const pathname = usePathname();

  return (
    <aside className="tracking-tight bg-white">
      <nav className="flex flex-col space-y-0.5 md:space-y-1">
        {Object.entries(navItems).map(([path, { name, icon }]) => {
          const isActive = pathname === path;
          return (
            <Link
              key={path}
              href={path}
              className={`group border-2 border-transparent w-12 md:w-26 text-center rounded-sm hover:border-black flex items-center relative py-0.5 md:py-1 px-1.5 md:px-2 text-xs md:text-base ${
                isActive ? "font-bold" : "font-normal"
              }`}
            >
              {isActive && (
                <span className="size-1 md:size-1.5 mr-1 md:mr-1.5 rounded-full bg-black" />
              )}
              <span className="md:hidden">{icon}</span>
              <span className="hidden md:inline">{name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export { navItems };
