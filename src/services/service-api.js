import axios from "axios";
import { urlHash } from "@/services/service-route";
import {} from "@/env";
import {
  API_VERSION,
  API_BASE_URL,
  NEW_API_VERSION,
  NEW_API_BASE_URL,
} from "@/env";

// SERVICE API CLSS
class serviceApi {
  base = "report";
  url = "";

  // GENERATE BASE URL
  service(module = this.base) {
    axios.defaults.baseURL = `${API_BASE_URL}/`;

    this.url =
      module === "old" ? `/${API_VERSION}` : `/${module}/${API_VERSION}`;
    return this;
  }

  // CALL THIS SERVICE FOR NEW VERSION 2.1 API'S
  newService(module = this.base) {
    axios.defaults.baseURL = `${NEW_API_BASE_URL}/`;

    this.url =
      module === "old"
        ? `/${NEW_API_VERSION}`
        : `/${module}/${NEW_API_VERSION}`;
    return this;
  }

  // APEND URL TO BASE API
  appendToBase(url) {
    return (this.url += url);
  }

  // GET API REQUEST
  async fetch(url) {
    try {
      let response = await axios.get(
        urlHash(this.appendToBase(url)),
        this.setupHeaders()
      );
      return response.data;
    } catch (err) {
      this.handleErrors(err);
    }
  }

  // POST API REQUEST
  async push(url, payload = null, is_attach = false) {
    try {
      let response = await axios.post(
        this.appendToBase(url),
        payload,
        this.setupHeaders(is_attach)
      );
      return response.data;
    } catch (err) {
      this.handleErrors(err);
    }
  }

  // UPDATE API REQUEST
  async update(url, payload = {}, is_attach = false) {
    try {
      let response = await axios.put(
        this.appendToBase(url),
        payload,
        this.setupHeaders(is_attach)
      );
      return response.data;
    } catch (err) {
      this.handleErrors(err);
    }
  }

  // DELETE API REQUEST
  async remove(url, payload = {}) {
    try {
      let response = await axios.delete(this.appendToBase(url), {
        data: payload,
        ...this.setupHeaders(),
      });

      return response.data;
    } catch (err) {
      this.handleErrors(err);
    }
  }

  // HABDLE API REQUEST ERRORS
  async handleErrors(err) {
    console.log(err);
    console.log(err.response);
    return false;
  }

  // SETUP REQUEST
  setupHeaders(attach = false) {
    return attach
      ? {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("gradelyAuthToken")}`,
          },
        }
      : {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("gradelyAuthToken")}`,
          },
        };
  }

  // RETURN DATA SAVED IN STORE
  deliverFromStore(data = [], pagination = {}) {
    return {
      code: 200,
      data,
      pagination,
    };
  }
}

export const $serviceApi = new serviceApi();
