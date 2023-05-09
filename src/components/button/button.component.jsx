import "./button.styles.css";
import Button from "react-bootstrap/Button";
const ButtonComp = ({ type, title, onClick }) => {
  return (
    <Button variant="secondary" size="sm" onClick={onClick} type={type}>
      {title}
    </Button>
  );
};

export default ButtonComp;
