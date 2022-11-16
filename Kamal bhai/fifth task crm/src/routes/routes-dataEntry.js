import ResetPassword from "views/ResetPassword/container";
import Login from "views/Login/container";
import Forget from "views/Forget/container";
import Instagram from "views/Instagram/index.js";
import Youtube from "views/Youtube/index.js";
import AppRequest from "views/AppRequest/container";
import SaleOrder from "views/SaleOrder/container";
import PaymentReceipt from "views/PaymentReceipt/container";
import ViewQuotationDetail from "views/ViewQuotationDetail/container";
import ViewCustomerDetail from "views/ViewCustomerDetail/container";
import AllSaleOrder from "views/AllSaleOrder/container";
import PlanBuilder from "views/PaymentPlanBuilder/container";
import Payments from "views/Payments/container";
import Wallets from "views/Wallets/container/index";
import CompanyWallets from "views/CompanyWallet/container/index";
import Paymentbanks from "views/PaymentBank/container";
import PaymentStages from "../views/PaymentStages/container";
import ApprovalReceipt from "views/ApprovalReceipt/container";
import CertificateOfConfirmation from "views/CertificateOfConfirmation/container";
import PlotChangeApproval from "views/PlotChangeApproval/container";
import ChangePlotTypeReq from "../views/ChangePlotTypeReq/container";
import WalletDashboard from "views/WalletDashboard/container/index";
import WalletLogs from "views/WalletLogs/container/index";
import Index from "views/Index";

var routesDoc = [
  {
    path: "/index",
    name: "Main Dashboard",
    icon: "ni ni-chart-pie-35",
    component: Index,
    layout: "/admin",
    isView: true,
  },
  // {
  //   path: "/ViewQuotationDetail",
  //   name: "View All Sale Quotation",
  //   icon: "fas fa-poll-h",
  //   component: ViewQuotationDetail,
  //   layout: "/admin",
  //   isView: true,
  // },
  {
    path: "/viewSaleOrderDetail",
    name: "View All Sale Order",
    icon: "fas fa-poll-h",
    component: AllSaleOrder,
    layout: "/admin",
    isView: true,
  },
  {
    path: "/Payments",
    name: "Payments",
    icon: "fas fa-poll-h",
    component: Payments,
    layout: "/admin",
    isView: true,
  },
  // {
  //   path: "/WalletRequestLogs",
  //   name: "Wallet Request Logs",
  //   icon: "ni ni-collection",
  //   component: WalletLogs,
  //   layout: "/admin",
  //   isView: true,
  // },
  // {
  //   path: "/WalletDashboard",
  //   name: "WalletDashboard",
  //   icon: "fas fa-poll-h",
  //   component: WalletDashboard,
  //   layout: "/admin",
  //   isView: true,
  // },

  // {
  //   path: "/viewCustomerDetail",
  //   name: "View customer Detail",
  //   icon: "ni ni-collection text-dark",
  //   component: ViewCustomerDetail,
  //   layout: "/admin",
  //   isView: true,
  // },
  // {
  //   path: "/PlotChangeApproval",
  //   name: "Approval Of Plot Change",
  //   icon: "fas fa-poll-h",
  //   component: PlotChangeApproval,
  //   layout: "/admin",
  //   isView: true,
  // },
  // {
  //   path: "/SaleOrder",
  //   name: "Sale Order",
  //   icon: "fas fa-poll-h",
  //   component: SaleOrder,
  //   layout: "/admin",
  //   isView: false,
  // },
  // {
  //   path: "/planbuilder",
  //   name: "Payment Plan Builder",
  //   icon: "fas fa-poll-h",
  //   component: PlanBuilder,
  //   layout: "/admin",
  //   isView: false,
  // },
  {
    path: "/PaymentStages",
    name: "Payment Stages",
    icon: "fas fa-poll-h",
    component: PaymentStages,
    layout: "/admin",
    isView: false,
  },
  {
    path: "/ApprovalReceipt",
    name: "Approval Receipt",
    icon: "fas fa-poll-h",
    component: ApprovalReceipt,
    layout: "/admin",
    isView: true,
  },
  // {
  //   path: "/WalletDashboard",
  //   name: "WalletDashboard",
  //   icon: "fas fa-poll-h",
  //   component: WalletDashboard,
  //   layout: "/admin",
  //   isView: true,
  // },

  // {
  //   path: "/ChangePlotTypeReq",
  //   name: "Change Plot Type Request",
  //   icon: "fas fa-poll-h",
  //   component: ChangePlotTypeReq,
  //   layout: "/admin",
  //   isView: true,
  // },
  // {
  //   path: "/ApprovalReceipt",
  //   name: "ApprovalReceipt",
  //   icon: "fas fa-poll-h",
  //   component: ApprovalReceipt,
  //   layout: "/admin",
  //   isView: true,
  // },

  // {
  //   path: "/Wallets",
  //   name: "Customer Wallets",
  //   icon: "fas fa-poll-h",
  //   component: Wallets,
  //   layout: "/admin",
  //   isView: true,
  // },
  // {
  //   path: "/CompanyWallets",
  //   name: "Company Wallet",
  //   icon: "fas fa-poll-h",
  //   component: CompanyWallets,
  //   layout: "/admin",
  //   isView: true,
  // },
  // {
  //   path: "/WalletRequests",
  //   name: "WalletRequests",
  //   icon: "ni ni-collection",
  //   component: WalletRequest,
  //   layout: "/admin",
  //   isView: true,
  // },
  // {
  //   path: "/Payment banks",
  //   name: "Payment banks",
  //   icon: "fas fa-poll-h",
  //   component: Paymentbanks,
  //   layout: "/admin",
  //   isView: true,
  // },
  {
    path: "/appRequest",
    name: "Application Request",
    icon: "fas fa-poll-h",
    component: AppRequest,
    layout: "/admin",
    isView: false,
  },
  {
    path: "/CertificateOfConfirmation",
    name: "Certificate Of Confirmation",
    icon: "fas fa-poll-h",
    component: CertificateOfConfirmation,
    layout: "/admin",
    isView: false,
  },
  {
    path: "/PaymentReceipt",
    name: "Payment Receipt",
    icon: "fas fa-poll-h",
    component: PaymentReceipt,
    layout: "/admin",
    isView: false,
  },
  {
    path: "/instagram",

    component: Instagram,
    layout: "/auth",
  },
  {
    path: "/youtube",

    component: Youtube,
    layout: "/auth",
  },
  {
    path: "/login",

    component: Login,
    layout: "/auth",
  },
  {
    path: "/forget",

    component: Forget,
    layout: "/auth",
  },
  {
    path: "/reset",
    component: ResetPassword,
    layout: "/auth",
  },
];
export default routesDoc;
