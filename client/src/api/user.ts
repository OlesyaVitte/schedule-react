import { instance } from ".";
import * as api from "../../../../../schedule-react/client/src/types/api";

const baseURL = "user/";

export default {
  register(name: string, surname: string, email: string, password: string) {
    return instance
      .post<api.BaseResponseAPI>(`${baseURL}register`, {
        name,
        surname,
        email,
        password,
      })
      .then((res) => res.data);
  },
  login(email: string, password: string) {
    return instance
      .post<api.BaseResponseAPI>(`${baseURL}login`, {
        email,
        password,
      })
      .then((res) => res.data);
  },
  logout() {
    return instance.get("logout").then((res) => res.data);
  },
  deleteUser(id: string) {
    return instance
      .delete<api.BaseResponseAPI>(`${baseURL}delete:` + id)
      .then((res) => res.data);
  },
  getAuthUser() {
    return instance.get<api.UserGetAPI>("/").then((res) => res.data);
  },
};
