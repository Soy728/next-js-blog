import Link from "next/link";
import { formatDate } from "app/post/utils";

export function BlogPosts({ posts }) {
  return (
    <div className="grid gap-4">
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="p-3 rounded-md hover:bg-gray-100/[.9] dark:hover:bg-gray-700/[.2]"
            href={`/post/${post.slug}`}
          >
            <div className="w-full grid gap-2">
              <div className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </div>

              <div className="text-sm text-neutral-600 dark:text-neutral-100 tracking-tight">
                {post.metadata.summary}
              </div>

              <div className="text-sm text-neutral-400 dark:text-neutral-400">
                {formatDate(post.metadata.publishedAt, false)}
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
