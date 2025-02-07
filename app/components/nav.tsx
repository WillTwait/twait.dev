'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = {
  '/': {
    name: 'Home',
  },
  '/thoughts': {
    name: 'Thoughts',
  },
  '/projects': {
    name: 'Projects',
  },
  '/about': {
    name: 'About',
  },
};

export function Navbar() {
  const pathname = usePathname();

  return (
    <aside className="tracking-tight bg-white">
      <div className="lg:sticky lg:top-20">
        <nav className="flex flex-col space-y-1 fade md:relative" id="nav">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = pathname === path;
            return (
              <Link
                key={path}
                href={path}
                className={`group border-2 border-transparent w-26 text-center rounded-sm hover:border-black hover:text-white hover:bg-black flex items-center relative py-1 px-2 text-xs md:text-base ${
                  isActive ? 'font-bold' : 'font-normal'
                }`}
              >
                {isActive && (
                  <span className="size-1.5 mr-1.5 rounded-full bg-black group-hover:bg-white" />
                )}
                {name}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

// Export the navItems to use in layout for title
export { navItems };
