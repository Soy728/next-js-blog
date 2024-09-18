import { BlogPosts } from "app/components/posts";
import { getBlogPosts } from "./utils";

export default function Page() {
  const allPosts = getBlogPosts().sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <section>
      <h1 className="font-semibold text-3xl pb-10 tracking-tighter">Posts</h1>
      <BlogPosts posts={allPosts} />
    </section>
  );
}
