import { notFound } from 'next/navigation';
import { CustomMDX } from 'app/components/mdx';
import { formatDate, getBlogPosts } from 'app/post/utils';
import { baseUrl } from 'app/sitemap';

import { Suspense } from 'react';
import ViewCount from 'app/components/view-count';
import Comments from 'app/components/comments';

async function generateStaticParams() {
	let posts = getBlogPosts();

	return posts.map((post) => ({
		slug: post.slug,
	}));
}

export function generateMetadata({ params }) {
	let post = getBlogPosts().find((post) => post.slug === params.slug);
	if (!post) {
		return;
	}

	let { title, publishedAt: publishedTime, summary: description, image } = post.metadata;
	let ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`;
	const imageUrl = `https://soy728-blog.vercel.app/api/og-image?slug=${params.slug}`;
	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'article',
			publishedTime,
			url: `${baseUrl}/post/${post.slug}`,
			images: [
				{
					url: imageUrl,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [imageUrl],
		},
	};
}

export default async function Blog({ params }) {
	let post = getBlogPosts().find((post) => post.slug === params.slug);

	if (!post) {
		notFound();
	}

	return (
		<section>
			<script
				type='application/ld+json'
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'BlogPosting',
						headline: post.metadata.title,
						datePublished: post.metadata.publishedAt,
						dateModified: post.metadata.publishedAt,
						description: post.metadata.summary,
						image: '<generated>',
						url: `${baseUrl}/blog/${post.slug}`,
						author: {
							'@type': 'Person',
							name: 'Soy Blog',
						},
					}),
				}}
			/>
			<h1 className='title font-semibold text-2xl tracking-normal pb-1'>{post.metadata.title}</h1>

			<div className='text-md text-neutral-600 dark:text-neutral-100 tracking-normal'>
				{post.metadata.summary}
			</div>

			<div className='flex full justify-between items-center mt-1 mb-8 text-xs gap-2'>
				<p className='text-neutral-400 dark:text-neutral-400'>
					{formatDate(post.metadata.publishedAt)}
				</p>

				<Suspense>
					<ViewCount slug={post.slug} />
				</Suspense>
			</div>
			<article className='prose'>
				<CustomMDX source={post.content} />
			</article>
			<div className='pt-8'>
				<Comments />
			</div>
		</section>
	);
}
