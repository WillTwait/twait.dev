import type { ReactNode } from "react";

interface ImageRowProps {
  children: ReactNode;
  className?: string;
}

export default function ImageRow({ children, className = "" }: ImageRowProps) {
  return (
    <div
      className={`flex flex-col md:flex-row gap-2 justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
}
