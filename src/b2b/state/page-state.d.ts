import type {Keyword} from "../keyword.d.ts";
import type {ContentPage} from "../ui-features.d.ts";

export interface PageState {
    list: Keyword[],
    keyword: string | null;
    status: 'idle' | 'loading';
    loaded: boolean;
    content: ContentPage | null;
    html: string | null;
}
