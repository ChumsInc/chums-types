export interface RMAUser {
    id: number,
    name: string,
}

export interface StatusEvent {
    user: number;
    style: number;
    date: string|Date;
    text?: string,
}
export type StatusKey = 'ct'|'recv'|'recon'|'acct'|'cs'|'whse'|'comment'|'completed'|'rush';

export type RMAStatus = {
    [key in StatusKey]: StatusEvent;
};

export interface RMAOrderStatus {
    Company: string;
    SalesOrderNo: string;
    StatusJSON: RMAStatus;
    Completed: boolean;
}

export interface RMASalesOrder extends RMAOrderStatus{
    Company: string;
    SalesOrderNo: string;
    OrderStatus: string;
    ARDivisionNo: string;
    CustomerNo: string;
    BillToName: string;
    OrderTotal: number;
    LastInvoiceNo: string|null;
    Comment:string|null;
    StatusJSON: RMAStatus;
    Completed: boolean;
    firstname: string;
    OrderDate: string
}
