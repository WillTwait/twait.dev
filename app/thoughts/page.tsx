import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Thoughts",
  description: "Ideas and opinions.",
};

export default function Page() {
  return (
    <section className="flex flex-col gap-6 mt-4">
      <BlogPosts />
    </section>
  );
}
