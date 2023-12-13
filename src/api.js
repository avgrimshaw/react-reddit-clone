import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-reddit-clone.onrender.com/api",
});

export const getArticles = () => {
  return instance.get("/articles").then(({ data }) => data);
};
