import CardCom from "../components/card/card-component";
import ButtonComp from "../components/button/button.component";
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ButtonComp
          variant="contained"
          title="Add new user"
          type="button"
          onClick={() => {
            navigate(`/create-new-user`);
          }}
        />
        <ButtonComp
          title="Logout"
          variant="outlined"
          type="button"
          onClick={logOutHanlder}
        />
      </div>
      <div className="grid-container">
        {localUsers.map((user) => {
          return (
            <CardCom
              key={user.id}
              user_id={user.id}
              first_name={user.first_name}
              last_name={user.last_name}
              email={user.email}
              avatar={user.avatar}
              onClicked={() => {
                navigate(`/single-user/${user.id}`);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Home;
