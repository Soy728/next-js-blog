"use server";
import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export async function incrementalView(slug: string) {
  noStore();
  await sql`
    INSERT INTO views (slug, count)
    VALUES (${slug}, 1)
    ON CONFLICT (slug)
    DO UPDATE SET count = views.count + 1;
    `;
}

export async function getViewsCount(): Promise<
  { slug: string; count: number }[]
> {
  if (!process.env.POSTGRES_URL) {
    return [];
  }
  noStore();
  const { rows } = await sql`
    SELECT slug, count
    FROM views;  
    `;

  return rows.map((r) => ({
    slug: r.slug,
    count: r.count,
  }));
}
