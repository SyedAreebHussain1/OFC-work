import FormIssue from "views/FormIssue/container";
import ViewAllAgentForms from "views/ViewAllAgentForms/container";

var routesFormIssue = [
  {
    name: "Selling/Verification Process",
    icon: "fas fa-clipboard-check",
    isView: true,
    subNav: [
      {
        path: "/FormIssue",
        name: "Create Form",
        icon: "fas fa-angle-right",
        component: FormIssue,
        layout: "/admin",
        isView: true,
      },
      {
        path: "/ViewAllAgentForms",
        name: "Generate Barcode & View Forms",
        icon: "fas fa-angle-right",
        component: ViewAllAgentForms,
        layout: "/admin",
        isView: true,
      },
    ],
  },
];

export default routesFormIssue;
