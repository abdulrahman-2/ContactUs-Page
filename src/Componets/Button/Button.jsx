import "./Button.css";

const Button = ({ text, icon, isOutline, isRight, ...rest }) => {
  return (
    <button
      {...rest}
      className={`${
        isOutline ? "form-btton-primary" : "form-btton-secondary"
      } ${"form-btton"} ${isRight ? "right" : ""}`}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
