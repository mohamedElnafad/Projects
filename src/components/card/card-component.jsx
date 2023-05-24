import { useContext, useState } from "react";
import { UserContext } from "../../context-management/user.context";
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteIcon from "@mui/icons-material/Delete";
import "./card-component.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";

const CardCom = ({
  first_name,
  last_name,
  avatar,
  email,
  user_id,
  onClicked,
}) => {
  const [showButtons, setShowButtons] = useState(false);

  const navigate = useNavigate();
  const { deleteHandler } = useContext(UserContext);
  const deleteUser = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete?");
    if (confirmed) {
      deleteHandler(id);
    }
  };
  return (
    <div className="card">
      <div className="image-container">
        <img src={avatar} alt="Profile-user-img" className="round-image" />
      </div>
      <div className="content">
        <h3 className="name">
          {first_name} {last_name}
        </h3>
        <p className="email">{email}</p>
      </div>
      <div className="actions">
        <MoreVertIcon
          onClick={() => {
            setShowButtons(!showButtons);
          }}
        />
        {showButtons && (
          <div className="buttons-container">
            <div className="icon-container">
              <span class="tooltip">update user</span>
              <SettingsIcon
                className="icon"
                onClick={() => {
                  navigate(`/update-user/${user_id}`);
                }}
              />
            </div>
            <div className="icon-container">
              <span class="tooltip">delete user</span>
              <DeleteIcon
                onClick={() => deleteUser(user_id)}
                className="delete icon"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardCom;
