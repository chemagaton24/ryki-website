import { ButtonHTMLAttributes } from "react";
import "./style.css";

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { children, className, ...rest } = props;
  return (
    <button
      type="button"
      className={`button-block${className ? " " + className : ""}`}
      {...rest}
    >
      <span className="button-block__label">{children}</span>
    </button>
  );
};

export default Button;
