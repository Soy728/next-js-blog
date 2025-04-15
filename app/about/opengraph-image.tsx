import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'About Acme';
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 128,
					background: 'white',
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			/>
		),
		{
			...size,
		}
	);
}
