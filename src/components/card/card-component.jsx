import ButtonComp from "../button/button.component";
import { useNavigate } from "react-router-dom";
import "./card-component.css";
import { useContext } from "react";
import { UserContext } from "../../context-management/user.context";

const CardCom = ({ first_name, last_name, avatar, email, user_id, onClick }) => {
  const navigate = useNavigate();
  const { deleteHandler } = useContext(UserContext);
  const deleteUser = (id) => {
    deleteHandler(id);
  };
  return (
    <div class="user-card" onClick={onClick}>
      <img src={avatar} alt="Card-image" />
      <div class="user-card-body">
        <h5 class="card-title">
          {first_name} {last_name}
        </h5>
        <p class="user-card-text">{email}</p>
        <div className="buttons">
          <ButtonComp
            title="Update"
            type="button"
            onClick={() => {
              navigate(`/update-user/${user_id}`);
            }}
          />
          <ButtonComp
            title="Delete"
            type="button"
            onClick={() => deleteUser(user_id)}
          />
        </div>
      </div>
    </div>
  );
};

export default CardCom;
