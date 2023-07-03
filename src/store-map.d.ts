export interface StoreMapCustomer {
    Company: string;
    ARDivisionNo: string | null;
    CustomerNo: string | null;
    ShipToCode: string | null;
    CustomerName: string;
    AddressLine1: string | null;
    AddressLine2: string | null;
    AddressLine3: string | null;
    City: string;
    State: string;
    ZipCode: string;
    CountryCode: string;
    TelephoneNo: string;
    URLAddress: string | null;
    latitude: number;
    longitude: number;
    distance: number;
    reseller: 'Y' | 'N' | boolean;
    LastInvoice: string;
}
