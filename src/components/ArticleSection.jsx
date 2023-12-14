import { useEffect, useState } from "react";
import SelectedArticle from "./SelectedArticle.jsx/SelectedArticle";
import { getArticleById } from "../api";
import { Link, useParams } from "react-router-dom";

function ArticleSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((data) => {
      setArticle((article) => ({ ...article, ...data.article }));
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="d-flex flex-column align-items-center">
      {isLoading ? (
        <h2 className="text-center mt-5 fw-bold">LOADING ...</h2>
      ) : (
        <div className="d-flex flex-column align-items-center">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-arrow-left-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
            </svg>
          </Link>
          <SelectedArticle
            topic={article.topic}
            author={article.author}
            created_at={article.created_at}
            title={article.title}
            image_url={article.article_img_url}
            votes={article.votes}
            comment_count={article.comment_count}
            article_id={article.article_id}
          />
        </div>
      )}
    </div>
  );
}

export default ArticleSection;
