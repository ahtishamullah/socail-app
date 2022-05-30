import loginApi from "../api/loginApi";
import { useMutation } from "react-query";
export const LoginHook = () => {
  return useMutation("loginApi", async (person) => {
    return loginApi.post("", person);
  });
};
