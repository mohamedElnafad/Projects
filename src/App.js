import logo from "./logo.svg";
import "./App.css";

import Home from "./routes/home";
import { Route, Routes } from "react-router-dom";
import SingleUserView from "./routes/single_user_view";
import CreateNewUser from "./routes/create_new_user";
import UpdateUser from "./routes/update_user";
import Login from "./routes/login";
import { useContext } from "react";
import { UserContext } from "./context-management/user.context";

function App() {
  const { isAuthenticated, setIsAuthenticated } = useContext(UserContext);
  const token = localStorage.getItem("token");
  if (token) {
    setIsAuthenticated(true);
  }
  return (
    <>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
        <Route path="/single-user/:id" element={<SingleUserView />} />
        <Route path="/create-new-user" element={<CreateNewUser />} />
        <Route path="/update-user/:id" element={<UpdateUser />} />
      </Routes>
    </>
  );
}

export default App;
