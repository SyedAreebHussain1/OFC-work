import Index from "views/Index.js";
import Leads from "views/Leads/container";
import Contacts from "views/Contacts/container";
import ResetPassword from "views/ResetPassword/container";
import Login from "views/Login/container";
import Forget from "views/Forget/container";
import Dashboard from "views/Dashboard/container";
import Inventory from "views/Inventory/container";
import Agent from "views/Agent/container";
import Instagram from "views/Instagram/index.js";
import Youtube from "views/Youtube/index.js";
import Invent from "../views/Invent/container";
import SaleQotation from "views/SaleQotation/container";
import ViewCustomerDetail from "views/ViewCustomerDetail/container";
import DashboardInventory from "views/DashboardInventory/container";
import SaleOrder from "views/SaleOrder/container";
import PaymentReceipt from "views/PaymentReceipt/container";
import ViewQuotationDetail from "views/ViewQuotationDetail/container";
import AllSaleOrder from "views/AllSaleOrder/container";
import PlanBuilder from "views/PaymentPlanBuilder/container";
import Payments from "views/Payments/container";
import PaymentStages from "../views/PaymentStages/container";
import TestLead from "../views/testing/container";
import FileInfo from "views/FileInfo/container/index.js";
import PlotChangeApproval from "views/PlotChangeApproval/container";
import Support from "../views/Support/container";
import ViewAllSupport from "../views/ViewAllSupport/container";
import ChangePlotTypeReq from "../views/ChangePlotTypeReq/container";
import Transfer from "views/Transfer/container/";
import TransferReceipt from "views/TransferRecieptForm/container/";
import CustomerCounter from "views/CustomerCounter/container/index";
import CashierCounter from "views/CashierCounter/container/index";
import FormIssue from "views/FormIssue/container";
import ViewAllAgentForms from "views/ViewAllAgentForms/container";
import VerificationCounter from "views/VerificationCounter/container";
import BookingForm from "views/BookingForm/container";
import PlotTransferApproval from "views/PlotTransferApproval/container/PlotTransferApproval";
import ViewDocumentation from "views/ViewDocumentation/container";
import PaymentPlan from "views/PaymentPlanBuilder copy/container";
import ViewTransferRecords from "views/ViewTransferRecords/container";
import Settings from "views/Settings/container";
import AppRequest from "views/AppRequest/container";
import CertificateOfConfirmation from "views/CertificateOfConfirmation/container";
var routes = [
  {
    path: "/index",
    name: "Main Dashboard",
    icon: "ni ni-chart-pie-35",
    component: Index,
    layout: "/admin",
    isView: true,
  },

  {
    path: "/PaymentReceipt",
    name: "Payment Receipt",
    icon: "fas fa-angle-right",
    component: PaymentReceipt,
    layout: "/admin",
    isView: false,
  },
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
  // {
  //   path: "/PaymentPlan",
  //   name: "PaymentPlan",
  //   icon: "fas fa-angle-right",
  //   component: PaymentPlan,
  //   layout: "/admin",
  //   isView: true,
  // },

  {
    path: "/PlotTransferApproval",
    name: "Plot Transfer Approval",
    icon: "fas fa-angle-right",
    component: PlotTransferApproval,
    layout: "/admin",
    isView: false,
  },

  {
    path: "/Transfer",
    name: "Transfer",
    icon: "fas fa-angle-right",
    component: Transfer,
    layout: "/admin",
    isView: false,
  },
  {
    path: "/TransferReceipt",
    name: "TransferReceipt",
    icon: "fas fa-angle-right",
    component: TransferReceipt,
    layout: "/admin",
    isView: false,
  },
  {
    path: "/fileInfo",
    name: "File Info",
    icon: "fas fa-angle-right",
    component: FileInfo,
    layout: "/admin",
    isView: false,
  },
  {
    path: "/SaleOrder",
    name: "Sale Order",
    icon: "fas fa-angle-right",
    component: SaleOrder,
    layout: "/admin",
    isView: false,
  },
  {
    path: "/plotselection",
    name: "Plot Selection",
    icon: "fas fa-angle-right",
    component: Inventory,
    layout: "/admin",
    isView: false,
  },
  {
    path: "/planbuilder",
    name: "Payment Plan Builder",
    icon: "fas fa-angle-right",
    component: PlanBuilder,
    layout: "/admin",
    isView: false,
  },
  {
    path: "/PaymentStages",
    name: "Payment Stages",
    icon: "fas fa-angle-right",
    component: PaymentStages,
    layout: "/admin",
    isView: false,
  },
  {
    path: "/viewdocumentation",
    name: "View Documentation",
    icon: "fas fa-angle-right",
    component: ViewDocumentation,
    layout: "/admin",
    isView: false,
  }, //<i class="fas fa-money-check-alt"></i>
  // {
  //   name: "Selling Form Process",
  //   icon: "fas fa-money-check-alt",
  //   isView: true,
  //   subNav: [
  //     {
  //       path: "/FormIssue",
  //       name: "Create Form",
  //       icon: "fas fa-angle-right",
  //       component: FormIssue,
  //       layout: "/admin",
  //       isView: true,
  //     },
  //     {
  //       path: "/ViewAllAgentForms",
  //       name: "Generate Barcode & View Forms",
  //       icon: "fas fa-angle-right",
  //       component: ViewAllAgentForms,
  //       layout: "/admin",
  //       isView: true,
  //     },
  //   ],
  // },
  // {
  //   name: "Verification Process",
  //   icon: "fas fa-clipboard-check",
  //   isView: true,
  //   subNav: [
  //     {
  //       path: "/verificationCounter",
  //       name: "Form Verification",
  //       icon: "fas fa-angle-right",
  //       component: VerificationCounter,
  //       layout: "/admin",
  //       isView: true,
  //     },
  //     {
  //       path: "/customerCounter",
  //       name: "Form Submission",
  //       icon: "fas fa-angle-right",
  //       component: CustomerCounter,
  //       layout: "/admin",
  //       isView: true,
  //     },
  //     {
  //       path: "/cashierCounter",
  //       name: "Cash Receipt Counter",
  //       icon: "fas fa-angle-right",
  //       component: CashierCounter,
  //       layout: "/admin",
  //       isView: true,
  //     },
  //     {
  //       path: "/BookingForm",
  //       name: "Customer Detail Counter",
  //       icon: "fas fa-angle-right",
  //       component: BookingForm,
  //       layout: "/admin",
  //       isView: true,
  //     },
  //   ],
  // },
  {
    name: "CRM",
    icon: "fas fa-poll-h",
    isView: true,
    subNav: [
      // {
      //   path: "/dashboard",
      //   name: "Reporting Dashboard",
      //   icon: "ni ni-chart-pie-35 ",
      //   component: Dashboard,
      //   layout: "/admin",
      // },
      // {
      //   path: "/agent",
      //   name: "Create Employee",
      //   icon: "fas fa-angle-right",
      //   component: Agent,
      //   layout: "/admin",
      //   isView: true,
      // },
      // {
      //   path: "/campaign",
      //   name: "Campaign",
      //   icon: "fas fa-angle-right",
      //   component: Contacts,
      //   layout: "/admin",
      // },
      {
        path: "/lead",
        name: "Confirm Leads",
        icon: "fas fa-angle-right",
        component: Leads,
        layout: "/admin",
      },
      // {
      //   path: "/viewCustomerDetail",
      //   name: "View customer Detail",
      //   icon: "fas fa-angle-right",
      //   component: ViewCustomerDetail,
      //   layout: "/admin",
      // },
      // {
      //   path: "/Payments",
      //   name: "Payments",
      //   icon: "fas fa-angle-right",
      //   component: Payments,
      //   layout: "/admin",
      // },
      {
        path: "/ViewQuotationDetail",
        name: "View All Sale Quotation",
        icon: "fas fa-angle-right",
        component: ViewQuotationDetail,
        layout: "/admin",
      },
      {
        path: "/viewSaleOrderDetail",
        name: "View All Sale Order",
        icon: "fas fa-angle-right",
        component: AllSaleOrder,
        layout: "/admin",
      },
      // {
      //   path: "/ChangePlotTypeReq",
      //   name: "Change Plot Type Request",
      //   icon: "fas fa-angle-right",
      //   component: ChangePlotTypeReq,
      //   layout: "/admin",
      // },
      // {
      //   path: "/ViewTransferRecords",
      //   name: "View Transfer Records",
      //   icon: "fas fa-angle-right",
      //   component: ViewTransferRecords,
      //   isView: true,
      //   layout: "/admin",
      // },
      // {
      //   path: "/PlotChangeApproval",
      //   name: "Plot Change Request",
      //   icon: "fas fa-angle-right",
      //   component: PlotChangeApproval,
      //   layout: "/admin",
      //   isView: true,
      // },

      {
        path: "/salequotation",
        component: SaleQotation,
        layout: "/admin",
        isView: false,
      },
    ],
  },
  // {
  //   name: "Inventory",
  //   icon: "fas fa-boxes",

  //   isView: true,
  //   subNav: [
  //     {
  //       path: "/dasboardinventory",
  //       name: "Dashboard Inventory",
  //       icon: "ni ni-chart-pie-35 ",
  //       component: DashboardInventory,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/invent",
  //       name: "Inventory",
  //       icon: "fas fa-angle-right",
  //       component: Invent,
  //       layout: "/admin",
  //     },
  //     // {
  //     //   path: "/testing",
  //     //   name: "Test",
  //     //   icon: "fas fa-angle-right",
  //     //   component: TestLead,
  //     //   layout: "/admin",
  //     // },
  //   ],
  // },
  // {
  //   name: "Support",
  //   icon: "fas fa-question-circle",

  //   isView: true,
  //   subNav: [
  //     {
  //       path: "/support",
  //       name: "Support",
  //       icon: "fas fa-angle-right",
  //       component: Support,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/viewallsupport",
  //       name: "View All Support",
  //       icon: "fas fa-angle-right",
  //       component: ViewAllSupport,
  //       layout: "/admin",
  //     },
  //   ],
  // },
  // {
  //   path: "/settings",
  //   name: "Settings",
  //   icon: "ni ni-settings",
  //   component: Settings,
  //   layout: "/admin",
  //   isView: true,
  // },
  {
    name: "HRM",
    icon: "ni ni-ni ni-badge text-success",
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
export default routes;
