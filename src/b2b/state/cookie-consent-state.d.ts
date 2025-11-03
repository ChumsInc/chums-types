import {CookieConsentInfo, CookieConsentRecord} from "../../cookie-consent.js";

export interface CookieConsentState {
    status: 'idle' | 'loading' | 'saving' | 'rejected';
    record: CookieConsentRecord | null;
    dismissed: boolean;
    details: CookieConsentInfo | null;
}
