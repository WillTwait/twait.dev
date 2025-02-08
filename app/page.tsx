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
    <span className="bg-[#1F1F1F] text-white p-1 inline-flex items-center rounded-sm gap-1">
      <LTrainIcon />
      <span className="font-bold">{name}</span>
    </span>
  );
}

export default function Page() {
  return (
    <section className="flex flex-col gap-6">
      <span className="text-3xl">
        Hi, I'm{" "}
        <strong className="border-2 border-black px-1 rounded-sm">
          Will Twait
        </strong>
        <span className="text-2xl">. Welcome to my website.</span>
      </span>

      <div className="text-xl flex flex-col gap-4">
        <p>
          I am a software engineer living in{" "}
          <ExternalLink href="https://www.google.com/maps/place/Msgr.+McGolrick+Park/@40.7243563,-73.9434185,21z/data=!4m6!3m5!1s0x89c2594ec9f8eca9:0x502c61b7a733459e!8m2!3d40.7244763!4d-73.9433497!16zL20vMDdrY2Ji?entry=ttu&g_ep=EgoyMDI1MDIwNS4wIKXMDSoASAFQAw%3D%3D">
            Brooklyn, NY
          </ExternalLink>
          .
        </p>
        <p>
          I do <Link href="/work">work</Link> professionally, and{" "}
          <Link href="/projects">projects</Link> recreationally.
        </p>

        <p>
          You can connect with me virtually via{" "}
          <ExternalLink href="mailto:will.twait@gmail.com">email</ExternalLink>,{" "}
          <ExternalLink href="https://x.com/willtwait">twitter</ExternalLink>,{" "}
          <ExternalLink href="https://www.linkedin.com/in/william-twait/">
            linkedin
          </ExternalLink>
          .
        </p>

        <p>
          Or in person on the train somewhere between{" "}
          <SubwayStop name="Bedford Avenue" /> and{" "}
          <SubwayStop name="14 St-Union Square" />.
        </p>
      </div>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  );
}
