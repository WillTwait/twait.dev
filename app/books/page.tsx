import ExternalLink from "app/components/external-link";

export default function BooksPage() {
  return (
    <section className="flex flex-col gap-6">
      <p>
        Haven't made this section yet, but you can check{" "}
        <ExternalLink href="https://willtwait.notion.site/d9374c71cc974c7ead78b67656c48f44?v=5532ae4788024dd99f61efae313d0a40&pvs=4">
          my Notion
        </ExternalLink>{" "}
        if you're interested.
      </p>
    </section>
  );
}
