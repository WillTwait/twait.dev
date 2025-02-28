"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";

// Helper function to convert text to slug
function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

interface WikiLinkProps {
  children: ReactNode;
  validSlugs?: string[];
}

export default function WikiLink({ children, validSlugs = [] }: WikiLinkProps) {
  // Check if children is null, undefined, or not a string
  if (!children || typeof children !== "string") return null;

  // Remove the [[ and ]] from the text
  const text = children.replace(/^\[\[|\]\]$/g, "");

  // Convert to slug for the URL
  const slug = slugify(text);

  // Create the path - assuming these are internal links to thoughts
  const href = `/thoughts/${slug}`;

  // Check if the page exists
  const pageExists = validSlugs.includes(slug);

  const handleClick = (e: MouseEvent) => {
    if (!pageExists) {
      e.preventDefault();
    }
  };

  return (
    <Link
      href={pageExists ? href : "#"}
      className={`${
        pageExists
          ? "" // Use default styling from global CSS for existing pages
          : "!decoration-amber-500 !hover:decoration-amber-600 !underline !underline-offset-2 !decoration-[0.1em]"
      } ${!pageExists ? "cursor-not-allowed" : ""}`}
      title={pageExists ? `Go to ${text}` : `Page "${text}" doesn't exist yet`}
      onClick={handleClick}
    >
      {text}
    </Link>
  );
}
