import Vue from "vue";
import VueRouter from "vue-router";
import middlewares from "@/middlewares";

// MODULES ROUTES
import tutorRoutes from "@/modules/tutor/tutor-routes";
import errorRoutes from "@/modules/error/error-routes";

Vue.use(VueRouter);

const routes = [...tutorRoutes, ...errorRoutes];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  duplicateNavigationPolicy: "reload",
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return { selector: to.hash };
    else if (savedPosition) return savedPosition;
    else
      return {
        x: 0,
        y: 0,
      };
  },
});

// NAVIGATION GUARD MIDDLEWARE
router.beforeEach(async (to, from, next) => middlewares(to, from, next));

export default router;
