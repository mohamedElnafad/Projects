import "./button.styles.css";
const Button = ({ type, title, user_id, onClick }) => {
  return (
    <button onClick={onClick} type={type}>
      {title}
    </button>
  );
};

export default Button;
