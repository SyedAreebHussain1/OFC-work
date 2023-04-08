import CashierCounter from "views/CashierCounter/container/index";

var routesCashierCounter = [
  {
    name: "Selling/Verification Process",
    icon: "fas fa-clipboard-check",
    isView: true,
    subNav: [
      {
        path: "/cashierCounter",
        name: "Cash Receipt Counter",
        icon: "fas fa-angle-right",
        component: CashierCounter,
        layout: "/admin",
        isView: true,
      },
    ],
  },
];

export default routesCashierCounter;
