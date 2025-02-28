import { getBlogPosts } from "app/thoughts/utils";
import Recents from "./recents";

interface RecentPostsProps {
  className?: string;
}

export function RecentPosts({ className }: RecentPostsProps) {
  const posts = getBlogPosts();
  const recentPosts = posts
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    )
    .slice(0, 5)
    .map((post) => ({
      id: post.slug,
      text: post.metadata.title,
      date: post.metadata.publishedAt,
      href: `/thoughts/${post.slug}`,
    }));

  return <Recents items={recentPosts} className={className} />;
}
