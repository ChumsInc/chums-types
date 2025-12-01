import type {Weight} from "../graphql/generics.d.ts";

export interface ItemValidation {
    productId: string;
    productLegacyResourceId: string;
    handle: string;
    status: string;
    hasOnlyDefaultVariant: boolean;
    variantId: string;
    variantLegacyResourceId: string;
    title: string;
    sku: string;
    options: string[];
    quantityOnHand: number;
    quantityAvailable: number;
    compareAtPrice: string;
    price: string;
    barcode: string;
    weight: Weight;
    countryCodeOfOrigin: string;
    harmonizedSystemCode: string;
    itemCodeDesc: string | null;
    suggestedRetailPrice: string | null;
    sageWeight: string | null;
    sageCountryCode: string | null;
    inactiveItem: string;
    productType: string;
    commodityCode: string | null;
    UPC: string | null;
    updatedAt: string;
    hasUpdates: boolean;
    hasProblems?: boolean;
}

