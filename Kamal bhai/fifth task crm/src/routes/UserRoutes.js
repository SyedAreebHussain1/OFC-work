import Index from "views/Index.js";
import Leads from "views/Leads/container";
import Contacts from "views/Contacts/container";
import Dashboard from "views/Dashboard/container";
import Inventory from "views/Inventory/container";
import Agent from "views/Agent/container";
import Invent from "../views/Invent/container";
import SaleQotation from "views/SaleQotation/container";
import ViewCustomerDetail from "views/ViewCustomerDetail/container";
import DashboardInventory from "views/DashboardInventory/container";
import SaleOrder from "views/SaleOrder/container";
import PaymentReceipt from "views/PaymentReceipt/container";
import ViewQuotationDetail from "views/ViewQuotationDetail/container";
import AllSaleOrder from "views/AllSaleOrder/container";
import Payments from "views/Payments/container";
import PaymentStages from "../views/PaymentStages/container";
import PlotChangeApproval from "views/PlotChangeApproval/container";
import Support from "../views/Support/container";
import ViewAllSupport from "../views/ViewAllSupport/container";
import Transfer from "views/Transfer/container/";
import PlotTransferApproval from "views/PlotTransferApproval/container/PlotTransferApproval";
import Settings from "views/Settings/container";
import WalletDashboard from "views/WalletDashboard/container/index";
import ApprovalReceipt from "views/ApprovalReceipt/container";
import AppRequest from "views/AppRequest/container";
import CertificateOfConfirmation from "views/CertificateOfConfirmation/container";
import FilePrinting from "views/FilePinting/container";
import Paymentbanks from "views/PaymentBank/container";
import PlotCancelListAgent from "views/PlotCancelListAgent/container";
import TransferApplicationForm from "views/TransferApplicationForm/container";
import AddRole from "views/AddRole/container";
import LeadsV2 from "views/V2/Leads/container";
import InventoryV2 from "views/V2/Inventory/container";
import QuotationList from "views/V2/QuotationList/container";
import UserProfile from "views/Report/container";

let userRoutes = (assignModule) => {
  let routes = [
    {
      path: "/userprofile",
      name: "User",
      icon: "ni ni-chart-bar-32",
      component: UserProfile,
      layout: "/admin",
      isView: true,
    },
    {
      path: "/LeadsV2",
      name: "Leads",
      icon: "ni ni-chart-bar-32",
      component: LeadsV2,
      layout: "/admin",
      isView: true,
    },
    {
      path: "/invetoryV2",
      name: "inventory",
      icon: "fas fa-angle-right",
      component: InventoryV2,
      layout: "/admin",
      isView: false,
    },
    {
      path: "/QuotationList",
      name: "QuotationList",
      icon: "ni ni-chart-bar-32",
      component: QuotationList,
      layout: "/admin",
      isView: true,
    },
    {
      name: "Main Dashboard",
      path: "/index",
      component: Index,
      layout: "/admin",
      icon: "ni ni-chart-pie-35",
      isView: true,
    },
    // {
    //   path: "/AddRole",
    //   name: "Add Role",
    //   icon: "fa fa-plus",
    //   component: AddRole,
    //   layout: "/admin",
    //   isView: true,
    // },
  ];
  if (assignModule !== "" && assignModule) {
    assignModule?.map((item) => {
      let title = item.title;
      if (title === "saleOrder") {
        routes.push(
          {
            name: "View All Sale Order",
            path: "/viewSaleOrderDetail",
            component: AllSaleOrder,
            layout: "/admin",
            icon: "fas fa-angle-right",
            isView: true,
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
          }
        );
      }
      if (title === "adminDashboard") {
        routes.push({
          name: "Reporting Dashboard",
          path: "/dashboard",
          component: Dashboard,
          layout: "/admin",
          icon: "ni ni-chart-pie-35 ",
          isView: true,
        });
      }
      if (title === "employee") {
        routes.push({
          name: "Create Employee",
          path: "/agent",
          component: Agent,
          layout: "/admin",
          icon: "fas fa-angle-right",
          isView: true,
        });
      }
      if (title === "campaign") {
        routes.push({
          path: "/campaign",
          name: "Campaign",
          icon: "fas fa-angle-right",
          component: Contacts,
          layout: "/admin",
          isView: true,
        });
      }
      if (title === "lead") {
        routes.push(
          {
            path: "/lead",
            name: "Confirm Leads",
            icon: "fas fa-angle-right",
            component: Leads,
            layout: "/admin",
            isView: true,
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
            path: "/salequotation",
            component: SaleQotation,
            layout: "/admin",
            isView: false,
          }
        );
      }
      if (title === "customer") {
        routes.push(
          {
            path: "/viewCustomerDetail",
            name: "View customer Detail",
            icon: "fas fa-angle-right",
            component: ViewCustomerDetail,
            layout: "/admin",
            isView: true,
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
            path: "/transferRequest",
            name: "Transfer Application",
            icon: "fas fa-poll-h",
            component: TransferApplicationForm,
            layout: "/admin",
            isView: false,
          }
        );
      }
      if (title === "payment") {
        routes.push({
          path: "/Payments",
          name: "Payments",
          icon: "fas fa-angle-right",
          component: Payments,
          layout: "/admin",
          isView: true,
        });
      }
      if (title === "saleQuotation") {
        routes.push(
          {
            path: "/ViewQuotationDetail",
            name: "View All Sale Quotation",
            icon: "fas fa-angle-right",
            component: ViewQuotationDetail,
            layout: "/admin",
            isView: true,
          },
          {
            path: "/SaleOrder",
            name: "Sale Order",
            icon: "fas fa-angle-right",
            component: SaleOrder,
            layout: "/admin",
            isView: false,
          }
        );
      }
      if (title === "approvalReceipt") {
        routes.push({
          path: "/ApprovalReceipt",
          name: "Approval Receipt",
          icon: "fas fa-poll-h",
          component: ApprovalReceipt,
          layout: "/admin",
          isView: true,
        });
      }
      if (title === "plotChange") {
        routes.push({
          path: "/PlotChangeApproval",
          name: "Plot Change Request",
          icon: "fas fa-angle-right",
          component: PlotChangeApproval,
          layout: "/admin",
          isView: true,
        });
      }
      if (title === "walletDashboard") {
        routes.push({
          path: "/WalletDashboard",
          name: "WalletDashboard",
          icon: "fas fa-angle-right",
          component: WalletDashboard,
          layout: "/admin",
          isView: true,
        });
      }
      if (title === "filePrinting") {
        routes.push({
          path: "/FilePrinting",
          name: "FilePrinting",
          icon: "fas fa-angle-right",
          component: FilePrinting,
          layout: "/admin",
          isView: true,
        });
      }
      if (title === "paymentBank") {
        routes.push({
          path: "/Payment banks",
          name: "Payment banks",
          icon: "fas fa-poll-h",
          component: Paymentbanks,
          layout: "/admin",
          isView: true,
        });
      }
      if (title === "plotCancel") {
        routes.push({
          name: "Plot Cancel Request",
          icon: "fas fa-poll-h",
          path: "/plotCancelRequest",
          component: PlotCancelListAgent,
          layout: "/admin",
          isView: true,
        });
      }
      if (title === "inventory") {
        routes.push(
          {
            path: "/dasboardinventory",
            name: "Dashboard Inventory",
            icon: "ni ni-chart-pie-35 ",
            component: DashboardInventory,
            layout: "/admin",
            isView: true,
          },
          {
            path: "/invent",
            name: "Inventory",
            icon: "fas fa-angle-right",
            component: Invent,
            layout: "/admin",
            isView: true,
          }
        );
      }
      if (title === "support") {
        routes.push(
          {
            path: "/support",
            name: "Support",
            icon: "fas fa-angle-right",
            component: Support,
            layout: "/admin",
            isView: true,
          },
          {
            path: "/viewallsupport",
            name: "View All Support",
            icon: "fas fa-angle-right",
            component: ViewAllSupport,
            layout: "/admin",
            isView: true,
          }
        );
      }
      if (title === "setting") {
        routes.push({
          path: "/settings",
          name: "Settings",
          icon: "ni ni-settings",
          component: Settings,
          layout: "/admin",
          isView: true,
        });
      }
      if (title === "transferApproval") {
        routes.push({
          path: "/PlotTransferApproval",
          name: "Plot Transfer Approval",
          icon: "fas fa-angle-right",
          component: PlotTransferApproval,
          layout: "/admin",
          isView: false,
        });
      }
    });
  }
  return routes;
};
export default userRoutes;
