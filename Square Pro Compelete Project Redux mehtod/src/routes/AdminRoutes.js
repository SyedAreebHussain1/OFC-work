import {
  ProjectOutlined,
  PieChartFilled,
  UserAddOutlined,
  SettingFilled,
  FolderAddOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";

import AddUser from "../views/AddUser";
import AddProject from "../views/AddProject";
import Dashboard from "../views/Dashboard";
import Settings from "../views/Settings";
import CreateAssignModule from "../views/AddUser/components/CreateAssignModule";
import AddFeature from "../views/AddProject/components/AddFeature";
import AddPlot from "../views/AddProject/components/AddPlot";
import ProjectRequest from "../views/ProjectRequest";
import CustomerList from "../views/CustomerList";
import AgentList from "../views/AgentList";
import AgencyList from "../views/AgencyList";
import PlotRequest from "../views/PlotRequest";
import SupportChat from "../views/SupportChat";


let adminRoutes = (assignModule) => {
  let routes = [
    {
      name: "DASHBOARD",
      path: "/dashboard",
      component: Dashboard,
      layout: "/user",
      icon: <PieChartFilled />,
      isview: true,
    },
    {
      name: "Assign Module",
      path: "/assignModule",
      component: CreateAssignModule,
      layout: "/user",
      isview: false,
    },
    {
      name: "Add Feature",
      path: "/addFeature",
      component: AddFeature,
      layout: "/user",
      isview: false,
    },
    {
      name: "Add Plot",
      path: "/addPlot",
      component: AddPlot,
      layout: "/user",
      isview: false,
    },
  ];
  if (assignModule !== "" && assignModule) {
    assignModule?.map((item) => {
      let title = item.module.title;
      if (title === "add_user") {
        routes.push({
          name: "ADD EMPLOYEE",
          path: "/add_user",
          component: AddUser,
          layout: "/user",
          icon: <UserAddOutlined />,
          isview: true,
        });
      }
      if (title === "add_project") {
        routes.push({
          name: "PROJECT REGISTRATION",
          path: "/add_project",
          component: AddProject,
          layout: "/user",
          icon: <FolderAddOutlined />,
          isview: true,
        });
      }
      if (title === "project_request") {
        routes.push({
          name: "PROJECT REQUEST",
          path: "/project_request",
          component: ProjectRequest,
          layout: "/user",
          icon: <ProjectOutlined />,
          isview: true,
        });
      }
      if (title === "plot_request") {
        routes.push({
          name: "PLOT REQUEST",
          path: "/plot_request",
          component: PlotRequest,
          layout: "/user",
          icon: <ProjectOutlined />,
          isview: true,
        });
      }
      if (title === "agency") {
        routes.push({
          name: "AGENCY LIST",
          path: "/agency_list",
          component: AgencyList,
          layout: "/user",
          icon: <UnorderedListOutlined />,
          isview: true,
        });
      }
      if (title === "support_chat") {
        routes.push({
          name: "SUPPORT CONVERSATION",
          path: "/support_chat",
          component: SupportChat,
          layout: "/user",
          // icon: <CustomerServiceFilled />,
          isview: true,
        });
      }
      if (title === ("project_setting" || "site_setting")) {
        routes.push({
          name: "SETTINGS",
          path: "/settings",
          component: Settings,
          layout: "/user",
          icon: <SettingFilled />,
          isview: true,
        });
      }
      if (title === "agent_list") {
        routes.push({
          name: "AGENT LIST",
          path: "/agent_list",
          component: AgentList,
          layout: "/user",
          icon: <UnorderedListOutlined />,
          isview: true,
        });
      }
      if (title === "customer_list") {
        routes.push({
          name: "CUSTOMER LIST",
          path: "/customer_list",
          component: CustomerList,
          layout: "/user",
          icon: <UnorderedListOutlined />,
          isview: true,
        });
      }
    });
  }
  return routes;
};
export default adminRoutes;
