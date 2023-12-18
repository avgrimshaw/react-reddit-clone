import { createContext, useState, useEffect } from "react";
import { getUsers } from "../api";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    username: "",
    name: "",
    avatar_url: "",
    login_status: false,
  });

  useEffect(() => {
    getUsers().then((data) => setUsers(data.users));
  }, []);

  return (
    <UsersContext.Provider value={{ users, currentUser, setCurrentUser }}>
      {children}
    </UsersContext.Provider>
  );
};
