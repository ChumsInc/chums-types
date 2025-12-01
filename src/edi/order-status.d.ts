import type {SalesOrderHeader} from "../sales-orders.d.ts";

export type EDIOrderStatusField = 'imported' | 'inventory' | 'printed' | 'logistics' | 'ucc' | 'sps-invoiced'
    | 'work-cell' | 'picked' | 'routed' | 'asn' | 'picked-up' | 'invoiced' | 'completed'|string;

export interface EDIOrderStatus {
    user?: number,
    value: string | number,
    date?: string,
    text?: string,
    userName?: string,
}


export type EDIOrderStatusGroup = {
    [key in EDIOrderStatusField]: EDIOrderStatus;
};

export interface EDIOrder extends Pick<SalesOrderHeader, 'ARDivisionNo'|'CustomerNo'|'BillToName'
    |'OrderDate'|'OrderStatus'|'ShipExpireDate'|'UDF_CANCEL_DATE'|'LastInvoiceDate'|'CustomerPONo'> {
    SalesOrders: string,
    isMAPADOC: boolean,
    OrderDate: string,
    OrderTotal: number,
    OrderCount: number,
    InvoiceCount: number,
    CSUser: string,
    status_json: EDIOrderStatusGroup,
    notes?: string,
    completed?: string,
    completedByUserName?: string,
    selected?: boolean,
    saving?: boolean;
}

export interface EDICustomer {
    ARDivisionNo: string;
    CustomerNo: string;
    CustomerName: stirng;
    isMAPADOC: boolean;
}
