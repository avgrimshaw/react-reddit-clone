import { useContext, useEffect, useState } from "react";
import "./UsersList.css";
import { UsersContext } from "../../contexts/UsersContext";
import { getUsers } from "../../api";

function UsersList() {
  const { users, currentUser, setCurrentUser } = useContext(UsersContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (users.length === 0) return setIsLoading(false);
  }, []);

  function handleOnClick(event) {
    const userIndex = event.target.id.match(/(\d)/)[0];
    getUsers().then((data) => {
      const user = data.users[userIndex];
      user.login_status = true;
      setCurrentUser({
        ...currentUser,
        ...user,
      });
    });
  }

  return (
    <>
      <span className="fs-5">Choose a Mr.Men account:</span>
      {isLoading ? (
        <h3 className="text-center mt-5 fw-bold">LOADING ...</h3>
      ) : (
        <div
          className="d-flex flex-wrap justify-content-between gap-3 mt-2"
          style={{ maxWidth: "230px" }}
        >
          {users.map((user, index) => {
            return (
              <div
                key={user.username}
                className="d-flex flex-column"
                style={{ maxWidth: "max-content" }}
              >
                <button
                  onClick={handleOnClick}
                  className="d-flex place-items-center border rounded overflow-hidden"
                  style={{
                    minWidth: 100,
                    maxWidth: 100,
                    minHeight: 100,
                    maxHeight: 100,
                  }}
                  data-bs-dismiss="modal"
                >
                  <img
                    id={"user-" + index}
                    className="img-fluid w-100 img-thumbnail"
                    src={user.avatar_url}
                    alt={"Mr.Men Account" + user.name + ""}
                  />
                </button>
                <span className="text-center w-100">{user.username}</span>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default UsersList;
