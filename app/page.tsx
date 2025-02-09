import Link from "next/link";
import ExternalLink from "./components/external-link";

function LTrainIcon() {
  return (
    <span className="inline-flex size-4 p-3 bg-[#8B8E97] text-white rounded-full font-extrabold items-center justify-center">
      L
    </span>
  );
}

function SubwayStop({ name }: { name: string }) {
  return (
    <span className="bg-[#1F1F1F] text-white p-1 inline-flex items-center rounded-sm gap-1 text-xs md:text-sm tracking-normal">
      <LTrainIcon />
      <span className="font-bold border-t-2 decoration-white">{name}</span>
    </span>
  );
}

export default function Page() {
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
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  );
}
