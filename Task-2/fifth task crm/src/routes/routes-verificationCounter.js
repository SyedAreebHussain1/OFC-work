import VerificationCounter from "views/VerificationCounter/container";

var routesVerificationCounter = [
  {
    name: "Selling/Verification Process",
    icon: "fas fa-clipboard-check",
    isView: true,
    subNav: [
      {
        path: "/verificationCounter",
        name: "Form Verification",
        icon: "fas fa-angle-right",
        component: VerificationCounter,
        layout: "/admin",
        isView: true,
      },
    ],
  },
];

export default routesVerificationCounter;
