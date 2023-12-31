const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("pages/ComingSoon.vue"),
      },
      {
        path: "cards",
        name: "cards",
        component: () => import("pages/CardsDashboard.vue"),
      },
      {
        path: "payments",
        name: "payments",
        component: () => import("pages/ComingSoon.vue"),
      },
      {
        path: "credit",
        name: "credit",
        component: () => import("pages/ComingSoon.vue"),
      },
      {
        path: "settings",
        name: "settings",
        component: () => import("pages/ComingSoon.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
