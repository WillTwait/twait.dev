import ExternalLink from "app/components/external-link";

export default function WorkPage() {
  return (
    <section className="flex flex-col gap-6">
      <p>
        Haven't made this section yet, but you can check{" "}
        <ExternalLink href="https://www.linkedin.com/in/william-twait/">
          LinkedIn
        </ExternalLink>{" "}
        if you're interested.
      </p>
    </section>
  );
}
