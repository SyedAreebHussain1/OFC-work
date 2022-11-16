import { combineReducers } from "redux";

import Login from "views/Login/reducer";
import FetchContacts from "views/Contacts/reducer";
import ForgetPass from "views/Forget/reducer";
import Lead from "views/Leads/reducer";
import Data from "views/Dashboard/reducers";
import Sector from "../helpers/GetSector/reducer";
import SourceHelper from "../helpers/GetSources/reducer";
import Reset from "views/ResetPassword/reducer";
import AgentHelper from "../helpers/GetAllAgent/reducer";
import ViewDetail from "views/ViewCustomer/reducer";
import Invent from "../helpers/GetProjects/reducer";
import Mod from "views/Invent/Mod/reducer";
import ViewCustomerDetail from "views/ViewCustomerDetail/reducer";
import AppRequest from "views/AppRequest/reducer";
import Recording from "views/ViewCustomerDetail/helpers/Recording/reducer";
import Inventory from "views/Inventory/reducer";
import GetTeam from "../helpers/GetTeam/reducer";
import PlotType from "../helpers/PlotType/reducer";
import GetPlotStatus from "../helpers/GetPlotStatus/reducer";
import GetProjectFile from "../helpers/GetProjectFile/reducer";
// import Recording from"views/Contacts/helpers/Recording/reducer";
import AgentData from "views/Agent/reducer";
import Campaign from "components/Headers/Header/reducer";
import OrderReducer from "../helpers/GetOrder/reducer";
import RoleReducer from "../helpers/GetUserRole/reducer";
import SaleQotation from "views/SaleQotation/reducer";
import Dashboard from "views/DashboardInventory/reducer";
import Projects from "components/Graph/ProjectsGraph/reducer";
import AllProjects from "components/Graph/AllProjectsGraph/reducer";
import AllCampaign from "components/Graph/SocialCampaign/reducer";
import SuccessfullGraph from "components/Graph/SuccessfulLead/reducer";
import ApprovalRoutes from "views/Approval/reducer";
import Notifications from "components/Navbars/AdminNavbar/reducer";
import SalesOrder from "views/SaleOrder/reducer";
import PaymentReceipt from "views/PaymentReceipt/reducer";
import ViewQuotation from "views/ViewQuotationDetail/reducer";
import ViewSaleOrder from "views/AllSaleOrder/reducer";
import CallingGraph from "components/Graph/CallingGraph/reducer";
import GetPlotNo from "../helpers/GetPlotNo/reducer";
import GetPlotDetails from "../../views/Invent/GetPlotDetails/reducer";
import Payments from "views/Payments/reducer";
import GetSaleOrder from "../helpers/GetSaleOrder/reducer";
import GetSale from "views/PaymentStages/reducer";
import ApprovalReceipt from "views/ApprovalReceipt/reducer";
import CertificateOfConfirmation from "views/CertificateOfConfirmation/reducer";
import BookingForm from "views/BookingForm/reducer";
// <<<<<<< HEAD
import Support from "views/Support/reducer";
import ViewAllSupport from "views/ViewAllSupport/reducer";

// =======
// >>>>>>> 983fd923acf8ca2c5262ef128a350d040b0e9db6
import LoginUserWithJWT from "../helpers/JwtTimer/reducer";
import FileInfo from "views/FileInfo/reducer";
import Testing from "views/testing/reducer";
import FileUpdate from "views/FileUpdate/reducer";
import PlotChangeApproval from "views/PlotChangeApproval/reducer";
import ChangePlotTypeReq from "views/ChangePlotTypeReq/reducer";
import Transfer from "views/Transfer/reducer";
import CustomerCounter from "views/CustomerCounter/reducer";
import VerificationCounter from "views/VerificationCounter/reducer";
import CashierCounter from "views/CashierCounter/reducer";
import FormIssue from "views/FormIssue/reducer";
import ViewAllAgentForms from "views/ViewAllAgentForms/reducer";
import TransferReceiptForm from "views/TransferRecieptForm/reducer";
import Wallet from "views/Wallets/reducer";
import CompanyWallet from "views/CompanyWallet/reducer";
import WalletRequestsFinance from "views/WalletRequests/reducer";
import PaymentBank from "views/PaymentBank/reducer";
import PlotTransferRequests from "views/ViewTransferRecords/reducer";
import paymentSchedule from "views/Settings/reducer";
import WalletDashboard from "views/WalletDashboard/reducer";
import filePrinting from "views/FilePinting/reducer";
import TransferReqFinance from "views/TransferReqFinance/reducer";
// import PlotCancelRequest from "views/PlotCancelRequest/reducer";
import TransferApprovalManger from "views/TransferApprovalManager/reducer";
import PlotCancelListAgent from "views/PlotCancelListAgent/reducer";
import PlotCancelListManager from "views/PlotCancelListManager/reducer";
import PlotCancelListAccounts from "views/PlotCancelListAccounts/reducer";
import TransferApplicationForm from "views/TransferApplicationForm/reducer";
import addRoles from "views/AddRole/reducer";
import Report from "views/Report/reducer"

export default combineReducers({
  Report:Report,
  addRoles: addRoles,
  login: Login,
  fetchContacts: FetchContacts,
  forget: ForgetPass,
  getProjectFile: GetProjectFile,
  getPlotDetails: GetPlotDetails,
  getSaleOrder: GetSaleOrder,
  lead: Lead,
  data: Data,
  sector: Sector,
  getPlotNo: GetPlotNo,
  saleQotation: SaleQotation,
  invent: Invent,
  agentHelper: AgentHelper,
  sourceHelper: SourceHelper,
  reset: Reset,
  plotType: PlotType,
  customer: ViewDetail,
  getPlotStatus: GetPlotStatus,
  viewCustomerDetail: ViewCustomerDetail,
  appRequest: AppRequest,
  recordingDetail: Recording,
  inventory: Inventory,
  customer: ViewDetail,
  agent: AgentData,
  getCampaign: Campaign,
  getTeam: GetTeam,
  orderHelper: OrderReducer,
  roleHelper: RoleReducer,
  approval: ApprovalRoutes,
  dashboardInventory: Dashboard,
  projectGraph: Projects,
  allProjectsGraph: AllProjects,
  getNotifications: Notifications,
  salesorder: SalesOrder,
  paymentreceipt: PaymentReceipt,
  viewquotation: ViewQuotation,
  AllSocialCampaign: AllCampaign,
  AllSuccessfullGraph: SuccessfullGraph,
  modal: Mod,
  viewsaleorder: ViewSaleOrder,
  callinggraph: CallingGraph,
  payments: Payments,
  getsale: GetSale,
  approvalReceipt: ApprovalReceipt,
  certificateOfConfirmation: CertificateOfConfirmation,
  JwtCredential: LoginUserWithJWT,
  testing: Testing,
  fileInfo: FileInfo,
  // <<<<<<< HEAD
  support: Support,
  viewAllSupport: ViewAllSupport,
  // =======
  fileupdate: FileUpdate,
  plotChangeApproval: PlotChangeApproval,
  changePlotTypeReq: ChangePlotTypeReq,
  transfer: Transfer,
  customerCounter: CustomerCounter,
  formIssue: FormIssue,
  viewAllAgentForms: ViewAllAgentForms,
  cashierCounter: CashierCounter,
  bookingForm: BookingForm,
  verificationCounter: VerificationCounter,
  transferReceipt: TransferReceiptForm,
  wallet: Wallet,
  compnaywallet: CompanyWallet,
  WalletRequestsFinance: WalletRequestsFinance,
  paymentBank: PaymentBank,
  plotTransferRequests: PlotTransferRequests,
  paymentSchedule: paymentSchedule,
  WalletDashboard: WalletDashboard,
  filePrinting: filePrinting,
  TransferReqFinance: TransferReqFinance,
  // PlotCancelRequest: PlotCancelRequest,
  TransferApprovalManger: TransferApprovalManger,
  PlotCancelListAgent: PlotCancelListAgent,
  PlotCancelListManager: PlotCancelListManager,
  PlotCancelListAccounts: PlotCancelListAccounts,
  TransferApplicationForm: TransferApplicationForm,
  // >>>>>>> 983fd923acf8ca2c5262ef128a350d040b0e9db6
});
