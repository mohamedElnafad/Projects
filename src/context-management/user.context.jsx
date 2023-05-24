import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext({
  users: [],
  localUsers: [],
  setLoacalUsers: () => {},
  setUsers: () => {},
  isAuthenticated: null,
});

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [localUsers, setLoacalUsers] = useState([]);
  useEffect(() => {
    //IIFE(Immediatly Invoked Function Expression)
    (async () => {
      try {
        const response = await axios.get("https://reqres.in/api/users");

        setUsers(response.data.data);
        setLoacalUsers(response.data.data);
        console.log("useEffect");
        console.log(localUsers);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const deleteHandler = async (id) => {
    try {
      await axios
        .delete(`https://reqres.in/api/users/${id}`)
        .then((response) => console.log(response));
      setLoacalUsers(localUsers.filter((user) => user.id !== id));
      console.log(`User with ID ${id} has been deleted`);
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    users,
    setUsers,
    localUsers,
    setLoacalUsers,
    deleteHandler,
    isAuthenticated,
    setIsAuthenticated,
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
