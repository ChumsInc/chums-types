import {Image} from "./image.js";
import {Connection} from "./generics.js";


export interface Media {
    id: string;
    alt: string;
    mediaContentType: string;
    preview: MediaPreview;
    status: MediaStatus;
    position?: number;
}

export interface MediaPreview {
    image: Image;
    status: MediaStatus;
}

export type MediaStatus = 'FAILED' | 'PROCESSING' | 'READY' | 'UPLOADED';

export type MediaConnection = Connection<Media>;


