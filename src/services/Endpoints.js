import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://landing-back-end.herokuapp.com",
  headers: {
    "Content-type": "application/json",
  },
});

export const getAll = () => {
  return httpClient.get("/admin", { headers: { Authorization: "Bearer " + localStorage.getItem("jwtToken") } });
};

export const exportExcel = () => {
  return httpClient.get("/admin/excel", {
    responseType: "blob",
    headers: { Authorization: "Bearer " + localStorage.getItem("jwtToken") },
  });
};

export const create = (data) => {
  return httpClient.post("/admin", data);
};

export const login = (data) => {
  return httpClient.post(
    "/token",
    {},
    {
      auth: {
        username: data.name,
        password: data.pass,
      },
    }
  );
};