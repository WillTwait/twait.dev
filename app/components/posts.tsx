import { formatDate, getBlogPosts } from "app/thoughts/utils";
import Link from "next/link";
import ExternalLink from "./external-link";
import Frame from "./frame";

function BulletBorder({ index, length }: { index: number; length: number }) {
  return (
    <div className="flex flex-col items-center">
      <div className="size-2 rounded-full border border-black bg-white shrink-0 mt-2" />
      {index !== length - 1 && (
        <div className="h-[calc(100%+0.5rem)] border-l-1 -mb-6" />
      )}
    </div>
  );
}

export function BlogPosts() {
  const allBlogs = getBlogPosts();

  const posts = allBlogs
    .filter((post) => post.metadata.type === "post")
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    );

  const links = allBlogs
    .filter((post) => post.metadata.type === "links")
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl border-2 border-black px-1 rounded-sm w-fit">
        Ideas and opinions.
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <Frame title="Posts" titleSize="sm">
            <div className="p-4 flex flex-col gap-4">
              <p className="text-neutral-600">Ideas I'm thinking about.</p>
              <ul className="space-y-4">
                {posts.map((post, index) => (
                  <li key={post.slug} className="flex gap-2">
                    <BulletBorder index={index} length={posts.length} />
                    <Link
                      href={`/thoughts/${post.slug}`}
                      className="flex-1 group"
                    >
                      <p className="text-base group-hover:text-neutral-800">
                        {post.metadata.title}{" "}
                        <span className="text-sm text-neutral-500">
                          {`(${formatDate(post.metadata.publishedAt)})`}
                        </span>
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Frame>
        </div>

        <div className="flex-1">
          <Frame title="Links" titleSize="sm">
            <div className="p-4 flex flex-col gap-4">
              <p className="text-neutral-600">
                Link posts are an{" "}
                <ExternalLink href="https://patrickcollison.com/links">
                  artifact of a simpler web
                </ExternalLink>
                , but I think it's still fun and useful to document what you've
                come across that's interesting.
              </p>
              <ul className="space-y-4">
                {links.map((post, index) => (
                  <li key={post.slug} className="flex gap-2">
                    <BulletBorder index={index} length={links.length} />
                    <Link
                      href={`/thoughts/${post.slug}`}
                      className="flex-1 group"
                    >
                      <p className="text-base ">{post.metadata.title}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Frame>
        </div>
      </div>
    </div>
  );
}
