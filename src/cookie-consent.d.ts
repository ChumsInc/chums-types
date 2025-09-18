export type CookieConsentSection = 'functional'|'preferences' | 'analytics' | 'marketing';
export type CookieConsentStatus = 'accepted' | 'partial' | 'declined' | 'pending';

export interface CookieConsentBody {
    accepted: CookieConsentSection[];
    rejected: CookieConsentSection[];
}

export interface CookieConsentChange extends CookieConsentBody {
    timestamp: string;
    url: string;
    method: string;
}

export interface CookieConsentSettings {
    functional: boolean;
    preferences: boolean;
    analytics: boolean;
    marketing: boolean;
}

export interface CookieConsentRecord {
    uuid: string;
    userId: string|number|null;
    ipAddress: string;
    url: string;
    preferences: CookieConsentSettings;
    gpc: boolean;
    changes: CookieConsentChange[];
    status: CookieConsentStatus;
    dateCreated: string;
    dateUpdated: string;
    dateExpires: string;
}
