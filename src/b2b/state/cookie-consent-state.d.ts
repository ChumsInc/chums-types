import type {CookieConsentInfo, CookieConsentRecord} from "../../cookie-consent.d.ts";

export interface CookieConsentState {
    status: 'idle' | 'loading' | 'saving' | 'rejected';
    record: CookieConsentRecord | null;
    dismissed: boolean;
    details: CookieConsentInfo | null;
}
