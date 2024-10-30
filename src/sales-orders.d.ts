import {ItemType} from "./production.js";

export type SalesOrderType = 'S'|'B'|'Q'|'M'|'R'|'P';
export type SalesOrderHeaderStatus = 'A'|'N'|'O'|'C'|'H'|'X'|'Q'|'Z';

export interface SalesOrderHeader {
    Company: string;
    SalesOrderNo: string;
    OrderDate: string;
    OrderType: SalesOrderType
    OrderStatus: SalesOrderHeaderStatus;
    ShipExpireDate: string;
    ARDivisionNo: string;
    CustomerNo: string;
    BillToName: string;
    BillToAddress1: string;
    BillToAddress2: string|null,
    BillToAddress3: string|null,
    BillToCity: string|null;
    BillToState: string|null;
    BillToZipCode: string|null;
    BillToCountryCode: string|null;
    ShipToCode: string|null;
    ShipToName: string|null;
    ShipToAddress1: string|null;
    ShipToAddress2: string|null;
    ShipToAddress3: string|null;
    ShipToCity: string|null;
    ShipToState: string|null;
    ShipToZipCode: string|null;
    ShipToCountryCode: string|null;
    ShipVia: string|null,
    CustomerPONo: string|null;
    FOB: string|null;
    WarehouseCode: string|null;
    ConfirmTo: string|null;
    Comment: string|null;
    EmailAddress: string|null;
    TermsCode: string;
    TermsCodeDesc: string|null;
    CurrentInvoiceNo?: string|null;
    LastInvoiceNo?: string|null;
    LastInvoiceDate: string|null;
    SalespersonDivisionNo: string|null;
    SalespersonNo: string|null;
    PaymentType: string|null;
    CancelReasonCode: string|null;
    AmountSubjectToDiscount: string|number|null;
    DiscountRate: string|number;
    DiscountAmt: string|number;
    TaxableAmt: string|number;
    NonTaxableAmt: string|number;
    SalesTaxAmt: string|number;
    TaxSchedule: string;
    FreightAmt: string|number;
    DepositAmt: string|number;
    DateCreated: string;
    UserCreatedKey: string;
    UDF_CANCEL_DATE: string|null;
    UDF_IMPRINTED: 'Y'|'N';
    UDF_PROMO_DEAL: string|null;
    BillToDivisionNo: string|null;
    BillToCustomerNo: string|null;
    UserFirstName: string|null;
    UserLastName: string|null;
    MasterRepeatingOrderNo: string|null;
    PromotedDate: string|null;
}

export interface SalesOrderDetailLine {
    LineKey: string;
    LineSeqNo: string;
    SequenceNo?: string;
    ItemCode: string;
    ItemType: ItemType;
    ItemCodeDesc: string;
    WarehouseCode: string;
    PriceLevel: string;
    UnitOfMeasure: string;
    UnitOfMeasureConvFactor: number;
    SalesKitLineKey: string|null;
    ExplodedKitItem: 'Y'|'N';
    PromiseDate: string|null;
    QuantityOrdered: number|string;
    QuantityShipped: number|string;
    QuantityBackordered: number|string;
    UnitPrice: number|string;
    UnitCost: number|string;
    LineDiscountPercent: number|string;
    ExtensionAmt: number|string;
    QuantityPerBill: number|string;
    CommentText: string;
    StandardUnitPrice: number|string;
    SuggestedRetailPrice: number|string;
    Valuation?: string;
    LotSerialFullyDistributed?: string;
    LotSerialDistribution?: ItemDistribution;
    UDF_UPC: string|null;
    UDF_UPC_BY_COLOR: string|null;
    ShipWeight: number|string;
    ProductType: string|null;
    InactiveItem: 'Y'|'N'|null,
    UDF_SHIP_CODE: string|null;
    QuantityOnHand?: number|string;
    QuantityRequiredForWO?: number|string;
    QuantityOnSalesOrder?: number|string;
    QuantityOnBackOrder?: number|string;
    QuantityOnWorkOrder?: number|string;
    QuantityOnPurchaseOrder?: number|string;
    BinLocation?: string|null;
    ProductLine?: string;
    QuantityCommitted?: number|string;
    QuantityOnWOPO?: number|string;
    QuantityImmediateAvailable?: number|string;
    QuantityAvailable?: number|string;
    image: string|null;
    CustomerUPC?: string;
    CustomerItem?: string;
}

export interface SalesOrder extends SalesOrderHeader {
    invoices: string[],
    detail: SalesOrderDetailLine[],
    payment?: SalesOrderPayment[],
    b2bUsers?: string[];
}

export interface SalesOrderPayment {
    PaymentType: string,
    last4: string,
    exp?: string,
    ExpirationDateYear?: string,
    ExpirationDateMonth?: string,
}

export interface InvoiceNoRecord {
    Company:string,
    InvoiceNo:string,
    HeaderSeqNo:string,
    InvoiceType:string,
}

export interface ItemDistribution {
    LotSerialNo: string,
    QuantityOrdered: number,
    QuantityShipped: number,
}

export type OpenOrderStatusGroup = 'shipping' | 'cs' | 'imp';

export interface OpenOrderStatusCode {
    id: number;
    StatusCode: string;
    StatusDescription: string;
    StatusType: OpenOrderStatusGroup;
    colorCode: string;
    priority: number;
}

export interface StatusHistory {
    StatusCode: string;
    User: string;
    timestamp: string;
}

export interface SalesOrderStatus {
    id: number;
    SalesOrderNo?: string;
    StatusCode: string|null;
    colorCode?: string|null;
    Notes: string|null;
    User: string|null;
    StatusType?: string|null;
    StatusHistory?: StatusHistory[]|null;
    timestamp: string|null;
}


export interface SalesOrderWithStatus extends Pick<SalesOrderHeader, 'ARDivisionNo' | 'CustomerNo' | 'SalesOrderNo'
    | 'OrderDate' | 'OrderStatus' | 'OrderType' | 'BillToName' | 'ShipExpireDate' | 'ShipVia' | 'Comment'
    | 'UDF_IMPRINTED' | 'CancelReasonCode' | 'CurrentInvoiceNo'> {
    CancelDate: string|null;
    UserLogon: string;
    DateCreated: string;
    TimeCreated: string;
    DateUpdated: string;
    TimeUpdated: string;
    UpdatedByUser: string;
    OrderAmt: number|string;
    isEDI: boolean;
    isB2B: boolean;
    isWebsite: boolean;
    CustomerName: string;
    status: SalesOrderStatus|null;
}
