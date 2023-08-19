import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://3d98-46-71-246-220.ngrok-free.app/",
});

axiosInstance.defaults.headers.common["Content-Type"] = "application/json";
