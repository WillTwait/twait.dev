"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
  "/": {
    name: "Home",
  },
  "/thoughts": {
    name: "Thoughts",
  },
  "/work": {
    name: "Work",
  },
  "/projects": {
    name: "Projects",
  },
  "/books": {
    name: "Books",
  },
  "/blogroll": {
    name: "Blogroll",
  },
  "/uses": {
    name: "Uses",
  },
  "/about": {
    name: "About",
  },
};

export function Navbar() {
  const pathname = usePathname();

  return (
    <aside className="tracking-tight bg-white">
      <nav className="flex flex-col space-y-0.5 md:space-y-1">
        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = pathname === path;
          return (
            <Link
              key={path}
              href={path}
              className={`group border-2 border-transparent w-20 md:w-26 text-center rounded-sm hover:border-black  flex items-center relative py-0.5 md:py-1 px-1.5 md:px-2 text-xs md:text-base ${
                isActive ? "font-bold" : "font-normal"
              }`}
            >
              {isActive && (
                <span className="size-1 md:size-1.5 mr-1 md:mr-1.5 rounded-full bg-black" />
              )}
              {name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

// Export the navItems to use in layout for title
export { navItems };
