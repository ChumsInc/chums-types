export interface Salesperson {
    Company: string;
    SalespersonDivisionNo: string;
    SalespersonNo: string;
    SalespersonName: string;
    active: boolean;
}

export interface SalespersonLookupResult extends Salesperson {
    Customers: number;
    ShipToAccounts: number;
}
