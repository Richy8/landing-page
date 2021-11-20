import Vue from "vue";

// IMPORT THIRD PARTY PLUGINS
import VueProgressiveImage from "vue-progressive-image";
import VueLazyload from "vue-lazyload";
import Meta from "vue-meta";
import PortalVue from "portal-vue";
import VuePlyr from "vue-plyr";
import AOS from "aos";
import { mixin as clickaway } from "vue-clickaway";

Vue.use(Meta);
Vue.use(VueLazyload);
Vue.use(VueProgressiveImage);
Vue.use(PortalVue);
Vue.use(VuePlyr, { plyr: {} });
Vue.mixin(clickaway);
AOS.init({
  once: true,
});
