"use client"
import Image from 'next/image'
import { Navigation } from "./components/nav";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react'
import BlurText from './components/BlurText';


export default function Home() {

  const [coverImageNumber, setCoverImageNumber] = useState(1);

  return (
    <>
    <main className="flex min-h-screen w-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between lg:flex">
        <Navigation/>

       </div>
        <div className="fixed flex z-50 text-4xl items-center justify-between p-24 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

						<Link
							href="/architectural"
							className="flex m-4 link link-underline link-underline-black text-white"
						>
							<BlurText text="Architectural"/>
						</Link>
						<Link
							href="/commercial"
							className="flex m-4 link link-underline link-underline-black text-white"
						>
							<BlurText text="Commercial" />
						</Link>
            <Link
							href="/event"
							className="flex m-4 link link-underline link-underline-black text-white"
						>
							<BlurText text="Event" />
						</Link>
					</div>
          <Image 
							objectFit="cover"
              layout="fill"
              src={`/byronProfile${[coverImageNumber]}.webp`} 
              // width="1920" 
              // height="965"
							onClick={() => setCoverImageNumber(coverImageNumber < 3? coverImageNumber + 1 : 1)}
							className={`z-0 absolute top-0 transition-opacity duration-500 ${""}`}
							alt={"cover photo"} />
              </main>
</>
     
  )
}
