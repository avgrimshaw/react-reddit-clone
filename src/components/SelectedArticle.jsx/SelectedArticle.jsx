import Votes from "../Votes/Votes.jsx";

function SelectedArticle({
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
  return (
    <div className="card mt-2" style={{ maxWidth: "1000px" }}>
      <div className="card-header d-flex justify-content-between fs-5">
        <div className="d-flex gap-3">
          <span className="fw-bold" id="article-topic">
            /{topic}
          </span>
          <span id="article-author">{author}</span>
        </div>
        <span className="fw-bold" id="article-time">
          1hr ago
        </span>
      </div>
      <div className="card-body">
        <h2 className="card-title fs-3">{title}</h2>
        <img className="card-img mt-2" src={image_url} alt="article" />
        <p className="mt-2">{body}</p>
      </div>
      <ul className="nav nav-pills card-footer d-flex justify-content-between align-items-center">
        <Votes article_id={article_id} votes={votes}></Votes>
        <li className="nav-item">
          <a
            className="nav-link bg-dark text-white px-4 py-1 rounded-pill"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-chat-left mb-1"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
            </svg>
            <span className="mb-4 ms-3 fw-bold">{comment_count}</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SelectedArticle;
