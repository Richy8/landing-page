import { $serviceApi as api } from "@/services/service-api";

const routes = {
  login: "/login",
  logout: "/logout",
  validate: "/validate",
};

export default {
  // HANDLE USER LOGIN
  async loginUser({ commit }, data) {
    let response = await api.service("old").push(routes.login, data);
    if (response) {
      if (response.code === 200) {
        commit("AUTH_SUCCESS", { response: response.data, auth: true });
        return response;
      }
    }
  },

  // CHECK IF THE TOKEN HAS ACCESS
  async checkTokenAccess({ commit }, token) {
    let response = await api.service("old").push(routes.validate, { token });
    return response === false ? commit("AUTH_LOGOUT") : true;
  },

  // HANDLE USER LOGOUT
  async logoutUser({ commit }) {
    let response = await api.service("old").push(routes.logout);
    if (response) {
      commit("AUTH_LOGOUT");
      return response;
    }
  },
};
