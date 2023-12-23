import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Image from 'next/image';

const navigation = [
    { name: "Projects", href: "/projects" },
	{ name: "Blogs", href: "/blogs" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={250}
            />
            <div className="flex items-center justify-center animate-title duration-1000">
                {/* Avatar image */}
                <div className="w-32 h-32 rounded-full overflow-hidden mr-4">
                    <Image
                        src="/liangchaowei.jpg"
                        alt="Zhimin's Photo"
                        width={100}
                        height={100}
                        className="rounded-full"
                    />
                </div>
                {/* Header text */}
                <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				Hi, I&apos;m Zhimin
            </h1>
            </div>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm text-zinc-500 ">
                    As an accomplished software engineer with a rich background in crafting innovative solutions, I am currently exploring
                    <br />
                    exciting new job opportunities. I am with a passion for technology and a commitment to delivering high-quality work.
                    <br />
                    If you&apos;re interested, please click {" "}
                    <Link
                        href="/Resume_Zhimin.pdf"
                        target="_blank"
                        className="underline duration-500 hover:text-zinc-300"
                    >
                        here
                    </Link>
                    {" "} to view my resume.
				</h2>
            </div>
		</div>
	);
}
