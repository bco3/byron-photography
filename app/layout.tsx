import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LocalFont from "next/font/local";


export const metadata: Metadata = {
	title: {
		default: "byron photography",
		template: "%s | byron-photography.vercel.app/favicon.png",
	},
	description: "Photographer",
	openGraph: {
		title: "byron photography",
		description:
			"Photographer",
		url: "https://byron-photography.vercel.app",
		siteName: "byron-photography.vercel.app",
		images: [
			{
				url: "https://byron-photography.vercel.app/og.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "byron",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});
const ubuntu = LocalFont({
	src: "../public/fonts/Ubuntu-Medium.ttf",
});
const ubuntuReg = LocalFont({
	src: "../public/fonts/Ubuntu-Regular.ttf",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={[inter.variable, ubuntu, ubuntuReg].join(" ")}>
      <body className={ubuntu.className}>{children}</body>
    </html>
  )
}
