import type {Keyword} from "../keyword";
import type {ContentPage} from "../ui-features";

export interface PageState {
    list: Keyword[],
    keyword: string | null;
    status: 'idle' | 'loading';
    loaded: boolean;
    content: ContentPage | null;
    html: string | null;
}
