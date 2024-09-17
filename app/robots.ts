import { baseUrl } from "app/sitemap";
import { MetadataRoute } from "next";

// 크롤러가 어떤 권한으로 어디까지 탐험 할 수 있는지 규칙 문서. 정적.

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
