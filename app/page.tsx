"use client";

import Link from "next/link";
import ExternalLink from "./components/external-link";
import { SubwayStop } from "./components/mta";
import Recents from "./components/recents";

export default function Page() {
  const recentItems = [
    {
      id: "google-reviews",
      text: "Added Google Reviews post",
      date: "Feb 21",
      href: "/thoughts/google-reviews",
    },
    {
      id: "favicon",
      text: "Updated site favicon 🦬",
      date: "Feb 21",
    },
    {
      id: "links",
      text: "Added Links (#1) post",
      date: "Feb 18",
      href: "/thoughts/links-2025-02-18",
    },
    {
      id: "uses",
      text: "Added Uses page",
      date: "Feb 17",
      href: "/uses",
    },
    {
      id: "site",
      text: "Created site",
      date: "Feb 17",
      href: "https://www.twait.dev/",
    },
  ];

  return (
    <section className="flex flex-col gap-6 tracking-tight leading-snug">
      <span className="text-2xl md:text-3xl">
        Hi, I'm{" "}
        <strong className="border-2 border-black px-1 rounded-sm">
          Will Twait
        </strong>
        .
      </span>

      <div className="text-base md:text-xl flex flex-col gap-2">
        <p>
          I am a software engineer living in{" "}
          <ExternalLink href="https://www.google.com/maps/place/Msgr.+McGolrick+Park/@40.7243563,-73.9434185,21z/data=!4m6!3m5!1s0x89c2594ec9f8eca9:0x502c61b7a733459e!8m2!3d40.7244763!4d-73.9433497!16zL20vMDdrY2Ji?entry=ttu&g_ep=EgoyMDI1MDIwNS4wIKXMDSoASAFQAw%3D%3D">
            Brooklyn, NY
          </ExternalLink>
          {";"}
        </p>
        <p>
          who does <Link href="/work">work</Link> professionally, and{" "}
          <Link href="/projects">projects</Link> recreationally{";"}
        </p>
        <p>
          and can be reached virtually via{" "}
          <ExternalLink href="https://x.com/willtwait">Twitter</ExternalLink>
          {", "}
          <ExternalLink href="https://www.linkedin.com/in/william-twait/">
            LinkedIn
          </ExternalLink>
          {", "}
          <ExternalLink href="https://github.com/willtwait">
            GitHub
          </ExternalLink>
          {" and "}
          <ExternalLink href="mailto:will.twait@gmail.com">email</ExternalLink>
          {";"}
        </p>
        <p>
          or can be found in-person going between{" "}
          <span className="my-[1px] md:my-0 inline-block">
            <SubwayStop name="Bedford Avenue" />
          </span>{" "}
          and{" "}
          <span className="my-[1px] md:my-0 inline-block">
            <SubwayStop name="14 St-Union Square" />
          </span>
          .
        </p>
      </div>

      <div className="mt-4 md:w-[50%] sm:w-full">
        <Recents items={recentItems} />
      </div>
    </section>
  );
}
