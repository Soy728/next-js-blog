import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-3xl pb-10 tracking-tighter">Posts</h1>
      <BlogPosts />
    </section>
  );
}
