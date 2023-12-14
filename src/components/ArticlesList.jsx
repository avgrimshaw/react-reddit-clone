import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard/ArticleCard";

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((data) => {
      setArticles((articles) => [...articles, ...data.articles]);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="d-flex flex-column align-items-center">
      {isLoading ? (
        <h2 className="text-center mt-5 fw-bold">LOADING ...</h2>
      ) : (
        <div className="d-flex flex-column align-items-center gap-4 mt-3">
          {articles.map(
            ({
              article_id,
              topic,
              author,
              body,
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
                  body={body}
                  created_at={created_at}
                  title={title}
                  image_url={article_img_url}
                  votes={votes}
                  comment_count={comment_count}
                  article_id={article_id}
                />
              );
            }
          )}
        </div>
      )}
    </div>
  );
}

export default ArticlesList;
