"use client";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from "react";
import BlurText from './BlurText';

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	// useEffect(() => {
	// 	if (!ref.current) return;
	// 	const observer = new IntersectionObserver(([entry]) =>
	// 		setIntersecting(entry.isIntersecting),
	// 	);

	// 	observer.observe(ref.current);
	// 	return () => observer.disconnect();
	// }, []);

	return (
		<header className="fixed inset-x-0 top-0 z-30">
				<div className="font-display container flex flex-row-reverse items-center justify-between text-lg p-12 mx-auto text-zinc-100">
					<div className="flex justify-between gap-8">
					<Link
							href="#rates"
							className= "font-['UbuntuLight'] link link-underline link-underline-black text-white drop-shadow-md"
						>
							<BlurText text="rates" />
						</Link>
					<Link
							href="#about"
							className= "font-['UbuntuLight'] link link-underline link-underline-black text-white drop-shadow-md"
						>
							<BlurText text="about" />
						</Link>
						<Link
							href="#contact"
							className= "font-['UbuntuLight'] link link-underline link-underline-black text-white drop-shadow-md"
						>
							<BlurText text="contact" />
						</Link>
					</div>

					<Link
						href="#byron"
						className="flex font-display text-xl link link-underline link-underline-black text-white drop-shadow-md"
					>
						<BlurText text="bp" />
					{/* &nbsp;<span className="font-['UbuntuLightItalic']">photography</span> */}
						{/* <Home className="w-6 h-6" /> */}
					</Link>
				</div>
		</header>
	);
};
