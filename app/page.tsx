import { BlogPosts } from "app/components/posts";
import { getBlogPosts } from "./post/utils";

export default function Page() {
  const recentPosts = getBlogPosts()
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .slice(0, 3);
  return (
    <section>
      <h1 className="font-semibold text-3xl pb-10 tracking-tighter">
        Soy Blog
      </h1>
      <h6 className="font-semibold text-xl pb-5 tracking-tighter">
        Recent Posts
      </h6>
      <BlogPosts posts={recentPosts} />
    </section>
  );
}
