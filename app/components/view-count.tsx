import { getViewsCount, incrementalView } from "queries/db";

type Props = {
  slug: string;
};

async function ViewCount({ slug }: Props) {
  await incrementalView(slug);
  const views = await getViewsCount();
  const count = views.find((v) => v.slug === slug)?.count || 0;

  return (
    <p className="text-sm text-neutral-600 dark:text-neutral-400">
      {count?.toLocaleString() || "-"} views
    </p>
  );
}

export default ViewCount;
