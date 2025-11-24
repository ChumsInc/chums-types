import type {Menu} from "../ui-features.d.ts";

export interface MenuState {
    productMenu: Menu | null;
    productMenuStatus: 'idle' | 'loading' | 'rejected';
    resourcesMenu: Menu | null;
    resourcesMenuStatus: 'idle' | 'loading' | 'rejected';
    isOpen: boolean;
}
