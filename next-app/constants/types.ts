export type HeaderItem = {
    text: string
    link: string
}

export type Sale = {
    percent: number,
    discountedPrice: number
}

export type Product = {
    id: number,
    name: string,
    price: number,
    sale: Sale | null,
    isAvialable: boolean,
    img: string,
    avialableSizes: number[]
}

export type Notification = {
    message: string;
    duration: number;
    success: boolean;
}

export type User = {
    id?: number,
    name?: string,
    surname?: string,
    email?: string,
}