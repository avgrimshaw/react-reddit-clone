import { Link } from "react-router-dom";
import "./ArticleCard.css";

function ArticleCard({
  topic,
  author,
  body,
  created_at,
  title,
  image_url,
  votes,
  comment_count,
  article_id,
}) {
  const dateCreated = new Date(created_at);

  return (
    <div className="card" style={{ maxWidth: "700px" }}>
      <div className="card-header d-flex justify-content-between">
        <div className="d-flex gap-3">
          <span className="fw-bold" id="article-topic">
            /{topic}
          </span>
          <span id="article-author">{author}</span>
        </div>
        <span className="fw-bold" id="article-age">
          1hr ago
        </span>
      </div>
      <div className="card-body d-flex flex-column">
        <Link to={`/${topic}/${article_id}`}>
          <h5 className="card-title">{title}</h5>
        </Link>
        <img className="card-img mt-2" src={image_url} alt="article" />
        <p id="article-body-text" className="mt-3">
          {body}
        </p>
      </div>
      <ul className="card-footer nav nav-pills card-footer d-flex justify-content-between align-items-center">
        <li className="nav-item d-inline-flex align-items-center">
          <button className="btn btn-primary p-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-arrow-up-short"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
              />
            </svg>
          </button>
          <span className="px-2 bg-primary text-white fw-bold">{votes}</span>
          <button className="btn btn-primary p-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-arrow-down-short"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
              />
            </svg>
          </button>
        </li>
        <li className="nav-item">
          <a className="nav-link active px-2 py-1" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chat-left"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
            </svg>
            <span className="ms-2 fw-bold">{comment_count}</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ArticleCard;
