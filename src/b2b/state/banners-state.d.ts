import type {Banner} from "../ui-features";

export interface BannersState {
    list: Banner[];
    loading: boolean;
    loaded: boolean;
    updated: number;
}
