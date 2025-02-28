import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { highlight } from "sugar-high";
import {
  default as CaptionedImageComponent,
  type CaptionedImageProps,
} from "./captioned-image";
import ExternalLink from "./external-link";
import ImageRow from "./image-row";
import WikiLink from "./wiki-link";

function Table({ data }) {
  const headers = data.headers.map((header, index) => (
    <th key={index.toString()}>{header}</th>
  ));
  const rows = data.rows.map((row, index) => (
    <tr key={index.toString()}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex.toString()}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props) {
  const href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <ExternalLink href={href} {...props} />;
}

// Define the WikiLink props interface
interface WikiLinkProps {
  children: React.ReactNode;
  validSlugs?: string[];
}

// Remove the inline WikiLink component since we're now importing it

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Code({ children, ...props }) {
  const codeHTML = highlight(children);
  // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function CaptionedImage(props: CaptionedImageProps) {
  return <CaptionedImageComponent {...props} />;
}

function createHeading(level) {
  return function Heading({ children }) {
    // Check if children is a string (non-link content)
    if (typeof children === "string") {
      const slug = slugify(children);
      return React.createElement(
        `h${level}`,
        { id: slug },
        [
          React.createElement("a", {
            href: `#${slug}`,
            key: `link-${slug}`,
            className: "anchor",
          }),
        ],
        children
      );
    }

    // If children is not a string (likely a link), just render it
    return React.createElement(`h${level}`, {}, children);
  };
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  CaptionedImage,
  ImageRow,
  a: CustomLink,
  code: Code,
  Table,
  WikiLink,
};

interface CustomMDXProps {
  source: string;
  validSlugs?: string[];
  components?: Record<string, React.ComponentType<unknown>>;
  [key: string]: unknown;
}

export function CustomMDX(props: CustomMDXProps) {
  // Get the list of valid slugs from props or default to empty array
  const validSlugs = props.validSlugs || [];

  // Process content to transform [[text]] into <WikiLink>text</WikiLink>
  let content: string = props.source || "";

  if (typeof content === "string") {
    // First, identify code blocks and protect them from processing
    const codeBlocks: string[] = [];
    let codeBlockCounter = 0;

    // Replace multi-line code blocks with placeholders
    content = content.replace(/```[\s\S]*?```/g, (match) => {
      const placeholder = `__CODE_BLOCK_${codeBlockCounter}__`;
      codeBlocks[codeBlockCounter] = match;
      codeBlockCounter++;
      return placeholder;
    });

    // Replace inline code blocks with placeholders
    content = content.replace(/`([^`]+)`/g, (match) => {
      const placeholder = `__CODE_BLOCK_${codeBlockCounter}__`;
      codeBlocks[codeBlockCounter] = match;
      codeBlockCounter++;
      return placeholder;
    });

    // Replace [[text]] with <WikiLink>text</WikiLink>
    content = content.replace(/\[\[(.*?)\]\]/g, (match, text) => {
      // We can't pass the validSlugs array directly in the string template
      // Instead, we'll just use the WikiLink component with the text
      return `<WikiLink>${text}</WikiLink>`;
    });

    // Restore code blocks
    for (let i = 0; i < codeBlockCounter; i++) {
      content = content.replace(`__CODE_BLOCK_${i}__`, codeBlocks[i]);
    }
  }

  // Create a new props object with the modified source
  const modifiedProps = {
    ...props,
    source: content,
  };

  return (
    <MDXRemote
      {...modifiedProps}
      components={{
        ...components,
        ...(props.components || {}),
        // biome-ignore lint/suspicious/noExplicitAny: MDXRemote component types are complex
        WikiLink: (wikiProps) => (
          <WikiLink {...wikiProps} validSlugs={validSlugs} />
        ),
      }}
    />
  );
}
