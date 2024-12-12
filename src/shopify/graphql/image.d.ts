export interface Image {
    id: string;
    url: string;
    width: number | null;
    height: number | null;
    altText: string | null;
}

export interface ProductImage extends Image {
    product_id: string;
}

export interface ImageEdge {
    node: Image
}



