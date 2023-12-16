import axios from "axios";

const redditCloneApi = axios.create({
  baseURL: "https://api-reddit-clone.onrender.com/api",
});

export const getArticles = () => {
  return redditCloneApi.get("/articles").then(({ data }) => data);
};

export const getArticleById = (article_id) => {
  return redditCloneApi.get(`/articles/${article_id}`).then(({ data }) => data);
};

export const patchArticleVotes = (article_id, votesBody) => {
  return redditCloneApi.get(`/articles/${article_id}`, votesBody);
};

export const getComments = (article_id) => {
  return redditCloneApi
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => data);
};

export const getUsers = () => {
  return redditCloneApi.get("/users").then(({ data }) => data);
};
