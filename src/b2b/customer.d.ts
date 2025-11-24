import {YesNo} from "./generic.d.ts";
import {UserAccessType} from "./user.d.ts";

export interface CustomerAddress {
    CustomerName: string;
    AddressLine1: string | null;
    AddressLine2: string | null;
    AddressLine3: string | null;
    City: string | null;
    State: string | null;
    ZipCode: string | null;
    CountryCode: string | null;
}

export type CustomerAddressField = keyof CustomerAddress;

export interface CustomerSalesperson {
    SalespersonDivisionNo: string;
    SalespersonNo: string;
}

export interface Salesperson extends CustomerSalesperson {
    SalespersonName: string;
    active: boolean | 1 | 0;
}

export interface CustomerKey {
    ARDivisionNo: string;
    CustomerNo: string;
    ShipToCode?: string | null;
}

export interface RecentCustomerKey extends CustomerKey {
    ts: number;
}


export interface BasicCustomer extends CustomerKey {
    CustomerName?: string;
}

export interface ParentCustomer {
    ParentDivisionNo?: string|null;
    ParentCustomerNo?: string|null;
    ParentCustomerName?: string|null;
    ParentAddressLine1?: string|null;
    ParentAddressLine2?: string|null;
    ParentAddressLine3?: string|null;
    ParentCity?: string|null;
    ParentState?: string|null;
    ParentZipCode?: string|null;
    ParentCountryCode?: string|null;
}

export interface Customer extends CustomerKey, CustomerAddress, CustomerSalesperson, ParentCustomer {
    CustomerName: string;
    TelephoneNo: string | null;
    EmailAddress: string;
    BillToName?: string;
    ParentDivisionNo?: string|null;
    ParentCustomerNo?: string|null;
}

export interface BillToCustomer extends CustomerKey, Customer, CustomerAddress {
    TelephoneExt: string | null;
    URLAddress: string | null;
    ContactCode: string;
    ShipMethod: string | null;
    TaxSchedule: string | null;
    DefaultPaymentType: string | null;
    TermsCode: string | null;
    ResidentialAddress: YesNo;
    CustomerType: string | null;
    PriceLevel: string | null;
    CreditHold: YesNo;
    PrimaryShipToCode: string | null;
    DateEstablished: string;
    InternetReseller: YesNo | null;
    Reseller: YesNo | null;
    CustomerStatus: string;
}

export interface ShipToAddress {
    ShipToName: string | null;
    ShipToAddress1: string | null;
    ShipToAddress2: string | null;
    ShipToAddress3: string | null;
    ShipToCity: string | null;
    ShipToState: string | null;
    ShipToZipCode: string | null;
    ShipToCountryCode: string | null;
}

export interface ShipToCustomer extends CustomerKey, ShipToAddress, CustomerSalesperson {
    ShipToCode: string;
    ShipToName: string;
    TelephoneNo: string | null;
    TelephoneExt: string | null;
    EmailAddress: string;
    ContactCode: string | null;
    ResidentialAddress: YesNo;
    Reseller: YesNo | null;
}

export interface CustomerContact extends CustomerKey, CustomerAddress {
    ContactCode: string;
    ContactName: string;
    TelephoneNo1: string | null;
    TelephoneExt1: string | null;
    EmailAddress: string;
    ContactTitle: string | null;
}

export type PricingMethodType = 'O' | 'D' | 'C' | 'M' | 'P';

export interface CustomerPriceRecord {
    PriceCode: string;
    ItemCode: string;
    PricingMethod: PricingMethodType;
    DiscountMarkup1: number;
}

export interface CustomerPriceList {
    [key: string]: CustomerPriceRecord;
}

export interface CustomerUser {
    id: number;
    accessId: number;
    name: string;
    email: string;
    accountType: UserAccessType;
    billTo?: boolean;
    shipToCode?: string[];
    notes?: string;
}

export type AccountCustomerUser = CustomerUser & CustomerKey;

export interface CustomerPaymentCard extends CustomerKey {
    PaymentType: string;
    ExpirationDateYear: string;
    ExpirationDateMonth: string;
    Last4UnencryptedCreditCardNos: string;
    CardType: string;
    CreditCardGUID: string;
    CreditCardID: string;
}

export interface BillToAddress {
    BillToName: string|null;
    BillToAddress1: string|null;
    BillToAddress2: string | null;
    BillToAddress3: string | null;
    BillToCity: string | null;
    BillToState: string | null;
    BillToZipCode: string | null;
    BillToCountryCode: string | null;
}

