import type {WorkTicketHeader} from "./work-ticket.d.ts";

export interface WorkTicketStatusEntry {
    user: number;
    style: number;
    date: string;
    text?: string;
}

export type WorkTicketStatusSet = Record<string, WorkTicketStatusEntry>

export interface WorkTicketWorkStatusItem extends Pick<WorkTicketHeader,
    'WorkTicketKey' | 'WorkTicketNo' | 'ParentItemCode' | 'WorkTicketDate' | 'ProductionDueDate' |
    'QuantityOrdered' | 'QuantityCompleted' | 'ParentItemCodeDesc' | 'ParentWarehouseCode' |
    'MakeForSalesOrderNo' | 'MakeForWorkTicketNo'> {
    PlannedHours: string | number | null;
    reportId: number | null;
    MakeFor: string;
    StatusJSON: WorkTicketStatusSet;
    WorkCenters: string[];
    isRush: boolean;
}


export interface WorkTicketGroup {
    id: number;
    name: string;
    location: string;
    timestamp?: string;
}

export interface WorkTicketGroupItem {
    id: number;
    groupId: number;
    ItemCode: string;
}

export interface WorkTicketWorkStatusGroup {
    id: number;
    name: string;
}

export type WorkTicketWorkStatusDetail = Pick<WorkTicketWorkStatusItem, 'WorkTicketKey' | 'StatusJSON'>;

export type WorkTicketWorkStatusKey =
    'bead'
    | 'card'
    | 'cl'
    | 'cut'
    | 'comment'
    | 'delete_wo'
    | 'mold'
    | 'plan'
    | 'prd'
    | 'pull'
    | 'rush'
    | 'rushst'  // SLC Priority Flag
    | 'rushst2' // SLC Priority 2 Flag
    ;


export type WorkTicketStatusRecord = Partial<Record<WorkTicketWorkStatusKey, WorkTicketStatusEntry>>;

export interface WorkTicketStatusGroup {
    id: number;
    locationName: string;
    groupName: string;
    active: boolean;
    history: [{ userId: number, updated: string }]
}

export interface WorkTicketStatusItem {
    id: number,
    groupId: number,
    itemCode: string,
}
