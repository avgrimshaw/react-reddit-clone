function CommentCard({
  article_id,
  author,
  body,
  comment_id,
  created_at,
  votes,
}) {
  const dateCreated = new Date(created_at);
  return (
    <div>
      <div className="card">
        <div className="card-header d-flex justify-content-start gap-3">
          <span id="comment-author">{author}</span>
          <span className="fw-bold" id="comment-age">
            1hr ago
          </span>
        </div>
        <div className="card-body">{body}</div>
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
        </ul>
      </div>
    </div>
  );
}

export default CommentCard;
