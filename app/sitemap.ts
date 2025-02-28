import { getBlogPosts } from 'app/post/utils';
import { MetadataRoute } from 'next';

export const baseUrl = 'https://soy728-blog.vercel.app';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	let blogs = getBlogPosts().map((post) => ({
		url: `${baseUrl}/post/${post.slug}`,
		lastModified: post.metadata.publishedAt,
	}));

	let routes = ['', '/post'].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}));

	return [...routes, ...blogs];
}
