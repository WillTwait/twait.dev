'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { Navbar, navItems } from './nav';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const currentPage = navItems[pathname]?.name || 'Not Found';

  return (
    <div className="min-h-screen p-4 md:p-8 flex items-center justify-center">
      <div className="relative w-full max-w-5xl">
        <div className="grid grid-cols-[1fr_minmax(auto,_70%)_1fr] items-start">
          {/* Future Rabbit hole list */}
          <div className="pt-8">
            <div className="h-full" />
          </div>

          {/* Main Content Frame */}
          <div className="h-[70vh] relative">
            {/* Current Page Title */}
            <h1 className="absolute -top-12 left-6 text-2xl font-bold bg-white p-2 translate-y-1/2 z-10 hover:bg-transparent">
              {currentPage}
            </h1>
            <div className="rounded-xl border-2 border-black p-8 h-full">
              {children}
            </div>
          </div>

          {/* Right Navigation */}
          <div className="pt-6 flex justify-end relative">
            <div className="absolute -left-4">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
