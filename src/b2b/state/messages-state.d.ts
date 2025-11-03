import type {Message} from "../ui-features";

export interface MessagesState {
    list: Message[],
    loading: boolean;
    loaded: number;
}
