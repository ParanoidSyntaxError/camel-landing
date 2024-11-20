"use client"

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface CamelButtonProps {
    label: string;
    url: string;
}

export default function CamelButton({
    label,
    url
}: CamelButtonProps) {
    const [hovering, setHovering] = useState<boolean>(false);

    return (
        <div
            className="flex flex-row items-center space-x-4"
        >
            <Image
                src="/camel-pack-spinning.gif"
                alt=""
                width={48}
                height={48}
                className={cn(
                    "pointer-events-none select-none",
                    hovering ? "" : "invisible"
                )}
            />
            <Link
                href={url}
            >
                <Button
                    variant="ghost"
                    className="p-0 w-fit h-fit hover:bg-transparent text-white hover:text-white text-4xl font-bold"
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                >
                    {label}
                </Button>
            </Link>
            <Image
                src="/camel-pack-spinning.gif"
                alt=""
                width={48}
                height={48}
                className={cn(
                    "pointer-events-none select-none",
                    hovering ? "" : "invisible"
                )}
            />
        </div>
    );
}
