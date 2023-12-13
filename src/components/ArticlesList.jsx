import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard/ArticleCard";

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data.articles);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <h2 className="text-center mt-5 fw-bold">LOADING ...</h2>
      ) : (
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
      )}
    </>
  );
}

export default ArticlesList;
