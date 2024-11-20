import CamelButton from "@/components/camel-button";
import LogoBanner from "@/components/logo-banner";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<Image
				src="/camel-sky.jpg"
				alt=""
				fill
				className="object-cover absolute pointer-events-none select-none -z-50"
			/>
			<Image
				src="/camel-joe.png"
				alt=""
				width={512}
				height={512}
				className="absolute bottom-0 pointer-events-none select-none md:block hidden"
			/>
			<div
				className="absolute bottom-0 right-0 mr-12 mb-8 w-[26rem] h-fit px-8 py-2 bg-white border-4 border-black text-xl text-justify md:block hidden"
			>
				<p className="tracking-[0.09rem]">{"SURGEON GENERAL'S WARNING: Smoking"}</p>
				<p className="tracking-[0.105rem]">By Pregnant Women May Result in Fetal</p>
				<p className="tracking-wide">Injury, Premature Birth, And Low Birth Weight.</p>
			</div>
			<LogoBanner
				className="max-w-[64rem] px-8 mx-auto mt-24"
			/>
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
		</div>
	);
}
