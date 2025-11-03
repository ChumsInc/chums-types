import {BasicCustomer, CustomerKey, CustomerSalesperson} from "./customer.js";

export type UserAccessType = 1 | 2 | 4;

export interface UserProfile {
    id: number;
    name: string;
    email: string;
    phone: string,
    company: string,
    address: string,
    city: string,
    state: string,
    zip: string,
    country: string,
    internal_only: boolean | 1 | 0,
    accountType: UserAccessType,
    active: boolean | 1 | 0,
    notes: string | null,
    created: string | null,
    pwd_change_required: boolean | 1 | 0,
    waitingauth: boolean | 1 | 0,
    last_login: string | null,
    logins: number,
    hits: number,
    timestamp: string,
}

export interface UserRole {
    id: number,
    role: string,
}

export interface UserCustomerAccess extends CustomerKey, CustomerSalesperson {
    id: number,
    userid: number,
    Company: string,
    ARDivisionNo: string,
    CustomerNo: string,
    isRepAccount: boolean | 1 | 0,
    SalespersonDivisionNo: string,
    SalespersonNo: string,
    CustomerName: string | null,
    SalespersonName: string | null,
    primaryAccount: boolean | 1 | 0,
    customers: number,
    shipToCustomers: number,
}

export interface RecentCustomer extends BasicCustomer {
    ts: number,
}

export interface UserCustomerAccess {
    billTo: boolean;
    shipTo: string[];
}
