import { Directory } from "../Directory";

import { Api } from "./Api";
export const Auth = {
  Signin: async (usrtag, pwd) => {
    return await Api.post(Directory.api.directories.signin, {
      usrtag,
      pwd,
    });
  },
};
