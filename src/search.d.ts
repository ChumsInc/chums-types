
export interface SearchItem {
    ItemCode: string;
    ItemCodeDesc: string;
    ProductType: string;
    ProductLine: string;
    Category1: string | null;
    UDF_UPC: string | null;
    UDF_UPC_BY_COLOR: string | null;
    SuggestedRetailPrice: string | number;
    filename: string | null;
    b2bItem: string | null;
    ProductStatus: string | null;
    TemplateNo: string|null;
}
