import Leads from "views/Leads/container";
import ResetPassword from "views/ResetPassword/container";
import Login from "views/Login/container";
import Forget from "views/Forget/container";
import Dashboard from "views/Dashboard/container";
import Inventory from "views/Inventory/container";
import Instagram from "views/Instagram/index.js";
import Youtube from "views/Youtube/index.js";
import ViewCustomerDetail from "views/ViewCustomerDetail/container";
import PlanBuilder from "views/PaymentPlanBuilder/container";
import SaleQotation from "views/SaleQotation/container";
import ViewQuotationDetail from "views/ViewQuotationDetail/container";

var routesRep = [
  {
    path: "/plotselection",
    name: "Plot Selection",
    icon: "ni ni-collection text-yellow",
    component: Inventory,
    layout: "/admin",
    isView: false,
  },
  {
    path: "/salequotation",
    component: SaleQotation,
    layout: "/admin",
    isView: false,
  },

  {
    name: "CRM",
    icon: "ni ni-single-02 text-info",
    isView: true,
    subNav: [
      {
        path: "/index",
        name: "Dashboard",
        icon: "ni ni-chart-pie-35 text-success",
        component: Dashboard,
        layout: "/admin",
      },

      {
        path: "/lead",
        name: "Leads",
        icon: "ni ni-collection text-danger",
        component: Leads,
        layout: "/admin",
      },
      // {
      //   path: "/viewCustomerDetail",
      //   name: "View customer Detail",
      //   icon: "ni ni-collection text-blue",
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
    ],
  },
  {
    name: "HRM",
    icon: "ni ni-ni ni-badge text-success",
  },
  {
    name: "MM",
    icon: "ni ni-ni ni-paper-diploma text-danger",
  },
  {
    name: "FM",
    icon: "ni ni-ni ni-building text-blue",
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
export default routesRep;
