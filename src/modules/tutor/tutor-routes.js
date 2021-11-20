const tutorRoutes = [
  {
    path: "/tutoring",
    component: () =>
      import(/* webpackChunkName: "tutor" */ "@/layouts/lander-base-layout"),

    children: [
      {
        path: "",
        name: "TutorLander",
        component: () =>
          import(
            /* webpackChunkName: "tutor" */ "@/modules/tutor/pages/tutor-lander"
          ),
        meta: {
          guest: true,
        },
      },
    ],
  },
];

export default tutorRoutes;
