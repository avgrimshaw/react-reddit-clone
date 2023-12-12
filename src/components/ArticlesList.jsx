import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard/ArticleCard";

function ArticlesList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data.articles);
    });
  }, []);

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        {articles.map(
          ({
            article_id,
            topic,
            author,
            created_at,
            title,
            article_img_url,
            votes,
            comment_count,
          }) => {
            return (
              <ArticleCard
                key={article_id}
                topic={topic}
                author={author}
                created_at={created_at}
                title={title}
                image_url={article_img_url}
                votes={votes}
                comment_count={comment_count}
              />
            );
          }
        )}
      </div>
    </>
  );
}

export default ArticlesList;
