export interface ValidateCustomerAccessResponse {
    billTo: boolean;
    shipTo: string[];
    canSetDefaultShipTo: boolean;
}
