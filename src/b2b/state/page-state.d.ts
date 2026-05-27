import type {ContentPage} from "../ui-features.d.ts";

export interface PageState {
    keyword: string | null;
    content: ContentPage | null;
}
