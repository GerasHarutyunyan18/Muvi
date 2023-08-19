import { ButtonProps } from "./types";
import Image from "next/image";

export default function Button({ text, icon, iconHeight, iconWidth, className }: ButtonProps) {
    return <button className={className}>
        {text}
        {icon ? <Image src={icon} width={iconWidth} height={iconHeight} alt='' /> : ''}
    </button>
}