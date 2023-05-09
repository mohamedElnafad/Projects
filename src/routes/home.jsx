import CardCom from "../components/card/card-component";
import Button from "../components/button/button.component";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context-management/user.context";
import "./home.styles.css";

const Home = () => {
  const { localUsers } = useContext(UserContext);
  const { setIsAuthenticated } = useContext(UserContext);

  const [query, setquery] = useState("");
  // const [filterationData, setFilterationData] = useState(users);

  const navigate = useNavigate();

  const logOutHanlder = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <div className="container">
      <h2>User Management</h2>
      {console.log(localUsers)}
      <Button title="Logout" type="button" onClick={logOutHanlder} />
      <Button
        title="Add new user"
        type="button"
        onClick={() => {
          navigate(`/create-new-user`);
        }}
      />
      <div className="grid-container">
        {localUsers.map((user) => {
          return (
            <>
              <CardCom
                key={user.id}
                first_name={user.first_name}
                last_name={user.last_name}
                email={user.email}
                avatar={user.avatar}
                onClick={() => {
                  navigate(`/single-user/${user.id}`);
                }}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
