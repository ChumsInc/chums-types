import type {AppState} from "./app-state.d.ts";
import type {BannersState} from "./banners-state.d.ts";
import type {CategoryState} from "./category-state.d.ts";
import type {CookieConsentState} from "./cookie-consent-state.d.ts";
import type {KeywordsState} from "./keywords-state.d.ts";
import type {MenuState} from "./menu-state.d.ts";
import type {MessagesState} from "./messages-state.d.ts";
import type {PageState} from "./page-state.d.ts";
import type {ProductsState} from "./products-state.d.ts";
import type {VersionState} from "./version-state.d.ts";

export interface PreloadedState {
    app?: AppState;
    banners?: BannersState;
    category?: CategoryState;
    cookieConsent?: CookieConsentState;
    keywords?: KeywordsState;
    menu?: MenuState;
    messages?: MessagesState;
    page?: PageState;
    products?: ProductsState;
    version?: VersionState;
}
