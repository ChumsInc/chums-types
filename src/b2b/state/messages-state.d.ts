import type {Message} from "../ui-features.d.ts";

export interface MessagesState {
    list: Message[],
    loading: boolean;
    loaded: number;
}
