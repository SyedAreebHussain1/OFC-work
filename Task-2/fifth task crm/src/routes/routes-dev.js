import Index from "views/Index.js";
import Leads from "views/Leads/container";
import Leads2 from "views/Leads2/container";
import Contacts from "views/Contacts/container";
import ResetPassword from "views/ResetPassword/container";
import Login from "views/Login/container";
import Forget from "views/Forget/container";
import View from "views/ViewCustomer/container";
import Dashboard from "views/Dashboard/container";
import Inventory from "views/Inventory/container";
import Agent from "views/Agent/container";
import Instagram from "views/Instagram/index.js";
import Youtube from "views/Youtube/index.js";
import Invent from "../views/Invent/container";
import Support from "../views/Support/container";
import ViewAllSupport from "../views/ViewAllSupport/container";
import SaleQotation from "views/SaleQotation/container";

import ViewCustomerDetail from "views/ViewCustomerDetail/container";
import AppRequest from "views/AppRequest/container";
import Approval from "views/Approval/container";
import DashboardInventory from "views/DashboardInventory/container";
import SaleOrder from "views/SaleOrder/container";
import PaymentReceipt from "views/PaymentReceipt/container";
import ViewQuotationDetail from "views/ViewQuotationDetail/container";
import AllSaleOrder from "views/AllSaleOrder/container";
import PlanBuilder from "views/PaymentPlanBuilder/container";
import Payments from "views/Payments/container";
import PaymentStages from "../views/PaymentStages/container";
import ApprovalReceipt from "views/ApprovalReceipt/container";
import CertificateOfConfirmation from "views/CertificateOfConfirmation/container";
import ViewTransferRecords from "views/ViewTransferRecords/container";

var routesDev = [
  {
    path: "/index",
    name: "Main Dashboard",
    icon: "ni ni-tv-2 text-blue",
    component: Index,
    layout: "/admin",
    isView: true,
  },
  {
    path: "/appRequest",
    name: "Application Request",
    icon: "ni ni-collection text-primary",
    component: AppRequest,
    layout: "/admin",
    isView: false,
  },
  {
    path: "/agent",
    name: "Create Employee ID",
    icon: "ni ni-collection text-dark",
    component: Agent,
    layout: "/admin",
    isView: true,
  },
  {
    path: "/Approval",
    name: "Approval Plot",
    icon: "ni ni-collection text-dark",
    component: Approval,
    layout: "/admin",
    isView: false,
  },
  {
    path: "/CertificateOfConfirmation",
    name: "Certificate Of Confirmation",
    icon: "ni ni-collection text-dark",
    component: CertificateOfConfirmation,
    layout: "/admin",
    isView: false,
  },
  {
    path: "/PaymentReceipt",
    name: "Payment Receipt",
    icon: "ni ni-collection text-dark",
    component: PaymentReceipt,
    layout: "/admin",
    isView: false,
  },
  {
    path: "/SaleOrder",
    name: "Sale Order",
    icon: "ni ni-collection text-dark",
    component: SaleOrder,
    layout: "/admin",
    isView: false,
  },
  {
    path: "/plotselection",
    name: "Plot Selection",
    icon: "ni ni-collection text-yellow",
    component: Inventory,
    layout: "/admin",
    isView: false,
  },
  {
    path: "/planbuilder",
    name: "Payment Plan Builder",
    icon: "ni ni-collection text-blue",
    component: PlanBuilder,
    layout: "/admin",
    isView: false,
  },
  {
    path: "/PaymentStages",
    name: "Payment Stages",
    icon: "ni ni-collection text-dark",
    component: PaymentStages,
    layout: "/admin",
    isView: false,
  },

  {
    // path: "/lead",

    name: "CRM",
    icon: "ni ni-single-02 text-red",
    // component: Leads,
    // layout: "/admin",
    // defaultStatus: "Customer Relationship Management",
    isView: true,
    subNav: [
      // {
      //   // path: "/dashboard",
      //   name: "Customer Relationship Management",
      //   // icon: "ni ni-chart-pie-35 text-primary",
      //   // component: Dashboard,
      //   // layout: "/admin",
      // },
      {
        path: "/dashboard",
        name: "Dashboard",
        icon: "ni ni-chart-pie-35 text-dark",
        component: Dashboard,
        layout: "/admin",
      },
      {
        path: "/campaign",
        name: "Campaign",
        icon: "ni ni-collection text-dark",
        component: Contacts,
        layout: "/admin",
      },
      {
        path: "/Payments",
        name: "Payments",
        icon: "ni ni-collection text-dark",
        component: Payments,
        layout: "/admin",
      },
      {
        path: "/ViewTransferRecords",
        name: "View Transfer Records",
        icon: "ni ni-collection text-dark",
        component: ViewTransferRecords,
        isView: true,
        layout: "/admin",
      },
      {
        path: "/ApprovalReceipt",
        name: "ApprovalReceipt",
        icon: "ni ni-collection text-dark",
        component: ApprovalReceipt,
        isView: false,
        layout: "/admin",
      },
      {
        path: "/lead",
        name: "Leads",
        icon: "ni ni-collection text-dark",
        component: Leads,
        layout: "/admin",
      },
      // {
      //   path: "/viewCustomerDetail",
      //   name: "View customer Detail",
      //   icon: "ni ni-collection text-dark",
      //   component: ViewCustomerDetail,
      //   layout: "/admin",
      // },
      {
        path: "/ViewQuotationDetail",
        name: "View All Quotation",
        icon: "ni ni-collection text-dark",
        component: ViewQuotationDetail,
        layout: "/admin",
      },
      {
        path: "/viewSaleOrderDetail",
        name: "View All Sale Order",
        icon: "ni ni-collection text-dark",
        component: AllSaleOrder,
        layout: "/admin",
      },

      {
        path: "/salequotation",
        // name: "Sales Quotation",
        // icon: "ni ni-collection text-dark",
        component: SaleQotation,
        layout: "/admin",
        // isView: false,
      },
    ],
  },

  {
    name: "Inventory",
    icon: "ni ni-single-02 text-red",

    isView: true,
    subNav: [
      {
        path: "/dasboardinventory",
        name: "Dashboard Inventory",
        icon: "ni ni-chart-pie-35 text-dark",
        component: DashboardInventory,
        layout: "/admin",
      },
      {
        path: "/invent",
        name: "Inventory",
        icon: "ni ni-collection text-dark",
        component: Invent,
        layout: "/admin",
      },
    ],
  },

  {
    name: "Support",
    icon: "far fa-question-circle text-red",

    isView: true,
    subNav: [
      // {
      //   path: "/dasboardinventory",
      //   name: "Dashboard Inventory",
      //   icon: "ni ni-chart-pie-35 text-dark",
      //   component: DashboardInventory,
      //   layout: "/admin",
      // },
      {
        path: "/support",
        name: "Support",
        icon: "ni ni-collection text-dark",
        component: Support,
        layout: "/admin",
      },
      {
        path: "/viewallsupport",
        name: "View All Support",
        icon: "ni ni-collection text-dark",
        component: ViewAllSupport,
        layout: "/admin",
      },
    ],
  },

  {
    // path: "/lead",
    // name: "Human Relationship Management",
    name: "HRM",
    icon: "ni ni-ni ni-badge text-success",
    // component: Leads,
    // layout: "/admin",
    // subNav: [
    //   {
    //     path: "/viewCustomerDetail",
    //     name: "View customer Detail",
    //     icon: "ni ni-single-02 text-yellow",
    //     component: ViewCustomerDetail,
    //     layout: "/admin",
    //   },
    // ]
  },
  {
    // path: "/lead",
    // name: "Material Management",
    name: "MM",
    icon: "ni ni-ni ni-paper-diploma text-danger",
    // component: Leads,
    // layout: "/admin",
    // subNav: [
    //   {
    //     path: "/viewCustomerDetail",
    //     name: "View customer Detail",
    //     icon: "ni ni-single-02 text-yellow",
    //     component: ViewCustomerDetail,
    //     layout: "/admin",
    //   },

    // ]
  },
  {
    // path: "/lead",
    // name: "Finance Management",
    name: "FM",
    icon: "ni ni-ni ni-building text-blue",
    // component: Leads,
    // layout: "/admin",
    // subNav: [
    //   {
    //     path: "/viewCustomerDetail",
    //     name: "View customer Detail",
    //     icon: "ni ni-single-02 text-yellow",
    //     component: ViewCustomerDetail,
    //     layout: "/admin",
    //   },

    // ]
  },
  // {
  //   path: "/lead2",
  //   name: "Leads2",
  //   icon: "ni ni-collection text-danger",
  //   component: Leads2,
  //   layout: "/admin",
  // },
  {
    path: "/instagram",
    // name: "form",
    // icon: "ni ni-circle-08 text-pink",
    component: Instagram,
    layout: "/auth",
  },
  {
    path: "/youtube",
    // name: "form",
    // icon: "ni ni-circle-08 text-pink",
    component: Youtube,
    layout: "/auth",
  },
  {
    path: "/login",
    //  name: "Login",
    // icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/forget",
    //name: "Forget",
    //icon: "ni ni-key-25 text-info",
    component: Forget,
    layout: "/auth",
  },
  {
    path: "/reset",
    //name: "ResetPassword",
    //icon: "ni ni-circle-08 text-pink",
    component: ResetPassword,
    layout: "/auth",
  },
];
export default routesDev;
