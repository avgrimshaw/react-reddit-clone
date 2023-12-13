import { useEffect, useState } from "react";
import SelectedArticle from "./SelectedArticle/SelectedArticle";
import { getArticleById } from "../api";
import { useParams } from "react-router-dom";

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
    <>
      {isLoading ? (
        <h2 className="text-center mt-5 fw-bold">LOADING ...</h2>
      ) : (
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
      )}
    </>
  );
}

export default ArticleSection;
