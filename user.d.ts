import {BooleanLike} from "./basic-types";

export interface BasicCustomerUser {
    id: number;
    name: string;
    email: string;
    accountType: number;
}

export interface CustomerUser extends BasicCustomerUser {
    id: number;
    name: string;
    email: string;
    accountType: number;
    Company: string;
    ARDivisionNo: string;
    CustomerNo: string;
    CustomerName: string;
    notes: string;
    newUser?: boolean;
    notesFrom?: string;
}

export interface PublicUserProps {
    id: number;
    name: string;
    phone: string;
    company: string;
    address: string;
    city: string;
    zip: string;
    country: string;
    accountType: number;
    active: BooleanLike;
    notes: string;
    created: string;
    pwd_change_required: BooleanLike;
    logins: number|null;
    b2b_ct: number|null;
    b2b_login: string|null;
}

export interface User extends CustomerUser, PublicUserProps {
    internal_only: BooleanLike;
    waitingauth: BooleanLike;
    last_login: string|null;
    hits: number;
    idTimeclockEmployee: number;
    timestamp: string;
}

export interface ExtendedUser extends User {
    accounts?: UserAccount[];
    roles?: UserRole[];
}

export type UserProfile = Omit<User,
    "internal_only"|"waitingauth"|"last_login"|"hits"|"idTimeclockEmployee"|"timestamp">

export interface ExtendedUserProfile extends UserProfile {
    accounts?: UserAccount[];
    roles?: UserRole[];
    picture?: string|null;
}

export interface APIUserProfile {
    id: number;
    name: string;
    active: BooleanLike;
}

export interface SessionUser {
    id: number;
    email: string;
    roles: string[];
}

export interface LoadSessionUserProps {
    session?: string|null
    token?: string|null;
    user?: string|number|null;
    pass?: string|null;
}

export interface UserAccount {
    id: number;
    userid: number;
    Company: string;
    ARDivisionNo: string;
    CustomerNo: string;
    ShipToCode?: string|null
    ShipToName?: string|null;
    isRepAccount: BooleanLike;
    SalespersonDivisionNo: string|null;
    SalespersonNo: string|null;
    CustomerName: string|null;
    SalespersonName: string|null;
    primaryAccount: boolean;
    customers: number;
    shipToCustomers: number;
    timestamp: string;
}

export interface UserRole {
    id: number;
    role: string;
}

export interface PasswordValidationResponse {
    id: number;
    email: string;
    emailValidated: boolean;
    waitingAuth: boolean
}


export interface TimeClockEmployee {
    id: number;
    FirstName: string;
    LastName: string;
}
