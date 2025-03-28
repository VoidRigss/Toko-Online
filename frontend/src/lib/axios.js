import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "mongodb+srv://admin:admin123@cluster0.ffnge.mongodb.net/",
});
