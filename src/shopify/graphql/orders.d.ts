import type {OrderRiskSummary} from "./order-risk.d.ts";

export interface Order {
    id: string;
    legacyResourceId: string;
    risk?: OrderRiskSummary;
}
