import Link from "next/link";
import ExternalLink from "./external-link";
import Frame from "./frame";

interface RecentItem {
  text: string;
  date: string;
  href?: string;
  id: string;
}

interface RecentsProps {
  items: RecentItem[];
  className?: string;
}

export default function Recents({ items, className = "" }: RecentsProps) {
  return (
    <Frame title="Recents" className={className} titleSize="sm">
      <ul className="p-4 space-y-2 text-sm md:text-base">
        {items.map((item, index) => (
          <li key={item.id} className="flex gap-2">
            {/* Bullet point with separator line */}
            <div className="flex flex-col items-center">
              <div className="size-2 rounded-full border border-black bg-white shrink-0 mt-2" />
              {index !== items.length - 1 && (
                <div className="h-[calc(100%+1rem)] border-l-1 -mb-6" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 flex justify-between gap-4 min-w-0">
              <span className="truncate">
                {item.href ? (
                  item.href.startsWith("http") ? (
                    <ExternalLink href={item.href}>{item.text}</ExternalLink>
                  ) : (
                    <Link href={item.href}>{item.text}</Link>
                  )
                ) : (
                  item.text
                )}
              </span>
              <span className="text-neutral-500 whitespace-nowrap">
                {item.date}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Frame>
  );
}
