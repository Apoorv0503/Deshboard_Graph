export const navItems = [
  { name: "Dashboard", type: "dashboard", path: "/" },
  {
    name: "Customers",
    type: "customers",
    children: [
      { name: "Current", path: "/customer/current" },
      { name: "New", path: "/customer/new" },
      { name: "Negotiating", path: "/customer/negotiate" },
    ],
  },
  { name: "All reports", type: "reports", path: "/report" },
  { name: "Geography", type: "geography", path: "/geography" },
  { name: "Conversations", type: "conversation", path: "/conversation" },
  { name: "Deals", type: "deals", path: "/deal" },
  { name: "Export", type: "export", path: "/export" },
];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};
