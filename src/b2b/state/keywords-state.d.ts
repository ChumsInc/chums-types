import type {Keyword} from "../keyword";

export interface KeywordsState {
    list: Keyword[],
    loading: boolean;
    loaded: boolean;
}
