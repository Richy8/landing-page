const errorRoutes = [
  {
    path: "/*",
    name: "NotFoundError",
    component: () =>
      import(
        /* webpackChunkName: "errorRoute" */ "@/modules/error/pages/not-found.vue"
      ),
    meta: {
      guest: true,
    },
  },
];

export default errorRoutes;
