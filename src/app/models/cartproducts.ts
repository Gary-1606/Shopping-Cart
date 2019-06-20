//model for product json

export interface cartProducts {
    index: number;
    isSale: boolean;
    isExclusive: boolean;
    price: string;
    productImage: string;
    productName: string;
    size: Array<string>;
}
