export type CookieConsentSection = 'functional'|'preferences' | 'analytics' | 'marketing';
export type CookieConsentStatus = 'accepted' | 'partial' | 'declined' | 'pending';

export interface CookieConsentChange {
    section: CookieConsentSection[];
    newValue: boolean;
    timestamp: string;
    method: string;
}

export interface CookieConsentSettings {
    functional: boolean;
    preferences: boolean;
    analytics: boolean;
    marketing: boolean;
    changes: CookieConsentChange[];
}

export interface CookieConsentRecord {
    uuid: string;
    userId: number|null;
    ipAddress: string;
    url: string;
    preferences: CookieConsentSettings;
    status: CookieConsentStatus;
    dateCreated: string;
    dateUpdated: string;
}
