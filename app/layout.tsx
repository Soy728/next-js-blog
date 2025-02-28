import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from './components/footer';
import { baseUrl } from './sitemap';
import { themeEffect } from 'utils/themeEffect';

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	title: {
		default: 'Soy Blog',
		template: '%s | Soy Blog',
	},
	verification: {
		google: 'gVVh5k-72djAGr7x6lgDtK8B5SkAePsEK2btjYMki7Q',
		other: {
			'naver-site-verification': 'ff7f0fbb548d7cbd85abf84d3c8d162ea856348e',
		},
	},
	description: 'Web Frontend',
	openGraph: {
		title: 'Soy Blog',
		description: 'Web Frontend',
		url: baseUrl,
		siteName: 'Soy Blog',
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang='en'
			className={cx(
				'text-black bg-white dark:text-white dark:bg-[#181A20]',
				GeistSans.variable,
				GeistMono.variable
			)}>
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `(${themeEffect.toString()})()`,
					}}
				/>

				<link
					rel='stylesheet'
					as='style'
					href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css'
				/>
			</head>
			<body className='antialiased max-w-3xl mx-4 mt-8 lg:mx-auto'>
				<main className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0'>
					<Navbar />
					{children}
					<Footer />
					<Analytics />
					<SpeedInsights />
				</main>
			</body>
		</html>
	);
}
