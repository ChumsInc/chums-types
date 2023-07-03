import { ProductType } from "./products.js";
export interface BarcodeCustomer {
    Company: string;
    ARDivisionNo: string;
    CustomerNo: string;
    CustomerName: string;
    id: number;
    active: boolean;
    SpecialInstructions: string;
    Notes: string;
}
export interface BarcodeCustomerSettings extends BarcodeCustomer {
    reqAltItemNumber: boolean;
    reqItemDescription: boolean;
    reqColor: boolean;
    reqSKU: boolean;
    reqCustomerPart: boolean;
    reqUPC: boolean;
    reqMSRP: boolean;
    reqCustom1: boolean;
    reqCustom2: boolean;
    reqCustom3: boolean;
    reqCustom4: boolean;
    custom1Name: string;
    custom2Name: string;
    custom3Name: string;
    custom4Name: string;
    itemStickerAll?: boolean;
    bagStickerAll?: boolean;
    caseStickerAll?: boolean;
    timestamp?: string;
}
export interface BarcodeItem {
    ID: number;
    CustomerID?: number;
    Company: string;
    ItemCode: string;
    AltItemCode: string;
    ItemDescription: string;
    Color: string;
    SKU: string;
    CustomerPart: string;
    UPC: string;
    MSRP: string;
    SpecialInstructions: string;
    Notes: string;
    Custom1: string;
    Custom2: string;
    Custom3: string;
    Custom4: string;
    timestamp?: string;
    InactiveItem?: 'Y' | 'N' | null;
    ProductType?: ProductType | null;
    ProductStatus?: string | null;
    SuggestedRetailPrice?: string | number | null;
    itemSticker?: boolean;
    bagSticker?: boolean;
    caseSticker?: boolean;
}
