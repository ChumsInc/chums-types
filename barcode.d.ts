import {BooleanLike} from "./basic-types";

export interface BarcodeCustomer {
    Company: string;
    ARDivisionNo: string;
    CustomerNo:string;
    CustomerName: string;
    id: number;
    SpecialInstructions: string;
    Notes: string;
}

export interface BarcodeCustomerSettings extends BarcodeCustomer {
    reqAltItemNumber: BooleanLike;
    reqItemDescription: BooleanLike;
    reqColor: BooleanLike;
    reqSKU: BooleanLike;
    reqCustomerPart: BooleanLike;
    reqUPC: BooleanLike;
    reqMSRP: BooleanLike;
    reqCustom1: BooleanLike;
    reqCustom2: BooleanLike;
    reqCustom3: BooleanLike;
    reqCustom4: BooleanLike;
    custom1Name: string;
    custom2Name: string;
    custom3Name: string;
    custom4Name: string;
}

export interface BarcodeItem {
    ID: number,
    CustomerID?: number,
    Company: string,
    ItemCode: string,
    AltItemCode: string,
    ItemDescription: string,
    Color: string,
    SKU: string,
    CustomerPart: string;
    UPC: string;
    MSRP: string,
    SpecialInstructions: string;
    Notes: string;
    Custom1: string,
    Custom2: string,
    Custom3: string,
    Custom4: string;
    timestamp: string;
}
