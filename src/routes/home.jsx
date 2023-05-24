import CardCom from "../components/card/card-component";
import ButtonComp from "../components/button/button.component";
import AddIcon from "@mui/icons-material/Add";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context-management/user.context";
import "./home.styles.css";

const Home = () => {
  const { localUsers } = useContext(UserContext);

  const [query, setquery] = useState("");
  // const [filterationData, setFilterationData] = useState(users);

  const navigate = useNavigate();
  return (
    <div className="container">
      {console.log(localUsers)}
      <div className="header">
        <h2>User Management</h2>
        <ButtonComp
          style={{
            borderRadius: "20px",
          }}
          endIcon={<AddIcon />}
          variant="outlined"
          title="Add user"
          type="button"
          onClick={() => {
            navigate(`/create-new-user`);
          }}
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

// const { setIsAuthenticated } = useContext(UserContext);
// const logOutHanlder = () => {
//   localStorage.removeItem("token");
//   setIsAuthenticated(false);
// };
// logout button
// <ButtonComp
//   title="Logout"
//   variant="outlined"
//   type="button"
//   onClick={logOutHanlder}
// />
