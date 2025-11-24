import type {Keyword} from "../keyword.d.ts";

export interface KeywordsState {
    list: Keyword[],
    loading: boolean;
    loaded: boolean;
}
