import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export default function LogoBanner({
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <div
            {...props}
        >
            <AspectRatio
                ratio={2500 / 642}
            >
                <Image
                    src="/camel-logo-blue.png"
                    alt=""
                    fill
                    className="object-cover pointer-events-none select-none"
                />
            </AspectRatio>
            <div
                className="w-1/3 mx-auto"
            >
                <AspectRatio
                    ratio={1906 / 368}
                >
                    <Image
                        src="/tagline.png"
                        alt=""
                        fill
                        className="object-cover pointer-events-none select-none"
                    />
                </AspectRatio>
            </div>
        </div>
    );
}
