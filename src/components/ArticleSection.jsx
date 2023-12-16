import { useEffect, useState } from "react";
import SelectedArticle from "./SelectedArticle.jsx/SelectedArticle";
import { getArticleById } from "../api";
import { Link, useParams } from "react-router-dom";
import CommentsList from "./CommentsList";

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
        <div className="d-flex flex-column align-items-center fs-4">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-caret-left-square"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              <path d="M10.205 12.456A.5.5 0 0 0 10.5 12V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4a.5.5 0 0 0 .537.082" />
            </svg>
          </Link>
          <SelectedArticle
            topic={article.topic}
            author={article.author}
            body={article.body}
            created_at={article.created_at}
            title={article.title}
            image_url={article.article_img_url}
            votes={article.votes}
            comment_count={article.comment_count}
            article_id={article.article_id}
          />
          <CommentsList article_id={article_id} />
        </div>
      )}
    </div>
  );
}

export default ArticleSection;
