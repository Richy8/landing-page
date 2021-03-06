import { generateAppPort } from "@/services/service-route";

export const API_VERSION = "v2";
export const API_BASE_URL = "https://testapi.gradely.ng";

export const NEW_API_VERSION = "v2.1";
export const NEW_API_BASE_URL = "https://testapi.gradely.co";

export const APP_BASE_URL = "https://appdev.gradely.ng";

const BASE_DEV_URL = "http://localhost:";

export const LOGIN_URL = {
  dev: BASE_DEV_URL + "8085/login",
  prod: `${APP_BASE_URL}/login`,
};

const environment = process.env.NODE_ENV;

const environmentBase = () =>
  environment === "development" ? BASE_DEV_URL : APP_BASE_URL;

export const EXTERNAL_URL = (app, path) => {
  let getPort = environment === "development" ? generateAppPort(app) : "";
  return environmentBase() + getPort + "/" + app + path;
};
