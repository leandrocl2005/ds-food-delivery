export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    formatted_uri: string;
}

export type OrderLocationData = {
    latitude: number;
    longitude: number;
    address: string;
}

export type OrderPayload = {
    products: number[];
} & OrderLocationData;