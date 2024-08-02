import {GLAccount} from "../general-ledger.js";

export type BillType = 'S' | 'K' | 'I' | 'P' | 'E' | 'M';

export interface BillHeader {
    BillNo: string,
    Revision: string,
    BillType: BillType,
    BillDesc1: string,
    BillDesc2: string,
    DateLastUsed: string,
    RoutingNo: string,
    BillHasOptions: 'Y' | 'N',
    DateUpdated: string,
    updatedByUser: string,
}

export interface BillOptionHeader {
    BillNo: string,
    Revision: string,
    BillOptionCategory: string,
    BillOption: string,
    OptionDesc1: string,
    OptionDesc2: string | null,
    DateLastUsed: string,
    RoutingNo: string,
    WorkOrderStepNo: string,
    OptionPrice: number,
    DateUpdated: string,
    updatedByUser: string,
}

export interface BillDetail {
    BillNo: string;
    Revision: string;
    LineKey: string;
    LineSeqNo: string;
    ItemType: string;
    ComponentDesc: string|null;
    WorkOrderStepNo?: string|null; //@deprecated
    BillType: string;
    CommentText: string|null;
    MiscChargeGLAcct: GLAccount|null;
    UnitOfMeasure: string|null;
    QuantityPerBill: string|number;
    StandardUnitCost: string|number;
    ScrapPercent: string|number;
    WorkTicketStepNo: string|null;
}


export interface BillOptionDetail extends Omit<BillDetail, 'WorkOrderStepNo' > {
    BillOptionCategory: string;
    BillOption: string;
}
