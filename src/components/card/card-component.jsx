import ButtonComp from "../button/button.component";
import { useNavigate } from "react-router-dom";
import "./card-component.css";
import { useContext } from "react";
import { UserContext } from "../../context-management/user.context";

const CardCom = ({
  first_name,
  last_name,
  avatar,
  email,
  user_id,
  onClicked,
}) => {
  const navigate = useNavigate();
  const { deleteHandler } = useContext(UserContext);
  const deleteUser = (id) => {
    deleteHandler(id);
  };
  return (
    <div className="user-card" o>
      <img src={avatar} alt="Card-image" onClick={onClicked} />
      <div className="user-card-body">
        <h5 className="card-title">
          {first_name} {last_name}
        </h5>
        <p className="user-card-text">{email}</p>
        <div className="buttons">
          <ButtonComp
            variant="contained"
            title="Update"
            type="button"
            onClick={() => {
              navigate(`/update-user/${user_id}`);
            }}
          />
          <ButtonComp
            title="Delete"
            variant="outlined"
            type="button"
            onClick={() => deleteUser(user_id)}
          />
        </div>
      </div>
    </div>
  );
};

export default CardCom;
