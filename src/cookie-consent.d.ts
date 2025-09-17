export type CookieConsentSection = 'functional'|'preferences' | 'analytics' | 'marketing';

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
    id: string;
    userId: number|null;
    ipAddress: string;
    url: string;
    preferences: CookieConsentSettings;
    status: 'accepted' | 'partial' | 'declined' | 'pending';
    dateCreated: string;
    dateUpdated: string;
}
