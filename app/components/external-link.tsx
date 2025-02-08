import { Mail } from "lucide-react";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function ExternalLink({ href, children }: ExternalLinkProps) {
  const isMailTo = href.startsWith("mailto:");

  if (isMailTo) {
    return (
      <a href={href} className="inline-flex items-center gap-1">
        <Mail className="size-3" />
        {children}
      </a>
    );
  }

  // Extract the domain from the href
  const domain = new URL(href).hostname.replace("www.", "");

  return (
    <a href={href} className="inline-flex items-center gap-1">
      <img
        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=16`}
        alt={`${domain} favicon`}
        className="size-3 rounded-sm inline-block"
      />
      {children}
    </a>
  );
}
