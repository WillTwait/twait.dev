import Image from "next/image";
import Link from "next/link";
import Frame from "./frame";

interface ProjectCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export default function ProjectCard({
  icon,
  title,
  description,
  href,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="block group transition-transform hover:scale-[1.01] focus:scale-[1.01]"
      target="_blank"
      style={{ textDecoration: "none" }}
    >
      <Frame title={title} titleSize="md">
        <div className="grid grid-cols-[38.2%_61.8%] h-full">
          {/* Image section - golden ratio (38.2%) */}
          <div className="relative p-4 flex items-center justify-center">
            <div className="relative w-full aspect-square">
              <Image
                src={icon}
                alt={`${title} icon`}
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
          </div>

          {/* Content section - golden ratio complement (61.8%) */}
          <div className="p-4 flex flex-col justify-center">
            <p>{description}</p>
          </div>
        </div>
      </Frame>
    </Link>
  );
}
