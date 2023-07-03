export type BillType = 'S' | 'K' | 'I' | 'P' | 'E' | 'M';
export interface BillHeader {
    BillNo: string;
    Revision: string;
    BillType: BillType;
    BillDesc1: string;
    BillDesc2: string;
    DateLastUsed: string;
    RoutingNo: string;
    BillHasOptions: 'Y' | 'N';
    DateUpdated: string;
    updatedByUser: string;
}
export interface BillOptionHeader {
    BillNo: string;
    Revision: string;
    BillOptionCategory: string;
    BillOption: string;
    OptionDesc1: string;
    OptionDesc2: string | null;
    DateLastUsed: string;
    RoutingNo: string;
    WorkOrderStepNo: string;
    OptionPrice: number;
    DateUpdated: string;
    updatedByUser: string;
}
