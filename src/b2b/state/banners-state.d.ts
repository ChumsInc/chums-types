import type {Banner} from "../ui-features.d.ts";

export interface BannersState {
    list: Banner[];
    loading: boolean;
    loaded: boolean;
    updated: number;
}
