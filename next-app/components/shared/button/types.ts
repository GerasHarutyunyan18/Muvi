import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ButtonProps {
    text?: string,
    icon?: string | StaticImport;
    iconWidth?: number;
    iconHeight?: number;
    className?: string
}