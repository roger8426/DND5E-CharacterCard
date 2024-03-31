const routes = [
  {
    path: "/",
    name: "home",
    title: "home",
    component: () => import("@/components/Index.vue"),
  },
];

export default routes;
