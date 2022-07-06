import {BooleanLike} from "./basic-types";

export interface BasicCustomerUser {
    id: number,
    name: string,
    email: string,
    accountType: number,
}

export interface CustomerUser extends BasicCustomerUser {
    id: number,
    name: string,
    email: string,
    accountType: number,
    Company: string,
    ARDivisionNo: string,
    CustomerNo: string,
    CustomerName: string,
    notes: string,
    newUser?: boolean,
    notesFrom?: string,
}

export interface UserRecord {
    id: number,
    name: string,
    phone: string,
    company: string,
    address: string,
    city: string,
    zip: string,
    country: string,
    internal_only: BooleanLike,
    accountType: number,
    active: BooleanLike,
    notes: string,
    created: string,
    pwd_change_required: BooleanLike,
    waitingauth: BooleanLike,
    last_login: string,
    logins: number,
    hits: number,
    idTimeclockEmployee: number,
    b2b_ct: number,
    b2b_login: string,
    timestamp: string,
}

export interface ExtendedUserRecord extends UserRecord {
    accounts?: UserAccountRecord[],
    roles?: UserRoleRecord[],
}

export type UserProfile = Omit<UserRecord,
    "internal_only"|"waitingauth"|"last_login"|"hits"|"idTimeclockEmployee"|"timestamp">

export interface UserProfileRecord extends UserProfile {
    accounts?: UserAccountRecord[],
    roles?: UserRoleRecord[],
    picture?: string|null,
}

export interface APIUserProfile {
    id: number,
    name: string,
    active: BooleanLike,
}

export interface SessionUser {
    id: number,
    email: string,
    roles: string[],
}

export interface LoadSessionUserProps {
    session?: string|null
    token?: string|null,
    user?: string|number|null,
    pass?: string|null,
}

export interface UserAccountRecord {
    id: number,
    userid: number,
    Company: string,
    ARDivisionNo: string,
    CustomerNo: string,
    ShipToCode?: string|null
    ShipToName?: string|null,
    isRepAccount: BooleanLike,
    SalespersonDivisionNo: string|null,
    SalespersonNo: string|null,
    CustomerName: string|null,
    SalespersonName: string|null,
    primaryAccount: boolean,
    customers: number,
    shipToCustomers: number,
    timestamp: string,
}

export interface UserRoleRecord {
    id: number,
    role: string,
}

export interface PasswordValidationResponse {
    id: number,
    email: string,
    emailValidated: boolean,
    waitingAuth: boolean
}


export interface TimeClockEmployee {
    id: number,
    FirstName: string,
    LastName: string,
}
