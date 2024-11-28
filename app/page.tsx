import LogoBanner from "@/components/logo-banner";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div
			className="w-screen h-screen overflow-hidden"
		>
			<Image
				src="/camel-sky.jpg"
				alt=""
				fill
				className="object-cover absolute pointer-events-none select-none -z-50"
			/>
			<div
				className="fixed z-50 bottom-0 right-0 mr-12 mb-8 w-[26rem] h-fit px-8 py-2 bg-white border-4 border-black text-xl text-justify md:block hidden"
			>
				<p className="tracking-[0.09rem]">{"SURGEON GENERAL'S WARNING: Smoking"}</p>
				<p className="tracking-[0.105rem]">By Pregnant Women May Result in Fetal</p>
				<p className="tracking-wide">Injury, Premature Birth, And Low Birth Weight.</p>
			</div>
			<div
				className="grid w-full h-full"
			>
				<LogoBanner
					className="max-w-[48rem] w-full mx-auto px-4 pt-16 md:pb-16 pb-8"
				/>
				<div
					className="md:-mb-4 md:w-[16rem] md:h-[16rem] w-[11rem] h-[11rem] rounded-full md:border-[6px] border-[4px] bg-white border-[#974123] flex justify-center items-center mx-auto"
				>
					<div
						className="absolute md:w-[14.5rem] md:h-[14.5rem] w-[10rem] h-[10rem] rounded-full md:border-[4px] border-[2px] border-[#EBD780] flex flex-col items-center justify-center md:space-y-3"
					>
						<div
							className="flex flex-row items-center"
						>
							<div
								className="relative md:w-[1.75rem] w-[1rem] md:h-[1.75rem] h-[1rem]"
							>
								<Image
									src="/camel-icon.png"
									alt=""
									fill
									className="pointer-events-none select-none"
								/>
							</div>
							<Button
								variant="link"
								className="md:text-2xl text-lg font-bold px-1"
							>
								<Link
									href=""
								>
									Twitter
								</Link>
							</Button>
							<div
								className="relative md:w-[1.75rem] w-[1rem] md:h-[1.75rem] h-[1rem]"
							>
								<Image
									src="/camel-icon.png"
									alt=""
									fill
									className="pointer-events-none select-none"
								/>
							</div>
						</div>
						<div
							className="flex flex-row items-center"
						>
							<div
								className="relative md:w-[1.75rem] w-[1rem] md:h-[1.75rem] h-[1rem]"
							>
								<Image
									src="/camel-icon.png"
									alt=""
									fill
									className="pointer-events-none select-none"
								/>
							</div>
							<Button
								variant="link"
								className="md:text-2xl text-lg font-bold px-1"
							>
								<Link
									href=""
								>
									Telegram
								</Link>
							</Button>
							<div
								className="relative md:w-[1.75rem] w-[1rem] md:h-[1.75rem] h-[1rem]"
							>
								<Image
									src="/camel-icon.png"
									alt=""
									fill
									className="pointer-events-none select-none"
								/>
							</div>
						</div>
						<div
							className="flex flex-row items-center"
						>
							<div
								className="relative md:w-[1.75rem] w-[1rem] md:h-[1.75rem] h-[1rem]"
							>
								<Image
									src="/camel-icon.png"
									alt=""
									fill
									className="pointer-events-none select-none"
								/>
							</div>
							<Button
								variant="link"
								className="md:text-2xl text-lg font-bold px-1"
							>
								<Link
									href="https://dexscreener.com/solana/f21m1tnwcgxz4zgyb2nyhusvmwnhv5cnapqfruv71s9k"
								>
									DexScreener
								</Link>
							</Button>
							<div
								className="relative md:w-[1.75rem] w-[1rem] md:h-[1.75rem] h-[1rem]"
							>
								<Image
									src="/camel-icon.png"
									alt=""
									fill
									className="pointer-events-none select-none"
								/>
							</div>
						</div>
					</div>
				</div>
				<div
					className="flex items-end"
				>
					<AspectRatio
						ratio={1106 / 763}
					>
						<Image
							src="/camel-joe-car.png"
							alt=""
							fill
							className="pointer-events-none select-none object-cover object-top"
						/>
					</AspectRatio>
				</div>
			</div>
		</div>
	);
}

/*
<div
	className="flex flex-col items-center space-y-6 mt-28"
>
	<CamelButton
		label="DexScreener"
		url=""
	/>
	<CamelButton
		label="Twitter"
		url=""
	/>
	<CamelButton
		label="Telegram"
		url=""
	/>
</div>
*/
