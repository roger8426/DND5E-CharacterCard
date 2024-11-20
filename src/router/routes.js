const routes = [
  {
    path: "/",
    name: "home",
    title: "home",
    component: () => import("@/components/Index.vue"),
  },
  {
    path: "/charactor",
    name: "charactor",
    title: "charactor",
    component: () => import("@/components/CharactorCard.vue"),
  }
];

export default routes;
