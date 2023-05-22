export interface B2BOrderHistory {
    id: number;
    Company: string;
    SalesOrderNo: string;
    b2bStatus: string;
    b2bNotes: string|null;
    b2bName: string;
    b2bAction: any;
    timestamp: string;
}
