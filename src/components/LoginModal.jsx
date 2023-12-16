import UsersList from "./UsersList/UsersList";

function LoginModal() {
  return (
    <div>
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#login-modal"
      >
        Log In
      </button>

      <div className="modal fade" id="login-modal">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Log In</h2>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <UsersList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
