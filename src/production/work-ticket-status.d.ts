import {WorkTicketHeader} from "./work-ticket.js";

export interface WorkTicketStatusEntry {
    user: number;
    style: number;
    date: string;
    text?: string;
}

export type WorkTicketStatusSet = Record<string, WorkTicketStatusEntry>

export interface WorkTicketWorkStatusItem extends Pick<WorkTicketHeader,
    'WorkTicketKey'|'WorkTicketNo'|'ParentItemCode'|'WorkTicketDate'|'ProductionDueDate'|
    'QuantityOrdered'|'QuantityCompleted'|'ParentItemCodeDesc'|'ParentWarehouseCode'|
    'MakeForSalesOrderNo'|'MakeForWorkTicketNo'> {
    PlannedHours: string|number|null;
    reportId: number|null;
    MakeFor: string;
    StatusJSON: WorkTicketStatusSet;
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

export type WorkTicketWorkStatusDetail = Pick<WorkTicketWorkStatusItem, 'WorkTicketKey'|'StatusJSON'>;
