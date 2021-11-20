import store from "@/store";
import { EXTERNAL_URL } from "@/env";

// APPEND HASH TOKEN TO URL
const urlHash = (url) => {
  if (url.includes("?")) return `${url}&timestamp=${new Date().getTime()}`;
  else return `${url}?timestamp=${new Date().getTime()}`;
};

// GET AUTH TYPE
const getAuthType = () => {
  let types = ["school", "teacher", "parent", "student"];
  return store.state.auth.token
    ? types[Number(store.getters["auth/getAuthAccount"])]
    : false;
};

// PROTECT ROUTE ENTRY BY ACCOUNT TYPE
const isRouteAccessValid = (access_list = []) => {
  if (access_list.length)
    return access_list.includes(getAuthType()) || access_list.includes("all")
      ? true
      : false;
  else return true;
};

// REDIRECT TO ESTERNAL MICRO FRONTEND ROUTES
const externalPageRedirect = (path) => {
  let environment = process.env.NODE_ENV;
  let account = getAuthType();

  let url = EXTERNAL_URL(account, path, environment);
  location.href = environment === "development" ? url.dev : url.prod;
};

// GENERATE MICRO FRONTEND PORTS
const generateAppPort = (app) => {
  switch (app) {
    case "catchup":
      return "8091";
    case "lms":
      return "8092";
    case "report-card":
      return "8094";
    case "test":
      return "8096";
    default:
      return "8080";
  }
};

export { urlHash, externalPageRedirect, isRouteAccessValid, generateAppPort };
