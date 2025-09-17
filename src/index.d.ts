/**
 * CHUMS common types
 *  @author Steve Montgomery <https://github.com/UtahGooner>
 */

export type * as FBATypes from './amazon-fba.js';
export type {FBAItem, FBAItemMap} from './amazon-fba.js';

export type {B2BOrderHistory} from './b2b.js';

export type * as BarcodeTypes from './barcode.js'
export type {BarcodeCustomer, BarcodeCustomerSettings, BarcodeItem} from './barcode.js';

export type {
    BooleanLike,
    DBCompany,
    SageCompany
} from './basic-types.js';

export type {
    BillType,
    BillHeader,
    BillOptionHeader,
    BillOptionDetail,
    BillDetail
} from './production/bill-materials.js';

export type {
    CustomerValidationResponse
} from './customer.js';

export type {
    CLIssue,
    CLIssueEntry,
    CLIssueResponse,
    CLIssueSearchParams,
    CLVendor,
    CLVendorWeekTotal,
    CLIssueDetail,
    CLIssueEntryDetailPost,
    CLIssueEntryDetail,
    CLIssueSearchId,
    CLIssueSearchOptions,
    CLIssueSearchWorkTicket,
    IssueDateType,
} from './production/contract-labor.js'

export type * as DirectLaborTypes from './production/direct-labor.js';
export type {
    DLCode,
    DLCodeStep,
    DLCodeWorkTemplate,
    DLStep,
    DLBasicStep,
    StepTiming,
    DLEmployee,
    BasicDLEntry,
    DLEntry,
    EmployeeDLEntryTotal,
    DLDepartmentKey,

} from './production/direct-labor.js';

export type * as EDIOrderStatusTypes from './edi/order-status.js';
export type {
    EDICustomer,
    EDIOrder,
    EDIOrderStatus,
    EDIOrderStatusField,
    EDIOrderStatusGroup,
} from './edi/order-status.js';

export type {
    YesNo,
    Editable,
    LoadingStatus
} from './generics.js';

export type {
    GLAccount
} from './general-ledger.js';

export type * as InvoiceTypes from './invoice.js';
export type {
    AccountInvoice,
    ExtendedInvoice,
    InvoiceHistoryDetail,
    InvoiceHistoryHeader,
    InvoiceKey,
    InvoiceOrderType,
    InvoicePaymentRecord,
    InvoiceTrackingRecord,
    InvoiceType,
    PaperlessLogRow,
} from './invoice.js';

export type {
    Item,
    WarehouseItem,
} from './item.js';

export type * as MenuItemTypes from './ui/menu.js'
export type {MenuItem, MenuItemEntry, UserFavorite} from './ui/menu.js';

export type * as PricingTypes from './pricing.js';
export type {
    BasePriceCode,
    CustomerPriceLevelPriceCode,
    FullPriceCode,
    PriceCodeChange,
    BasePriceCodeInfo,
    PriceLevel,
    ItemPriceCode,
    CustomerPriceCode,
    PriceCodeUser,
    PricingMethod,
    PriceCodeItem,
} from './pricing.js';

export * as ProductImageTypes from './product-image.js'
export type {
    GenericImage,
    ImageSize,
    ItemImage,
    ItemImageRecord,
    BaseImage,
    ImageSizeList,
    ProductImage,
    ImageFormatList,
    ImageSizePath,
    ColorSpaceList,
    ProductAltItem,
    ProductAltItemKey,
} from './product-image.js';

export type * as ProductTypes from './products.js'
export type {
    ProductType,
    BaseSKU,
    BaseSKUSearch,
    AdjustableDimension,
    ProductAttributes,
    ProductStatusAttributes,
    ProductCategory,
    ProductCollection,
    ProductColor,
    ProductColorUPC,
    ProductColorUPCResponse,
    ProductDimension,
    CountryOfOrigin,
    PrimaryVendor,
    ProductLine,
    ProductMaster,
    ProductMaterial,
    ProductMixInfo,
    ProductSeason,
    ProductStatus,
    ProductWarehouse,
    ProductSearchItem,
    Warehouse,
    SKUGroup,
    BinLocation,
    ItemType,
} from './products.js';

export type * as ProductionManagementTypes from './production/production-management.js';
export type {
    ActivityCode,
    WorkCenter,
    WorkTemplate,
    WorkTemplateHeader,
    WorkTemplateStep,
} from './production/production-management.js'

export type * as ReturnsTypes from './returns.js'
export type {RMASalesOrder, RMAUser, RMAOrderStatus, StatusEvent, RMAStatus, StatusKey} from './returns.js';

export type * as SalesOrderTypes from './sales-orders.js';
export type {
    SalesOrderItemType,
    ItemDistribution,
    SalesOrder,
    SalesOrderHeader,
    SalesOrderPayment,
    SalesOrderDetailLine,
    SalesOrderHeaderStatus,
    InvoiceNoRecord,
    SalesOrderType,
    OpenOrderStatusGroup,
    OpenOrderStatusCode,
    SalesOrderStatus,
    StatusHistory,
    SalesOrderWithStatus,
} from './sales-orders.js';
export type {Salesperson, SalespersonLookupResult} from './salesperson.js';

export type {
    SearchItem,
} from './search.js';

export type * as ShopifyIntegration from './shopify/index.js'
export type {
    ExtendedSavedOrder,
    SageItem,
    MoneyString,
    StoreName,
    ExtendedSavedOrderRow,
    SageFulfillmentItem,
    Fulfillment,
    SageFulfillmentInfo,
    FulfillmentResponse,
    SageFulfillmentTracking,
    DeprecatedShopifyFulfillmentBody,
    ChangedVariant,
    InventoryLevelChange,
    SavedInventoryLevel,
    ShopifyInventoryLevel,
    ShopifyInventoryLevelResponse,
    ShopifyInventoryItem,
    ItemLocation,
    PriceMoney,
    PriceSet,
    SageAddress,
    SageImportableOrder,
    SageImportResponse,
    SageTrackingResponse,
    SageTrackingWithId,
    SageOrderDetailLine,
    SagePaymentType,
    SavedOrder,
    SavedOrderRow,
    SavedInventoryItem,
    SavedItemUpdate,
    SavedPayment,
    ItemValidation,
    SavedProduct,
    SavedVariant,
    ShopifyAddress,
    ShopifyCustomer,
    ShopifyDiscountAllocation,
    ShopifyDiscountCode,
    ShopifyFulfillmentOrderLineItem,
    ShopifyFulfillmentOrder,
    ShopifyFulfillmentOrdersList,
    ShopifyListResult,
    ShopifyInventoryItemsResponse,
    ShopifyItem,
    ShopifyPaymentResponse,
    ShopifyObject,
    ShopifyOrder,
    ShopifyOrderResponse,
    ShopifyOrderPaymentDetails,
    ShopifyPaymentTransaction,
    ShopifyPaymentTransactionsResponse,
    ShopifyProductsResponse,
    ShopifyPayment,
    ShopifyOrdersResponse,
    ShopifyRiskResponse,
    ShopifyProduct,
    ShopifyProductVariant,
    ShopifyRisk,
    ShopifyShippingLine,
    ShopifyTaxLine,
    StoreNames,
    ShopifyGenerics,
    ShopifyFulfillment,
    ShopifyChumsTypes,
    ShopifyFulfilmentOrders,
    ShopifyOrders,
    ShopifyInventory,
    ShopifyPayments,
    ShopifyProducts,
} from './shopify/index.js'

export type {SortProps} from './ui/sort.js';
export type {StoreMapCustomer} from './store-map.js';
export type {Tab} from './ui/tabs.js';

export type * as UserTypes from './user.js';
export type {
    UserAccountType,
    User,
    BaseUserAccount,
    UserAccount,
    UserProfile,
    APIUserProfile,
    ExtendedUserProfile,
    ValidatedUserProfile,
    BaseJWTToken,
    AccessRole,
    UserRole,
    ExtendedUserRole,
    CustomerUser,
    BasicCustomerUser,
    ExtendedUser,
    LoadSessionUserProps,
    UserRecord,
    SessionUser,
    PasswordValidationResponse,
    UserValidationResponse,
    UserJWTToken,
    TimeClockEmployee,
    ValidatedUser
} from './user.js';

/**
 * @deprecated
 */
export type * as WorkOrderTypes from './production/work-order.js';

/**
 * @deprecated
 */
export type {
    OperationCode,
    OperationCodeKey,
    RoutingDetail,
    RoutingHeader,
    WOWorkCenter,
    WOManifestEntryItem,
    WOManifestEntry,
    WOManifestShipDate,
} from './production/work-order.js';

export type * as WorkTicketTypes from './production/work-ticket.js';
export {
    WorkTicket, WorkTicketHeader, WorkTicketDetail, WorkTicketScalingMethod, WorkTicketResponse, WorkTicketStatus,
    WorkTicketType, WorkTicketStep,
} from './production/work-ticket.js'

export {
    WorkTicketStatusEntry,
    WorkTicketStatusSet,
    WorkTicketWorkStatusItem,
    WorkTicketGroup,
    WorkTicketGroupItem,
    WorkTicketWorkStatusDetail,
    WorkTicketWorkStatusGroup,
    WorkTicketWorkStatusKey,
    WorkTicketStatusGroup,
} from './production/work-ticket-status.js'

export type * as TimeclockTypes from './timeclock.js';
export type {BannerImage, PayPeriod,} from './timeclock.js'
export type {MailerReportObject, MailerReportContent, MailerMultiPartContent} from './mailer.js'

export type * as CookieConsentTypes from './cookie-consent.js';
export type {
    CookieConsentChange,
    CookieConsentSettings,
    CookieConsentRecord,
    CookieConsentSection,
} from './cookie-consent.js';
