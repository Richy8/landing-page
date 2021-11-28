import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth";
import dbTutor from "@/modules/tutor/dbTutor";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    dbTutor
  },
});
