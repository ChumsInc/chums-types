import type {InvoiceHistoryDetail, InvoiceOrderType, InvoiceType} from "../invoice.js";

export type {
    InvoiceType,
    InvoiceOrderType,
    InvoiceHistoryDetail,
    AccountInvoice,
    InvoiceHistoryHeader,
    PaperlessLogRow,
    InvoiceTrackingRecord,
    InvoicePaymentRecord,
    ExtendedInvoice
} from '../invoice.js';


export interface InvoiceKey {
    InvoiceNo: string;
    HeaderSeqNo: string;
    InvoiceType: InvoiceType;
}

export interface InvoiceHeader extends InvoiceKey {
    InvoiceDate: string;
    SalesOrderNo: string | null;
    OrderDate: string | null;
    OrderType: InvoiceOrderType;
    OrderStatus: string | null;
    ARDivisionNo: string;
    CustomerNo: string;
    TaxSchedule: string;
    BillToName: string | null;
    BillToAddress1: string | null;
    BillToAddress2: string | null;
    BillToAddress3: string | null;
    BillToCity: string | null;
    BillToState: string | null;
    BillToZipCode: string | null;
    BillToCountryCode: string | null;
    ShipToCode: string | null;
    ShipToName: string | null;
    ShipToAddress1: string | null;
    ShipToAddress2: string | null;
    ShipToAddress3: string | null;
    ShipToCity: string | null;
    ShipToState: string | null;
    ShipToZipCode: string | null;
    ShipToCountryCode: string | null;
    ShipDate: string | null;
    ShipVia: string | null;
    CustomerPONo: string | null;
    FOB: string | null;
    WarehouseCode: string | null;
    TermsCode: string | null;
    TermsCodeDesc: string | null;
    SalespersonDivisionNo: string | null;
    SalespersonNo: string | null;
    InvoiceDueDate: string | null;
    DiscountDueDate: string | null;
    AmountSubjectToDiscount: string | number | null;
    DiscountAmt: string | number | null;
    TaxableSalesAmt: string | number | null;
    NonTaxableSalesAmt: string | number | null;
    SalesTaxAmt: string | number | null;
    FreightAmt: string | number | null;
    NumberOfPackages: string | number | null;
    UserCreatedKey: string;
    Comment: string | null;
    EmailAddress: string | null;
    UDF_PROMO_DEAL: string | null;
    UDF_CANCEL_DATE: string | null;
    BillToDivisionNo: string | null;
    BillToCustomerNo: string | null;
    Company: string;
    FirstName: string;
    LastName: string;
    Balance: string | number | null;
}

export interface InvoiceTracking {
    PackageNo: string;
    TrackingID: string | null;
    StarshipShipVia: string;
    Weight: string | number | null;
}

export interface InvoicePayment {
    SequenceNo: string;
    PaymentType: string | null;
    CardType: string | null;
    CheckNo: string | null;
    Last4: string | null,
    TransactionAmt: number | string | null;
    PaymentDate: string | null;
}

export type InvoiceDetail = InvoiceHistoryDetail;

export interface InvoicePaperless {
    Directory: string;
    Filename: string;
    DateCreated: string;
    TimeCreated: string;
    Sent: 'Y' | 'N' | null;
}

export interface Invoice extends InvoiceHeader {
    Detail: InvoiceDetail[];
    Payments: InvoicePayment[];
    Tracking: InvoiceTracking[];
    Paperless?: InvoicePaperless;
}
