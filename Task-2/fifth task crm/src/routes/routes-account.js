import ResetPassword from "views/ResetPassword/container";
import Login from "views/Login/container";
import Forget from "views/Forget/container";
import Inventory from "views/Inventory/container";
import Instagram from "views/Instagram/index.js";
import Youtube from "views/Youtube/index.js";
import AppRequest from "views/AppRequest/container";
import Approval from "views/Approval/container";
import SaleOrder from "views/SaleOrder/container";
import PaymentReceipt from "views/PaymentReceipt/container";
import ViewQuotationDetail from "views/ViewQuotationDetail/container";
import AllSaleOrder from "views/AllSaleOrder/container";
import PlanBuilder from "views/PaymentPlanBuilder/container";
import Payments from "views/Payments/container";
import PaymentStages from "../views/PaymentStages/container";
import ApprovalReceipt from "views/ApprovalReceipt/container";
import WalletRequest from "views/WalletRequests/container";
import TransferRequest from "views/TransferRequestsFinance/container";
import CertificateOfConfirmation from "views/CertificateOfConfirmation/container";
import Index from "views/Index";
import WalletDashboard from "views/WalletDashboard/container/index";
import TransferReqFinance from "views/TransferReqFinance/container";
import PlotCancelListAccounts from "views/PlotCancelListAccounts/container";

var routesDoc = [
  {
    path: "/index",
    name: "Main Dashboard",
    icon: "ni ni-chart-pie-35",
    component: Index,
    layout: "/admin",
    isView: true,
  },
  {
    path: "/ApprovalReceipt",
    name: "ApprovalReceipt",
    icon: "ni ni-collection",
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
  //   path: "/WalletRequests",
  //   name: "WalletRequests",
  //   icon: "ni ni-collection",
  //   component: WalletRequest,
  //   layout: "/admin",
  //   isView: true,
  // },
  {
    path: "/TransferRequests",
    name: "TransferRequests",
    icon: "ni ni-collection",
    component: TransferReqFinance,
    layout: "/admin",
    isView: true,
  },
  {
    path: "/PlotCancelRequest",
    name: "Plot Cancel Request",
    icon: "fas fa-poll-h",
    component: PlotCancelListAccounts,
    layout: "/admin",
    isView: true,
  },
  {
    path: "/Payments",
    name: "Payments",
    icon: "ni ni-collection",
    component: Payments,
    layout: "/admin",
    isView: true,
  },
  {
    path: "/appRequest",
    name: "Application Request",
    icon: "ni ni-collection",
    component: AppRequest,
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
