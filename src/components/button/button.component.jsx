import "./button.styles.css";
import Button from "@mui/material/Button";
const ButtonComp = ({ type, isfullWidth, variant, title, onClick }) => {
  return (
    <Button variant={variant} onClick={onClick} type={type} fullwidth>
      {title}
    </Button>
  );
};

export default ButtonComp;
