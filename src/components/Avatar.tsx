import Image from "next/image";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Avatars(props: HTMLAttributes<HTMLDivElement>) {
    const { className, children, ...otherProps } = props;
    return (
        <div
            className={twMerge(
                "size-20 rounded-full overflow-hidden border-4 border-blue-500 p-1 bg-neutral-900",
                className
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
}
