import { useEffect, useState } from "react";
import { getComments } from "../api";
import CommentCard from "./CommentCard/CommentCard";

function CommentsList({ article_id }) {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id).then((data) => {
      setComments((comments) => [...comments, ...data.comments]);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <h3 className="text-center mt-5 fw-bold">LOADING COMMENTS...</h3>
      ) : (
        <>
          <div className="d-flex flex-column align-items-center gap-4 mt-4">
            {comments.map(
              ({ article_id, author, body, comment_id, created_at, votes }) => {
                return (
                  <CommentCard
                    key={comment_id}
                    article_id={article_id}
                    author={author}
                    body={body}
                    comment_id={comment_id}
                    created_at={created_at}
                    votes={votes}
                  />
                );
              }
            )}
          </div>
        </>
      )}
    </>
  );
}

export default CommentsList;
