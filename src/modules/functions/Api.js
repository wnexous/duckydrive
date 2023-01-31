import fetch from "node-fetch";
import { Directory } from "../Directory";

export const Api = {
  post: async (e, d) => {
    return await new Promise((resolve) => {
      fetch(Directory.api.origin + (`${e}`.startsWith("/") ? e : "/" + e), {
        body: typeof d == "object" ? JSON.stringify(d) : d,
        method: "post",
        mode: "cors",
        headers: {
          accept: "*/*",
          "content-type": "application/json;charset=UTF-8",
          "sec-fetch-mode": "cors",
        },
      })
        .then((r) => r.json())
        .then((data) => resolve(data))
        .catch((err) => resolve(err));
    });
  },
  get: async (e) => {
    return await new Promise((resolve) => {
      fetch(Directory.api.origin + (`${e}`.startsWith("/") ? e : "/" + e))
        .then((r) => r.json())
        .then((data) => resolve(data))
        .catch((err) => resolve(err));
    });
  },
};
