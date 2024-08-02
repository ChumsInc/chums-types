import {WorkTicketHeader} from "./work-ticket.js";

export interface WorkTicketStatusEntry {
    user: number;
    style: number;
    date: string;
    text?: string;
}

export type WorkTicketStatusGroup = Record<string, WorkTicketStatusEntry>

export interface WorkTicketWorkStatusItem extends Pick<WorkTicketHeader,
    'WorkTicketKey'|'WorkTicketNo'|'ParentItemCode'|'WorkTicketDate'|'ProductionDueDate'|
    'QuantityOrdered'|'QuantityCompleted'|'ParentItemCodeDesc'|'ParentWarehouseCode'|
    'MakeForSalesOrderNo'|'MakeForWorkTicketNo'> {
    PlannedHours: string|number|null;
    reportId: number|null;
    MakeFor: string;
    StatusJSON: WorkTicketStatusGroup;
}
