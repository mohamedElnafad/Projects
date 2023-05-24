import Button from "@mui/material/Button";
const ButtonComp = ({
  type = "button",
  variant,
  title,
  onClick,
  style,
  endIcon,
}) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      type={type}
      fullwidth
      style={style}
      endIcon={endIcon}
    >
      {title}
    </Button>
  );
};

export default ButtonComp;
