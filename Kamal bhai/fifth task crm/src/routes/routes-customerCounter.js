import CustomerCounter from "views/CustomerCounter/container/index";

var routesCustomerCounter = [
  {
    name: "Selling/Verification Process",
    icon: "fas fa-clipboard-check",
    isView: true,
    subNav: [
      {
        path: "/customerCounter",
        name: "Form Submission",
        icon: "fas fa-angle-right",
        component: CustomerCounter,
        layout: "/admin",
        isView: true,
      },
    ],
  },
];

export default routesCustomerCounter;
