import { baseUrl } from "app/sitemap";
import { getBlogPosts } from "app/thoughts/utils";

export async function GET() {
  const allBlogs = getBlogPosts();

  const itemsXml = allBlogs
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .map(
      (post) =>
        `<item>
          <title>${post.metadata.title}</title>
          <link>${baseUrl}/thoughts/${post.slug}</link>
          <description>${post.metadata.summary || ""}</description>
          <pubDate>${new Date(
            post.metadata.publishedAt
          ).toUTCString()}</pubDate>
          <guid>${baseUrl}/thoughts/${post.slug}</guid>
        </item>`
    )
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <title>Will Twait's Website</title>
        <link>${baseUrl}</link>
        <description>Thoughts and ideas from Will</description>
        <language>en-us</language>
        <atom:link href="${baseUrl}/rss" rel="self" type="application/rss+xml" />
        ${itemsXml}
    </channel>
  </rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control":
        "max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
