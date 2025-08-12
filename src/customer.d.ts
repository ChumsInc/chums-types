export interface CustomerValidationResponse {
    billTo: boolean;
    shipTo: string[];
}

export interface ARDivision {
    ARDivisionNo: string;
    ARDivisionDesc: string;
}

export interface CustomerSearchResult {
    ARDivisionNo: string;
    CustomerNo: string;
    CustomerName: string;
}

export interface CountryCodeRecord {
    CountryCode: string;
    CountryName: string|null;
    ISOCountryCode: string|null;
    StateCodeRequired: 'Y'|'N'
    PhoneCode: string|null;
}

export interface StateCodeRecord {
    StateCode: string;
    StateName: string|null;
    CountryCode: string|null;
    GeoCode: string|null;
}

export interface CustomerType {
    CustomerType: string;
    Description: string|null;
}

export interface CustomerShipToSearchRecord {
    ARDivisionNo: string;
    CustomerNo: string;
    ShipToCode: string;
    ShipToName: string;
    ShipToAddress1: string|null;
    ShipToAddress2: string|null;
    ShipToAddress3: string|null;
    ShipToCity: string|null;
    ShipToState: string|null;
    ShipToZipCode: string|null;
    ShipToCountryCode: string|null;
    WarehouseCode: string|null;
    EmailAddress: string|null;
    TelephoneNo: string|null;
    Reseller: 'Y'|'N'|boolean;
}
