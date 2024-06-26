import type {SalesOrderItemType} from "./sales-orders.d.ts";
import type {ProductType} from "./products.d.ts";

export type InvoiceType = 'IN'|'CM'|'DM'|'AD'|'FC'|'CA'|'XD';
export type InvoiceOrderType = 'B'|'S'|'1';

export interface InvoiceKey {
    InvoiceNo: string;
    HeaderSeqNo: string;
    InvoiceType: InvoiceType;
}

export interface AccountInvoice extends InvoiceKey {
    Company: string,
    InvoiceNo: string,
    InvoiceType: InvoiceType,
    InvoiceDate: string,
    CustomerPONo: string,
    SalesOrderNo: string|null,
    OrderType: string,
    ShipToCode: string|null,
    ShipToName: string|null,
    ShipToCity: string|null,
    ShipToState: string|null,
    ShipToZipCode: string|null,
    ShipToCountryCode: string|null,
    TaxableSalesAmt: number|string,
    NonTaxableSalesAmt: number|string,
    DiscountAmt: number|string,
    FreightAmt: number|string
}

export interface InvoiceHistoryHeader extends AccountInvoice {
    InvoiceNo: string,
    HeaderSeqNo: string,
    InvoiceType: InvoiceType,
    InvoiceDate: string,
    SalesOrderNo: string|null,
    OrderDate: string|null,
    OrderType: InvoiceOrderType,
    OrderStatus: string, // do I need this field?
    ARDivisionNo: string,
    CustomerNo: string,
    TaxSchedule: string,
    BillToName: string|null,
    BillToAddress1: string|null,
    BillToAddress2: string|null,
    BillToAddress3: string|null,
    BillToCity: string|null,
    BillToState: string|null,
    BillToZipCode: string|null,
    BillToCountryCode: string|null,
    ShipToCode: string|null,
    ShipToName: string|null,
    ShipToAddress1: string|null,
    ShipToAddress2: string|null,
    ShipToAddress3: string|null,
    ShipToCity: string|null,
    ShipToState: string|null,
    ShipToZipCode: string|null,
    ShipToCountryCode: string|null,
    ShipDate: string,
    ShipVia: string,
    CustomerPONo: string,
    FOB: string,
    WarehouseCode: string|null,
    TermsCode: string,
    TermsCodeDesc: string,
    SalespersonDivisionNo: string,
    SalespersonNo: string,
    InvoiceDueDate: string|null,
    DiscountDueDate: string|null,
    AmountSubjectToDiscount: number | string,
    DiscountAmt: number | string,
    TaxableSalesAmt: number | string,
    NonTaxableSalesAmt: number | string,
    SalesTaxAmt: number | string,
    FreightAmt: number | string,
    Balance: number | string,
    NumberOfPackages: number,
    UserCreatedKey:string,
    Comment:string,
    EmailAddress:string,
    UDF_PROMO_DEAL:string,
    UDF_CANCEL_DATE:string,
    BillToDivisionNo:string,
    BillToCustomerNo:string
    FirstName?: string|null,
    LastName?: string|null,

}

export interface PaperlessLogRow {
    Directory: string,
    Filename: string,
    DateCreated: string,
    TimeCreated: string,
    Sent: 'Y'|'N',
}

export interface InvoiceHistoryDetail {
    DetailSeqNo: string,
    ItemCode: string,
    ItemType: SalesOrderItemType
    ItemCodeDesc: string,
    QuantityOrdered: number|string,
    QuantityShipped: number|string,
    QuantityBackordered: number|string,
    UnitPrice: number|string,
    LineDiscountPercent: number|string,
    ExtensionAmt: number|string,
    PriceLevel: string|null,
    KitItem: "N" | 'Y' | ''|null;
    ExplodedKitItem: '' | 'N' | 'Y' | 'C'|null,
    CommentText: string,
    UnitOfMeasure: string,
    UnitOfMeasureConvFactor: number,
    StandardUnitPrice: number,
    SuggestedRetailPrice: number,
    Valuation: string|null,
    // fields below are derived from other tables
    InactiveItem?: 'Y' | 'N';
    ProductType?: ProductType|null;
    UDF_UPC?: string|null,
    UDF_UPC_BY_COLOR?: string|null,
    CustomerUPC?: string;
}

export interface InvoiceTrackingRecord {
    PackageNo:string,
    TrackingID:string,
    StarshipShipVia:string,
    Weight:number,
}

export interface InvoicePaymentRecord {
    PaymentSequenceNo: string;
    PaymentType: string;
    CardType: string;
    CheckNo: string|null;
    Last4: string;
    TransactionAmt: string|number;
    PaymentDate: string;
}


export interface ExtendedInvoice extends InvoiceHistoryHeader {
    Paperless?: PaperlessLogRow[],
    Detail: InvoiceHistoryDetail[],
    Track?: InvoiceTrackingRecord[],
    Payments?: InvoicePaymentRecord[]
}
